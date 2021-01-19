"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

const url = _axios2.default.create({
  baseURL:
    'https://gateway.marvel.com/v1/public/characters?apikey=07f05d67192c439bf8203269fc153fdd&hash=a2110823d4049282bfbe666bd8e79fff&ts=1609890812920&limit=100&offset=0',
});

class UseController {
  async getCharacters(request, response) {
    const { data } = await url.get('/');

    return response.json(data.data.results);
  }
}

exports. default = new UseController();
