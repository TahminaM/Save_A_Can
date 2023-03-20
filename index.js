const Result = {
  0: "aerosol",
  1: "battery",
  2: "cardboard",
  3: "food can",
  4: "glass bottle",
  5: "ink cartridge",
  6: "magazine",
  7: "paper bag",
  8: "plastic bag",
  9: "plastic bottle",
  10: "plastic utensils",
  11: "soda can"
};

// Load the model and get elements from the DOM
const imageSelector = document.getElementById("image-selector");
const selectedImage = document.getElementById("selected-image");
let model;

(async function() {
  model = await tf.loadGraphModel("./model/model.json");
  console.log("Model loaded successfully");
  if (model && model.predict) {
    console.log("Model has predict method");
  }
})();

// Get the image from the user
imageSelector.addEventListener("change", getUploadImage);

function getUploadImage() {
  let reader = new FileReader();
  reader.onload = function() {
    let dataURL = reader.result;
    document.getElementById("selected-image").setAttribute("src", dataURL);
    let predictionList = document.getElementById("prediction-list");
    // If the list is not empty, clear it
    if (predictionList) {
      predictionList.innerHTML = "";
    }
  };
  // Read the image
  let file = document.getElementById("image-selector").files[0];
  reader.readAsDataURL(file);
}

// Predict the image
const predictButton = document.getElementById("predictBtn");
const resultList = document.getElementById("list");

predictButton.addEventListener("click", async function () {
  if (!model) {
    console.error("Model not loaded yet.");
    return;
  }

  const image = selectedImage;
  const pre_image = tf.browser.fromPixels(image, 3)
    .resizeNearestNeighbor([224, 224])
    .expandDims()
    .toFloat()
    .reverse(-1);

  try {
    const predict_result = await model.executeAsync(pre_image);
    const predict_output = await predict_result.data();
    console.log("predict_output: ", predict_output);
    const order = Array.from(predict_output)
      .map(function (p, i) {
        return {
          probability: p,
          className: Result[i]
        };
      })
      .sort(function (a, b) {
        return b.probability - a.probability;
      })
      .slice(0, 13);

    resultList.innerHTML = "";
    order.forEach(function (p) {
      resultList.insertAdjacentHTML("beforeend", `<li>${p.className}: ${parseInt(Math.trunc(p.probability * 100))} %</li>`);
    });
  } catch (error) {
    console.error("Error during prediction: ", error);
  }
});
