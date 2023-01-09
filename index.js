const fs = require("fs");

function writeFile(content) {
  fs.writeFile("files/test.txt", content, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

writeFile(new Date().toString());
