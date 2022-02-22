const superagent = require("superagent")

module.exports = {
    // For nekobot API
    nekobot: async function(param) {
        const { body } = await superagent.get(`https://nekobot.xyz/api/image?type=${param}`);
          return body.message;
    },

    // For nekos.life API

    nekoslife: async function(param) {
        const { body } = await superagent.get(`https://nekos.life/api/v2/img/${param}`);
          return body.url;
    },

    // For alexflipnote API

    alexflipnote: async function(param) {
        const { body } = await superagent.get(`https://api.alexflipnote.dev/${param}`);
		return body.file;
    },

    // For Akaneko API

    akaneko: async function(param) {
        const { body } = await superagent.get(`https://akaneko-api.herokuapp.com/api/${param}`);
          return body.url;
    }
}