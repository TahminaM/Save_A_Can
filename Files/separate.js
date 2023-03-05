const Papa = require('papaparse');
const fs = require('fs');
const path = require('path');

// Read the CSV file
fs.readFile('meta_df.csv', 'utf8', (err, csvData) => {
  if (err) throw err;

  // Parse the CSV data
  const parsedData = Papa.parse(csvData, {
    header: true,
    skipEmptyLines: true
  }).data;

  // Create the DATASET directory if it doesn't exist
  const datasetDir = './DATASET';
  if (!fs.existsSync(datasetDir)) {
    fs.mkdirSync(datasetDir);
  }

  // Loop through the parsed data and organize the images by category
  parsedData.forEach(row => {
    const catName = row.cat_name;
    const imgFile = row.img_file;
    const imgSlide = imgFile.slice(8);
    const imgPath = path.join('data', imgFile);
    const catDir = path.join(datasetDir, catName);
    // Create the category directory if it doesn't exist
    if (!fs.existsSync(catDir)) {
      fs.mkdirSync(catDir);
    }
    // Copy the image to the category directory
    fs.copyFile(imgPath, path.join('DATASET', catName, imgSlide), err => {
      if (err) throw err;
    });
  });
  console.log('All images copied successfully')
});