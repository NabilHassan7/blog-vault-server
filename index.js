const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

// Custom API to get info

app.get('/', (req, res) => {
    res.send('API running');
});

app.listen(port, () =>{
    console.log('Base server is running on port 5000');
})