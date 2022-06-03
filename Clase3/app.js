import Container from '../Clase2/container.js';
import express from 'express';

const PORT = 8080;
const FILE = '../Clase2/products.txt';

const container = new Container(FILE);

const app = express();
const server = app.listen(PORT, () => console.log(`Server listening port ${server.address().port}`))
server.on('error', err => console.log(`Error on server ${err}`));

// Obtener la lista de productos escritos en la carpeta Clase2 del ejercicio anterior
app.get('/productos',(req, res) => {
    container.getAll()
    .then(products => {
        res.send(products);
    });
});

// Obtener un producto de la lista con un id RANDOM (Lista es el archivo de la carpeta Clase2)
app.get('/productoRandom',(req, res) => {
    const RANDOM = Math.round(Math.random() * (3 - 1) + 1);
    console.log(RANDOM)
    container.getById(RANDOM)
    .then(product => {
        res.send(product);
    });
});


app.listen(3000);

