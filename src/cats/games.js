const storage = require("../storage/Games")

class Games {
    constructor() {
        this.methods = Object.keys(storage)
    }
    async brawlstars() {
        return storage.brawlstars.random()
    }

    async clashofclans() {
        return storage.clashofclans.random()
    }

    async clashroyale() {
        return storage.clashroyale.random()
    }
}

module.exports = Games