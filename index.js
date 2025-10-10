const fs = require("fs");

fs.writeFile("message.txt", "Hello Node.js Welcome", 'utf-8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});