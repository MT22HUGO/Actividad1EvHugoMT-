const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const { getRecetas, getReceta, postReceta, putReceta, deleteReceta } = require('../controller/recetas');

// Validaciones para crear/actualizar recetas
const recetaValidations = [
    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser una cadena de texto'),
    
    body('fechaPublicacion')
        .notEmpty().withMessage('La fecha de publicación es obligatoria')
        .isISO8601().withMessage('La fecha debe tener formato válido (YYYY-MM-DD)'),
    
    body('tiempoMinutos')
        .notEmpty().withMessage('El tiempo en minutos es obligatorio'),
    
    body('porciones')
        .notEmpty().withMessage('Las porciones son obligatorias'),
    
    body('valoracion')
        .notEmpty().withMessage('La valoración es obligatoria')
        .isFloat({ min: 0, max: 5 }).withMessage('La valoración debe ser un número decimal entre 0 y 5'),
    
    body('publicada')
        .notEmpty().withMessage('El estado de publicación es obligatorio')
        .isBoolean().withMessage('El estado de publicación debe ser True o False'),
    
    body('ingredientes')
        .isArray({ min: 1 }).withMessage('Debe incluir al menos un ingrediente'),
    
    body('ingredientes.*.nombre')
        .notEmpty().withMessage('Cada ingrediente debe tener un nombre')
        .isString().withMessage('El nombre del ingrediente debe ser una cadena de texto')
];

router.get('/recetas', getRecetas);
router.get('/recetas/:id', getReceta);
router.post('/recetas', recetaValidations, postReceta);
router.put('/recetas/:id', recetaValidations, putReceta);
router.delete('/recetas/:id', deleteReceta);

module.exports = router;