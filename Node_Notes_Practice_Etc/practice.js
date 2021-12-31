const { dir } = require('console')
const fs = require('fs')
const http = require('http')
//read a current file
console.log(__dirname) //dirname gives you the absolute path so you don't need to do a bunch of ../../
fs.readFile(`${__dirname}/practiceText.txt`, 'utf-8', (err, data) => {
if (err){
    throw new Error(err);
}else {
    console.log(data)
}
});
// console.log(readPracticeFile)
//create and read a new file
