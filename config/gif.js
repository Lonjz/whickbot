var GphApiClient = require('giphy-js-sdk-core');
const config = require('../config.json')
const gif = GphApiClient(config.giphyKey);

const searchForGif = (gifName) => {
    gif.search('gifs', {"q": gifName, "limit": 1})
    .then((response) => {
       var gif = response.data[0].url;
       return gif;
     })
     .catch((err) => {
      return err;
     })
    }
    
module.exports.searchForGif = searchForGif;