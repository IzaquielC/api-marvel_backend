import axios from 'axios';

const url = axios.create({
  baseURL:
    'https://gateway.marvel.com/v1/public/characters?apikey=07f05d67192c439bf8203269fc153fdd&hash=a2110823d4049282bfbe666bd8e79fff&ts=1609890812920&limit=100&offset=0',
});

class UseController {
  async getCharacters(request, response) {
    const { data } = await url.get('/');

    return response.json(data.data.results);
  }
}

export default new UseController();
