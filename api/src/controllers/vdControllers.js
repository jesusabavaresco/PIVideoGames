const axios = require('axios');
const { Videogame, Genero } = require('../db')
const {
    API_KEY
} = process.env;

const getVideoGamesApi = async () => {
    let allInfo = [];

    try {
        const api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
        const res = await api.data.results;

        const one = await axios.get(api.data.next)
        const result1 = one.data.results;

        const two = await axios.get(one.data.next)
        const result2 = two.data.results;

        const tree = await axios.get(two.data.next)
        const result3 = tree.data.results;

        const four = await axios.get(tree.data.next)
        const result4 = four.data.results;

        const all = [...res, ...result1, ...result2, ...result3, ...result4]

        //traigo la info de la api hasta llegar a 100

        allInfo = all.map(el => {
            return {
                id: el.id,
                name: el.name,
                image: el.background_image,
                description: el.description,
                released: el.released,
                rating: el.rating,
                platforms: el.platforms.map(el => el.platform.name),
                generos: el.genres.map(el => el.name)
            }
        // ordenamiento deseado
        })
        return allInfo;
    } catch (error) {
        console.log(error, 'dont work')
    }
}

const informationDB = async () => {

  const result = await Videogame.findAll(
    {
        include: {
            model: Genero,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    }
    );
    return result;
}
//traigo la info de la base de datos

const totalInformation = async () => {
    const api = await getVideoGamesApi()
    const db = await informationDB()
    const information = [...api, ...db]
    return information
}
//unimos ambas informaciones

const getVideoGameById = async (id) => {
    const vGames = await totalInformation();
    const filteredId = vGames.filter(el => el.id === Number(id));
    return filteredId;
};
// funcion que me filtra los registros por id que recibo por params
module.exports = {
    totalInformation,
    getVideoGameById
}