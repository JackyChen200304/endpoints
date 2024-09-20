const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log('running')
)

app.get('/keyword/summarize', (req, res) => {
    console.log('Get /keyword/summarize');
    const fs = require('fs')
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            res.status(400).send();
            return;
        }
        try {
            jsonData = JSON.parse(data);
            console.log('JSON data:', jsonData);
            res.status(200).send(jsonData);
        } catch (err) {
            console.error('Error parsing JSON:', err);
            res.status(400).send();
        }
    });
});