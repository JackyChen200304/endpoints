const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World!!!");
});

app.get('/test', (req, res) => {
    res.status(200).send({
        mytestdata: 'this is test point'
    })
});

app.get('/keyword/summarize', (req, res) => {
    console.log('Get /keyword/summarize');
    const fs = require('fs')
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            res.status(400).send(err);
            return;
        }
        try {
            jsonData = JSON.parse(data);
            console.log('JSON data:', jsonData);
            res.status(200).send(jsonData);
        } catch (err) {
            console.error('Error parsing JSON:', err);
            res.status(400).send(err);
        }
    });
});

app.listen(
    PORT,
    () => console.log(`running on port: ${PORT}...`)
)
