import { UserAuth } from "../components/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import * as tf from '@tensorflow/tfjs';
import { loadGraphModel } from '@tensorflow/tfjs';
import MapPredict from "./MapPredict";
import React, { useEffect, useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Labels
const Result = {
    0: "Aerosol",
    1: "Battery",
    2: "Cardboard",
    3: "Food can",
    4: "Glass bottle",
    5: "Ink cartridge",
    6: "Magazine",
    7: "Paper bag",
    8: "Plastic bag",
    9: "Plastic bottle",
    10: "Plastic utensils",
    11: "Soda can"
};

// Model URL
const url = {
    model: 'https://raw.githubusercontent.com/hexbacon/Model/main/model.json',
};


let model;
let label;

// Helper funciton to load mode
const loadModel = async () => {
    try {
        model = await loadGraphModel(url.model);
    } catch (error) {
        console.log(error);
        return;
    }
    if (model && model.predict) {
        console.log('Model is loaded and has predict method!');
    }
}
  const Prediction = () => {
    const [predictionComplete, setPredictionComplete] = useState(false);
    const { user, logout } = UserAuth();
    const navigate = useNavigate();
    // Call the loadModel function when the component mounts
    useEffect(() => {
      loadModel();
  }, []);

    const handleLogOut = async () => {
        try {
            await logout();
            navigate('/');
            console.log("You are logged out!");
        } catch (error) {
            console.log(error)
        }
    }
    const uploadImage = async (imageFile) => {
        const storage = getStorage();
        const storageRef = ref(storage, 'images/' + imageFile.name);
      
        const metadata = {
          contentType: 'image/jpeg',
        };
      
        const uploadTask = uploadBytesResumable(storageRef, imageFile, metadata);
      
        uploadTask.on('state_changed',
          (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          },
          (error) => {
            console.error('Upload failed', error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              return downloadURL;
            });
          }
        );
      }
      
    
    const PerformPrediction = async () => {
        // Check if model is loaded
        if (!model) {
            console.log("Model not loaded");
            return;
        }
        // Start processing image
        const image = document.getElementById("selected-image");
        const preImage = tf.browser.fromPixels(image, 3)
            .resizeNearestNeighbor([224, 224])
            .expandDims()
            .toFloat()
            .reverse(-1);
        // Start Predicting
        try {
            const predictResult = await model.predict(preImage);
            const predictOutput = await predictResult.data();
            const order = Array.from(predictOutput)
                .map((p, i) => {
                    return {
                        probability: p,
                        className: Result[i]
                    };
                })
                .sort((first, second) => {
                    return second.probability - first.probability;
                })
                .slice(0, 1);
            label = order[0].className;
            setPredictionComplete(true)
        } catch (error) {
            console.log(error);
        }
    }
  
    const ImageHandler = () => {
        let reader = new FileReader();
        reader.onload = function () {
          let dataURL = reader.result;
          document.getElementById("selected-image").setAttribute("src", dataURL);
          let predictionList = document.getElementById("prediction-list");
          if (predictionList) {
            predictionList.innerHTML = "";
          }
        };
        
        let file = document.getElementById("image-selector").files[0];
        reader.readAsDataURL(file);
      
        // Upload the file to Firebase
        uploadImage(file).then(downloadURL => {
          console.log('Uploaded image available at', downloadURL);
        });
      }
      
    return (
        <div className="prediction-container">
            <h1 onLoad={loadModel}>Welcome</h1>
            <p>User Email: {user && user.email}</p>
            <div className="input-container form">
                <div className="file-input form__input">
                    <input type="file" id="image-selector" accept="image/*" onChange={ImageHandler} />
                </div>
                <div className="button-input form__input">
                    <button id="predictBtn" onClick={PerformPrediction}>Predict</button>
                </div>
            </div>
            <div className="results">
                <div className="result-in">
                    <div className="result-image">
                        <h2>Image</h2>
                        <img id="selected-image" className="ml-3" width="250" alt="" />
                    </div>
                    <div className="result-list">
                        <ol id="list"></ol>
                    </div>
                </div>
            </div>
            <button onClick={handleLogOut}>LogOut</button>
            {predictionComplete && <MapPredict item={label} />}
        </div>
    )
}

export default Prediction;