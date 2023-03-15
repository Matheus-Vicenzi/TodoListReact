const Express = require('express');

const app = Express();

app.listen(3000, '10.3.76.55', () => {
    console.log('server rodando');
});

app.get('/', (req, res) => {
    return res.send('<h1>AOBA</h1>');
});