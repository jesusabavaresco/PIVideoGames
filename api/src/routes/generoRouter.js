const axios = require('axios')
const { Router } = require('express');
const userRouter = Router();
const { Genero } = require('../db');
const { 
    getGenres 
} = require('../controllers/genresControllers');

userRouter.get('/', async (req, res) =>{
    const controller = await getGenres();
    controller.forEach(el => {
        if(el !== undefined){
            Genero.findOrCreate({
                    where: { name: el }
                });
        }
    
    });
    
    const allGenres = await Genero.findAll()
    res.status(201).json({data: allGenres})
});

module.exports = userRouter;