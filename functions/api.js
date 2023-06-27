const express = require('express')
// importing serverless http
const serverless = require('serverless-http');
const app = express();
// importing router for deploying to netlify
const router = express.Router();
// initiating CORS
const cors = require('cors');

const port = process.env.PORT || 5000;

// calling CORS function
app.use(cors());

// variable stores the data received from news categories
const news_categories = require('../data/news_categories.json');
// variable stores the data received from news 
const news = require('../data/news.json');

// Custom API to get info

// root API call
router.get('/', (req, res) => {
    res.send('API running');
});

// API call to get news categories
router.get('/news-categories', (req, res) =>{
    res.send(news_categories);
})

// API call to get news according to category
// filter used to select all matching condition
router.get('/category/:id', (req,res) =>{
    const id = req.params.id;
    // 0 is select all news category
    if(id === '0'){
        res.send(news); // sends back all news
    }
    else{
        const categoryNews = news.filter( n => n.category_id === id);
        res.send(categoryNews);
    }   
})

// API call to get specific article in details
// find used due to unique nature of id
router.get('/news/:id', (req,res) =>{
    const id = req.params.id;
    const selectedNews = news.find( n => n._id === id);
    res.send(selectedNews);
})

// API call to get all news
router.get('/news', (req,res) =>{
    res.send(news);
})

// nodemon function 
// app.listen(port, () =>{
//     console.log('Base server is running on port 5000');
// })

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);