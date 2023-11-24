// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Practica creada por erwing Coss, Pruebas unitarias con GitHub Actions!');
});

const server = app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

app.close = (callback) => {
    server.close(callback);
  };

module.exports = app; // Exportar la aplicación para pruebas
