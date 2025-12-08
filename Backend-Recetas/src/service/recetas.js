const db = require('../configuration/database.js').db;

const findAllRecetas = (async () => {
    const recetas = await db('recetas').select('*');
    
    // Obtener ingredientes para cada receta
    for (let receta of recetas) {
        receta.ingredientes = await db('ingredientes')
            .select('id', 'nombre')
            .where({ receta_id: receta.id });
    }
    
    return recetas;
});

const findReceta = (async(id) => {
    const receta = await db('recetas').select('*').where({id: id}).first();
    
    if (receta) {
        receta.ingredientes = await db('ingredientes')
            .select('id', 'nombre')
            .where({ receta_id: receta.id });
    }
    
    return receta;
});

const addReceta = (async(nombre, fechaPublicacion, tiempoMinutos, porciones, valoracion, publicada, ingredientes) => {
    const [recetaId] = await db('recetas').insert({
        nombre: nombre,
        fechaPublicacion: fechaPublicacion,
        tiempoMinutos: tiempoMinutos,
        porciones: porciones,
        valoracion: valoracion,
        publicada: publicada
    });

    // Insertar ingredientes
    if (ingredientes && ingredientes.length > 0) {
        const ingredientesData = ingredientes.map(ing => ({
            receta_id: recetaId,
            nombre: ing.nombre
        }));
        await db('ingredientes').insert(ingredientesData);
    }

    return await findReceta(recetaId);
});

const modifyReceta = (async(id, nombre, fechaPublicacion, tiempoMinutos, porciones, valoracion, publicada, ingredientes) => {
    await db('recetas').where({id: id}).update({
        nombre: nombre,
        fechaPublicacion: fechaPublicacion,
        tiempoMinutos: tiempoMinutos,
        porciones: porciones,
        valoracion: valoracion,
        publicada: publicada
    });

    // Eliminar ingredientes antiguos y añadir los nuevos
    await db('ingredientes').where({ receta_id: id }).del();
    
    if (ingredientes && ingredientes.length > 0) {
        const ingredientesData = ingredientes.map(ing => ({
            receta_id: id,
            nombre: ing.nombre
        }));
        await db('ingredientes').insert(ingredientesData);
    }

    return await findReceta(id);
});

const removeReceta = (async(id) => {
    await db('ingredientes').where({ receta_id: id }).del();
    await db('recetas').where({id: id}).del();
});

const recetaExistsById = (async(id) => {
    const receta = await db('recetas').select('*').where({id: id}).first();
    return receta != null;
});

const recetaExistsByName = (async(nombre) => {
    const receta = await db('recetas').select('*').where({nombre: nombre}).first();
    return receta !== undefined;
});

module.exports = {
    findAllRecetas,
    findReceta,
    addReceta,
    modifyReceta,
    removeReceta,
    recetaExistsById,
    recetaExistsByName
}