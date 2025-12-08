const { validationResult } = require('express-validator');
const { findAllRecetas, recetaExistsById, recetaExistsByName, modifyReceta, addReceta, removeReceta, findReceta } = require('../service/recetas');

const getRecetas = (async (req, res) => {
    try {
        const recetas = await findAllRecetas();
        res.status(200).json(recetas);
    } catch (error) {
        res.status(500).json({
            code: 500,
            title: 'internal-server-error',
            message: 'Error al obtener las recetas'
        });
    }
});

const getReceta = (async (req, res) => {
    const id = req.params.id;

    if (! await recetaExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'La receta no existe'
        });
    }

    try {
        const receta = await findReceta(id);
        res.status(200).json(receta);
    } catch (error) {
        res.status(500).json({
            code: 500,
            title: 'internal-server-error',
            message: 'Error al obtener la receta'
        });
    }
});

const postReceta = (async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({
            code: 400,
            title: 'bad-request',
            message: 'Error de validación',
            errors: errors.array()
        });
    }

    const { nombre, fechaPublicacion, tiempoMinutos, porciones, valoracion, publicada, ingredientes } = req.body;

    if (await recetaExistsByName(nombre)) {
        return res.status(409).json({
            code: 409,
            title: 'conflict',
            message: 'Ya existe una receta con ese nombre'
        });
    }
    
     
        const newReceta = await addReceta(nombre, fechaPublicacion, tiempoMinutos, porciones, valoracion, publicada, ingredientes);
        res.status(201).json(newReceta);
     
});

const putReceta = (async (req, res) => {
    const id = req.params.id;

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({
            code: 400,
            title: 'bad-request',
            message: 'Error de validación',
            errors: errors.array()
        });
    }
    
    if (!await recetaExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'La receta no existe'
        });
    }

    const { nombre, fechaPublicacion, tiempoMinutos, porciones, valoracion, publicada, ingredientes } = req.body;

    
        const updatedReceta = await modifyReceta(id, nombre, fechaPublicacion, tiempoMinutos, porciones, valoracion, publicada, ingredientes);
        res.status(200).json(updatedReceta);
    
});

const deleteReceta = (async (req, res) => {
    const id = req.params.id;
    
    if (!await recetaExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'La receta no existe'
        });
    }

        await removeReceta(id);
        res.status(204).end();
    
});

module.exports = {
    getRecetas,
    getReceta,
    postReceta,
    putReceta,
    deleteReceta
}