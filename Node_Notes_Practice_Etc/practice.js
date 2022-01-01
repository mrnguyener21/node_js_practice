const { dir } = require('console')
const fs = require('fs')
const http = require('http')
const express = require('express')
const { title } = require('process')


//read a current file
// console.log(__dirname) //dirname gives you the absolute path so you don't need to do a bunch of ../../
// fs.readFile(`${__dirname}/practiceText.txt`, 'utf-8', (err, data) => { //what's the point of utf-8
// if (err){
//     throw new Error(err);
// }else {
//     console.log(data)
// }
// });
// console.log(readPracticeFile)
//create and read a new file


//create a simple html erver
// const host = 'localhost'
// const port = 8000
// const server = http.createServer((req,res) => {
//     console.log('req',req,res)
// })

// server.listen(port,host, (req,res) => {
//     console.log('practice server is running',req,res)
// })

//EXPRESS
const app = express()
//using GET HTTP Method with express

const movies = [
    {
        id: 1,
        title: 'Christmas Movie',
        price: 100,        
    },

    {
        id: 2,
        title: 'Halloween Movie',
        price: 200,        
    },

    {
        id: 3,
        title: 'Birthday Movie',
        price: 300,        
    }
]

//   ];
app.get('/', (req,res) =>{
    res.send(`<h1>HOME PAGE</h1>`)
});

app.get('/movies', (req, res) => {
    res.status(200).json({ data:movies })

})

app.listen(8000, () => {
    console.log('server is started')
})