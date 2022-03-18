const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
 
app.listen(port, (error) =>{
    if(error) throw err
    console.log(`listening on port ${port}`)
});

app.get('/api/restaurants', (req, res) =>{
    res.send('restaurants');
    console.log('prompted')
})


