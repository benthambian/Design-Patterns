const Worksheet = require("./Worksheet")

var worksheet = new Worksheet(0);

worksheet.claim(10);

worksheet.deal();

// Will throw exception since Not Supported Under Current State
// worksheet.close();

console.log(worksheet);