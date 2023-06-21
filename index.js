const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

// variable stores the data received from news categories
const news_categories = require('./data/news_categories.json');

// Custom API to get info

// root API call
app.get('/', (req, res) => {
    res.send('API running');
});

// API call to get news categories
app.get('/news-categories', (req, res) =>{
    res.send(news_categories);
})

app.listen(port, () =>{
    console.log('Base server is running on port 5000');
})