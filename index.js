const fs = require("fs");

// row data
const data = `
Abdiqani, test1
rashka, test8
liiban, test5
hussein, test4
awil, test3

`;

 const writeStream = fs.createWriteStream("Abdiqani.tsx");

 function writeData() {
  let i = 0;
  const writeNextChunk = () => {
    let canContinue = true;
    while (i < 1e9 && canContinue) {
      const newData = data + data;
      canContinue = writeStream.write(newData);
      i++;
    }
    if (i < 1e4) {
       writeStream.once("drain", writeNextChunk);
    } else {
       writeStream.end();
    }
  };

   writeNextChunk();
}

 writeData()