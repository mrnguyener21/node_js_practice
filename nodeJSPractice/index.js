const { dir } = require('console')
const fs = require('fs')
const http = require('http')
const express = require('express')
const { title } = require('process')


//EXPRESS
const app = express()

const movies = [
    {
        id: 1,
        title: 'Christmas Movie',
        price: 100,
        genre: 'holiday'        
    },
    
    {
        id: 2,
        title: 'Halloween Movie',
        price: 200,
        genre: 'holiday'     
    },
    
    {
        id: 3,
        title: 'Birthday Movie',
        price: 100,
        genre: 'family'       
    },
    {
        id: 4,
        title: 'Horror Movie',
        price: 150,
        genre: 'horror'    
    }
]

//using GET HTTP Method with express
app.get('/', (req,res) =>{
    res.send(`<h1>HOME PAGE</h1>`)
    console.log('testing')
});

app.get('/movies', (req, res) => {
    res.status(200).json({ data:movies })
    const queryParameters = req.query;
    console.log(queryParameters)

})


// app.get('/movies/:genre', (req, res) => {
//     //need explanation of how these two works
//     const { params } = req;
//     const { genre } = params;

//     const movieByGenre = movies.filter((movie) => movie.genre === genre)
    
//     if (movieByGenre.length > 0){
//         const queryParameters = req.query;
//         //route parameters are for mandatory data needed for the route
//         //query parameters are for optional data for the route
//         // for (let i = 0; i < movieByGenre.length; i++) {
//         //     res.json({
//         //         id:  movieByGenre[i].id,
//         //         title:  movieByGenre[i].title,
//         //         price:  movieByGenre[i].price,
//         //         genre:  movieByGenre[i].genre
//         //     })            
//         // }
//         res.json({
//             id:  movieByGenre[0].id,
//             title:  movieByGenre[0].title,
//             price:  movieByGenre[0].price,
//             genre:  movieByGenre[0].genre
//         })
        
//         console.log(queryParameters)
//         console.log(req.params)
//     } else{
//         res.status(404).json({
//             error: 'something went wrong grabbing by id'
//         })
//     }

// })


app.listen(8000, () => {
    console.log('server is started')
})





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