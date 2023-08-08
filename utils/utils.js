const fs = require("fs");
const path = require("path");

const writeDataToFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data), "utf8", (error) => {
    console.error("ERROR:", error);
  });
};

const getFilePath = (fileName) => {
  return path.join(__dirname, fileName);
};

module.exports = {
  writeDataToFile,
  getFilePath,
};
