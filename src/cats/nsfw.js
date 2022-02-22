const superagent = require("superagent");
const explorer = require("../util/explorer")

class Nsfw {
  constructor() {
    this.methods = [
      "anal",
      "ass",
      "bdsm",
      "blowjob",
      "boobs",
      "cum",
      "doujin",
      "erokemo",
      "femdom",
      "fourk",
      "futanari",
      "glasses",
      "gonewild",
      "hentai",
      "hentaiass",
      "hentaithigh",
      "kitsune",
      "kuni",
      "lewd",
      "maid",
      "nekofeet",
      "nekopussy",
      "nekotits",
      "orgy",
      "pgif",
      "pussy",
      "solo",
      "sologif",
      "tentacles",
      "thigh",
      "uniform",
      "wallpaper",
    ];
  }

  async anal() {
    return await explorer.nekobot("anal")
  }

  async ass() {
    return await explorer.nekobot("ass")
  } 

  async bdsm() {
    return await explorer.akaneko("bdsm")
  } 

  async blowjob() {
    return await explorer.akaneko("blowjob")
  }

  async boobs() {
    const id = [Math.floor(Math.random() * 10930)];
    const res = await superagent.get(`http://api.oboobs.ru/boobs/${id}`);
    const preview = res.body[0]["PREVIEW".toLowerCase()];
    const image = `http://media.oboobs.ru/${preview}`;
    return image;
  }    

  async cum() {
    return await explorer.nekobot("cum_jpg")
  }

  async doujin() {
    return await explorer.akaneko("doujin")
  }
  
  async erokemo() {
    return await explorer.nekoslife("erokemo")
  }

  async femdom() {
    return await explorer.akaneko("femdom")
  }
  
  async fourk() {
    return await explorer.nekobot("4k")
  }

  async futanari() {
    return await explorer.nekoslife("futanari")
  }

  async glasses() {
    return await explorer.akaneko("glasses")
  }

  async gonewild() {
    return await explorer.nekobot("gonewild")
  }
  
  async hentai() {
    return await explorer.nekobot("hentai")
  }

  async hentaiass() {
    return await explorer.nekobot("hass")
  } 
  
  async hentaithigh() {
    return await explorer.nekobot("hthigh")
  }
  
  async kitsune() {
    return await explorer.nekoslife("fox_girl")
  } 
  
  async kuni() {
    return await explorer.nekoslife("kuni")
  }
  
  async lewd() {
    return await explorer.nekoslife("lewd")
  }  

  async maid() {
    return await explorer.akaneko("maid")
  }
  
  async nekofeet() {
    return await explorer.nekoslife("feet")
  }

  async nekopussy() {
    return await explorer.nekoslife("pussy_jpg")
  }

  async nekotits() {
    return await explorer.nekoslife("tits")
  }

  async orgy() {
    return await explorer.akaneko("orgy")
  }

  async pgif() {
    return await explorer.nekobot("pgif")
  }

  async pussy() {
    return await explorer.nekobot("pussy")
  }  
  
  async solo() {
    return await explorer.nekoslife("solo")
  }

  async sologif() {
    return await explorer.nekoslife("solog")
  }

  async tentacles() {
    return await explorer.akaneko("tentacles")
  }

  async thigh() {
    return await explorer.nekobot("thigh")
  }  

  async uniform() {
    return await explorer.akaneko("uniform")
  }

  async wallpaper() {
    return await explorer.nekoslife("wallpaper")
  }
}

module.exports = Nsfw;