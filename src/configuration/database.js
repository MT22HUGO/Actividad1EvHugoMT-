const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'recetas.db'
    },
    useNullAsDefault: true
});

// Crear las tablas si no existen
db.schema.hasTable('recetas').then((exists) => {
    if (!exists) {
        return db.schema.createTable('recetas', (table) => {
            table.increments('id').primary();
            table.string('nombre').notNullable();
            table.date('fechaPublicacion').notNullable();
            table.integer('tiempoMinutos').notNullable();
            table.integer('porciones').notNullable();
            table.decimal('valoracion', 2, 1).notNullable();
            table.boolean('publicada').defaultTo(false);
            table.timestamps(true, true);
        });
    }
}).then(() => {
    return db.schema.hasTable('ingredientes');
}).then((exists) => {
    if (!exists) {
        return db.schema.createTable('ingredientes', (table) => {
            table.increments('id').primary();
            table.integer('receta_id').unsigned().notNullable();
            table.string('nombre').notNullable();
            table.foreign('receta_id').references('recetas.id').onDelete('CASCADE');
        });
    }
}).then(() => {
    console.log('Base de datos inicializada correctamente');
}).catch((error) => {
    console.error('Error al inicializar la base de datos:', error);
});

exports.db = db;