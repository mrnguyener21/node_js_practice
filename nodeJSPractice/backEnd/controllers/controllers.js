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

exports.controller = (req, res) => {
    res.json({movies})
}