const { Router } = require('express');
const userRouter = Router();
const { Videogame, Genero} = require('../db')
const { 
    totalInformation,
    getVideoGameById
 } = require('../controllers/vdControllers');

userRouter.get('/', async (req, res) => {
    const name = req.query.name
    const videogames = await totalInformation()

    if (name) {
        const names = videogames.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        if (names.length) {
            res.status(200).send(names)
        } else {
            res.status(404).send('Not Found')
        }
    } else {
        res.status(200).send(videogames)
    }
})
userRouter.get('/:id', async (req, res) => {
    let id = req.params.id;
    if (id) {
        let ids = await getVideoGameById(id);
        if(ids.length){
            res.status(200).send(ids)
        } else {
            res.status(404).send('Not found Video Game')
        }
    } else {
        res.send('Not Found')
    }

})
userRouter.post('/', async (req, res) => {
    let {
        name,
        image,
        description,
        released,
        rating,
        platforms,
        generos
    } = req.body
    
    const videogames = await totalInformation()
    const lastGame = videogames[videogames.length - 1]?.id;


    const gamecreated = await Videogame.create({
        id: lastGame + 1,
        name,
        image,
        description,
        released,
        rating,
        platforms,
    })

    let generoDb = await Genero.findAll({
        where: { name: generos }
    })

    gamecreated.addGenero(generoDb)
    res.status(200).send('created successfully')
})
module.exports = userRouter;
