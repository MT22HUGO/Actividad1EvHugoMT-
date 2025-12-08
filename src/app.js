const express = require('express');
const recetasRouter = require('./route/recetas');

const app = express();
app.use(express.json());

app.use('/', recetasRouter);

// Rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        code: 404,
        title: 'not-found',
        message: 'Endpoint no encontrado'
    });
});

app.listen(8080, () => {
    console.log("Backend iniciado en el puerto 8080");
});
