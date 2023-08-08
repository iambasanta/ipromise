const fs = require("fs");

const writeDataToFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data), "utf8", (error) => {
    console.error("ERROR:", error);
  });
};

module.exports = {
  writeDataToFile,
};
