const axios = require('axios');
const {
    API_KEY
} = process.env;


const getGenres = async () => {
    let genres = []
    await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`).then((response) => {
      let arrGenres = response.data?.results
      if(arrGenres){
        for (let i = 0; i < arrGenres.length; i++) {
          const element = arrGenres[i];
          genres.push(element.name)
        }
      }
    })
    return genres;
}

module.exports = {
    getGenres,
};
