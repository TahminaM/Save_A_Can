// Labels
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

  // Load the model and get elemts from the DOM
const imageSelector = document.getElementById("image-selector");
const selectedImage = document.getElementById("selected-image");
const model = await tf.loadGraphModel("./model/model.json");

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
// When the predict button is clicked, run the predict function
predictButton.addEventListener("click", async function () {
  const image = selectedImage;
  const pre_image = tf.browser.fromPixels(image, 3)
    .resizeNearestNeighbor([224, 224])
    .expandDims()
    .toFloat()
    .reverse(-1);
  const predict_result = await model.predict(pre_image).data();
  console.log(predict_result);
  const order = Array.from(predict_result)
    .map(function (p, i) {
      return {
        probability: p,
        className: Result[i]
      };
    }).sort(function (a, b) {
      return b.probability - a.probability;
    }).slice(0, 2);
    // Display the result
  resultList.innerHTML = "";
  order.forEach(function (p) {
    resultList.insertAdjacentHTML("beforeend", `<li>${p.className}: ${parseInt(Math.trunc(p.probability * 100))} %</li>`);
  });
});
