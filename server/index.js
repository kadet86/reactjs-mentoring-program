const express = require('express');
const {resolve} = require('path');
const app = express();
const PORT = 5432;

app.get('/', (request, response) => {
    response.sendFile(resolve(__dirname, '../dist/index.html'));
});

app.get('/bundle.js', (request, response) => {
    response.sendFile(resolve(__dirname, '../dist/bundle.js'));
});

app.listen(PORT, () => console.log(`Hello word task1 app listening on port ${PORT}`));
