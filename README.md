# Proyecto de Recetas

Sistema web full-stack para la gestión de recetas de cocina, compuesto por un backend con Node.js y un frontend con React.

## Descripción / Resumen

**Proyecto de Recetas** es una aplicación web completa que permite a los usuarios gestionar y organizar sus recetas de cocina de manera sencilla e intuitiva. La aplicación proporciona una interfaz amigable para crear, visualizar, editar y eliminar recetas, facilitando la organización de recetas personales o profesionales.

### ¿Para quién está dirigido?

- **Aficionados a la cocina**: Personas que desean mantener organizadas sus recetas favoritas en un solo lugar.
- **Chefs profesionales**: Profesionales que necesitan gestionar un catálogo extenso de recetas.
- **Estudiantes de cocina**: Alumnos que quieren documentar y practicar diferentes preparaciones culinarias.
- **Bloggers gastronómicos**: Creadores de contenido que necesitan una base de datos estructurada de sus recetas.

### ¿Qué problema resuelve?

Esta aplicación soluciona varios problemas comunes:

1. **Dispersión de recetas**: Elimina el problema de tener recetas en múltiples cuadernos, notas o aplicaciones diferentes.
2. **Búsqueda ineficiente**: Facilita encontrar una receta específica rápidamente sin tener que buscar entre papeles o archivos.
3. **Pérdida de información**: Evita que se pierdan recetas valiosas al centralizarlas en un sistema digital.
4. **Falta de estructura**: Proporciona un formato consistente para almacenar ingredientes, pasos y otra información relevante.
5. **Accesibilidad**: Permite acceder a las recetas desde cualquier dispositivo con conexión a internet.

La aplicación tiene un backend basado en Node.js y Express que maneja la lógica y el almacenamiento de datos, mientras que el frontend desarrollado en React ofrece una experiencia de usuario fluida y responsive.

## Funcionalidades Principales

- ✅ **Crear recetas**: Añade nuevas recetas con nombre, ingredientes, tiempo de preparación y más
- ✅ **Listar recetas**: Visualiza todas las recetas disponibles en el sistema
- ✅ **Editar recetas**: Modifica la información de recetas existentes
- ✅ **Eliminar recetas**: Borra recetas que ya no necesites
- ✅ **Gestión de ingredientes**: Cada receta puede tener múltiples ingredientes asociados
- ✅ **Valoración**: Sistema de puntuación para calificar las recetas
- ✅ **Estado de publicación**: Control sobre qué recetas están publicadas o en borrador

## Estructura del Proyecto

```
.
├── Backend-Recetas/     # API REST con Node.js y Express
└── Frontend-Recetas/    # Aplicación web con React
```

## Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- express-validator
- SQLite3 (Base de datos)
- Knex.js (Query builder)

### Frontend
- React
- CSS

## Requisitos Previos

- Node.js
- npm
- SQLite3 (se crea automáticamente al iniciar el backend)

## Instalación y Puesta en Marcha

### 1. Configuración del Backend

```bash
# Navegar a la carpeta del backend
cd Backend-Recetas

# Instalar dependencias
npm install

# Iniciar el servidor
npm start
```

El backend se ejecutará en `http://localhost:8080`.

### 2. Configuración del Frontend

```bash
# Abrir una nueva terminal y navegar a la carpeta del frontend
cd Frontend-Recetas

# Instalar dependencias
npm install

# Iniciar la aplicación React
npm start
```

La aplicación frontend se abrirá automáticamente en `http://localhost:3000`.

## Estructura del Backend

- [`src/app.js`](Backend-Recetas/src/app.js) - Punto de entrada de la aplicación y configuración de Express
- [`src/configuration/database.js`](Backend-Recetas/src/configuration/database.js) - Configuración de SQLite3 con Knex.js
- [`src/controller/recetas.js`](Backend-Recetas/src/controller/recetas.js) - Controladores de rutas y validaciones
- [`src/route/recetas.js`](Backend-Recetas/src/route/recetas.js) - Definición de rutas de la API
- [`src/service/recetas.js`](Backend-Recetas/src/service/recetas.js) - Lógica de negocio y operaciones con la base de datos

## Estructura del Frontend

- [`src/App.js`](Frontend-Recetas/src/App.js) - Componente principal
- [`src/pages/PaginaRecetas.js`](Frontend-Recetas/src/pages/PaginaRecetas.js) - Página de listado de recetas
- [`src/pages/PaginaRegistro.js`](Frontend-Recetas/src/pages/PaginaRegistro.js) - Página de registro
- [`src/elements/`](Frontend-Recetas/src/elements/) - Componentes reutilizables
  - [`Galletas.js`](Frontend-Recetas/src/elements/Galletas.js)
  - [`NuevaReceta.js`](Frontend-Recetas/src/elements/NuevaReceta.js)
  - [`Pastel.js`](Frontend-Recetas/src/elements/Pastel.js)

## Base de Datos

El proyecto utiliza **SQLite3** con las siguientes tablas:

### Tabla: `recetas`
- `id` - Identificador único (auto-incremental)
- `nombre` - Nombre de la receta (obligatorio)
- `fechaPublicacion` - Fecha de publicación (obligatorio)
- `tiempoMinutos` - Tiempo de preparación en minutos (obligatorio)
- `porciones` - Número de porciones (obligatorio)
- `valoracion` - Puntuación de 0.0 a 5.0 (obligatorio)
- `publicada` - Estado de publicación (booleano, por defecto false)
- `created_at` y `updated_at` - Timestamps automáticos

### Tabla: `ingredientes`
- `id` - Identificador único (auto-incremental)
- `receta_id` - Relación con tabla recetas (obligatorio)
- `nombre` - Nombre del ingrediente (obligatorio)

La base de datos se crea automáticamente al iniciar el backend por primera vez con el nombre `recetas.db`.

## API Endpoints

La API REST proporciona los siguientes endpoints:

- **GET** `/recetas` - Obtiene todas las recetas
- **GET** `/recetas/:id` - Obtiene una receta específica por ID
- **POST** `/recetas` - Crea una nueva receta
- **PUT** `/recetas/:id` - Actualiza una receta existente
- **DELETE** `/recetas/:id` - Elimina una receta

Puedes importar la colección de Postman incluida en [`recetas.postman_collection.json`](Backend-Recetas/recetas.postman_collection.json) para probar los endpoints de la API.

## Desarrollo

1. Asegúrate de que el backend esté corriendo antes de iniciar el frontend
2. El frontend está configurado para comunicarse con el backend en `http://localhost:8080`
3. Consulta los archivos [`.gitignore`](Backend-Recetas/.gitignore) en cada carpeta para conocer los archivos que no se versionan
4. La base de datos `recetas.db` se genera automáticamente en la carpeta del backend

## Solución de Problemas

### El backend no inicia
- Verifica que no haya otro proceso usando el puerto 8080
- Asegúrate de haber ejecutado `npm install` correctamente
- Revisa que todas las dependencias estén instaladas

### Error con la base de datos
- Elimina el archivo `recetas.db` y reinicia el backend para recrear las tablas
- Verifica que tengas permisos de escritura en la carpeta del backend

## Contribuir

1. Crea un fork del proyecto
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## Autores

- **Hugo Marcuello Torcal**

## Contacto

Para consultas o sugerencias, puedes contactar a través de:
- Email: a29003@svalero.com

## Licencia

Proyecto personal.
