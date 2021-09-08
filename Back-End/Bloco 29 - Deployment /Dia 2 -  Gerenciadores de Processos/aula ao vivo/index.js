const express = require('express');
const process = require('process');
const randomHexColor = require('random-hex-color')();

const app = express();

app.get('/', (req, res) => {
    setTimeout(() => {
        console.log('Oi');
        res.send(`<body style="background-color: ${randomHexColor}">
        <h1>Esta aplicação está rodando com o PID ${process.pid}</h1>
    </body>
    `);
    }, 4000);
});

app.get('/bug', (req, res) => {
    res.send('Quebrou');

    process.exit(1);
})

app.listen(3000, () => console.log('O server ta on'));