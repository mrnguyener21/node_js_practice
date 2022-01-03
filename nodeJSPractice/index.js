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
        price: 100,        
    }
]

//using GET HTTP Method with express
app.get('/', (req,res) =>{
    res.send(`<h1>HOME PAGE</h1>`)
    console.log('testing nodemon SEEMS TO WORK!')
});

app.get('/movies', (req, res) => {
    res.status(200).json({ data:movies })

})

app.get('/test', (req, res) => {
    res.status(200).json({ data:'test' })

})

app.get('/movies/:id', (req, res) => {
    //need explanation of how these two works
    const { params } = req;
    const { id } = params;

    const movieById = movies.filter((movie) => movie.id === parseInt(id))
    
    if (movieById.length > 0){
        res.json({
            id: movieById[0].id,
            title: movieById[0].title,
            price: movieById[0].price,
        })
    } else{
        res.status(404).json({
            error: 'something went wrong grabbing by id'
        })
    }

})

app.get('/movies/:title', (req, res) => {
const { params } = req;
const { title } = params;

const movieByTitle = movies.filter((movie) => movie.title === title)

if (movieByTitle.length > 0){
    res.json({
        id: movieByTitle[0].id,
        title: movieByTitle[0].title,
        price: movieByTitle[0].price,
        }
    )
} else {
    res.status(404).json({
        error: 'something went wrong grabbing by title',
    })
    console.log(movieByTitle)
}
})

app.listen(8000, () => {
    console.log('server is started')
})