const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videoGameRouter = require('./videoGameRouter')
const generoRouter = require('./generoRouter')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogame', videoGameRouter);
router.use('/genero', generoRouter);

module.exports = router;
