import './App.css';
import { useState, useEffect } from 'react';
import { storage, firestore } from './firebase';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { collection, setDoc } from 'firebase/firestore';
import DataBlock from './Datablock';
import FbCreate from './FbCreate';

//reference to the firestore object
const firestoreRef = collection(firestore, "images");


function App() {
  

// --------------- Storage -------------

  const [imageUpload, setImageUpload] = useState(null);
  //keep track of the urls for images
  const [imageList, setImageList] = useState([]);
  //reference to the whole folder
  const imageListRef = ref(storage, "images/");

  const uploadImage = () => {
    if(imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image uploaded successfully");
    });

  };

  // useEffect(() => {                                                        //used to display uplaoded images on screen
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {    //loop through the items
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

// -------------------------------------


// ------------- FireStore -------------


  const [data, setData] = useState([]);           //only used to make sure realtime updates
  const [loader, setLoader] = useState(true);     //are fine in firestore when hosting/testing

  // function getData(){
  //   firestoreRef.onSnapshot( (querySnapshot) =>{   
  //     const items = []
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data())
  //     })
  //     setData(items)
  //     setLoader(false)
  //   })
  // }
  
  // -------------------------------------

  return (
    <div className="App">
      <input 
        type="file" 
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
          }}
        />
      <button onClick={uploadImage}>Upload Image</button>

      
      <h1>firestore</h1>

      {loader === false && (data.map((image) => (
        <DataBlock image={image}/>
      )))}
      
      <FbCreate />
    </div>
  );
}

export {firestoreRef}
export default App;
