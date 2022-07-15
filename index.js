const express = require('express');     // creates a backend application / server
const request = require('request-promise');    // to make api request


const app = express();   // initialize our application
const PORT = process.env.PORT || 5000;    // creating a port

const generateScraperUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true` ;   // function 

app.use(express.json());      // to parse JSON input

// Route  {root}
app.get('/', (req, res) => {
    res.send('Welcome to Amazon Scaper API.');
});

// Route 1: GET Product details
app.get('/products/:productId', async(req, res) => {
    const { productId } = req.params;     // destructuring parameters
    const { api_key } = req.query;
    try{
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`);
        res.json(JSON.parse(response));     // response comes in text format so we parsed it in json
    }catch(error)
    {
        res.json(error);
    }
});

// Route 2: GET Product reviews
app.get('/products/:productId/reviews', async(req, res) => {
    const { productId } = req.params;     // destructuring parameters
    const { api_key } = req.query;
    try{
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`);
        res.json(JSON.parse(response));     // response comes in text format so we parsed it in json
    }catch(error)
    {
        res.json(error);
    }
});

// Route 3: GET Product offers
app.get('/products/:productId/offers', async(req, res) => {
    const { productId } = req.params;     // destructuring parameters
    const { api_key } = req.query;
    try{
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
        res.json(JSON.parse(response));     // response comes in text format so we parsed it in json
    }catch(error)
    {
        res.json(error);
    }
});

// Route 4: GET Search results
app.get('/search/:searchQuery', async(req, res) => {
    const { searchQuery } = req.params;     // destructuring parameters
    const { api_key } = req.query;
    try{
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`);
        res.json(JSON.parse(response));     // response comes in text format so we parsed it in json
    }catch(error)
    {
        res.json(error);
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));