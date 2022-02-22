const storage = require("../storage/anime")
const explorer = require("../util/explorer")

class Anime {
    constructor() {
        this.methods = [
            "agree",
            "angry",
            "baka",
            "bang",
            "blush",
            "bored",
            "cold",
            "confused",
            "cry",
            "dance",
            "feed",
            "greet",
            "hero",
            "highfive",
            "hug",
            "laugh",
            "pat",
            "playingGames",
            "poke",
            "punch",
            "run",
            "sad",
            "scared",
            "shrug",
            "sick",
            "sing",
            "slap",
            "sleepy",
            "smile",
            "smug",
            "stare",
            "tickle",
            "wink"
        ]
    }
    async agree() {
        return storage.agree.random()
    }

    async angry() {
        return storage.angry.random()
    }

    async baka() {
        return await explorer.nekoslife("baka")
    }

    async bang() {
        return storage.bang.random()
    }
    
    async blush() {
        return storage.blush.random()
    }

    async bored() {
        return storage.bored.random()
    }

    async cold() {
        return storage.cold.random()
    }

    async confused() {
        return storage.confused.random()
    }

    async cry() {
        return storage.cry.random()
    }

    async dance() {
        return storage.dance.random()
    }

    async feed() {
        return storage.feed.random()
    }

    async greet() {
        return storage.greet.random()
    }

    async hero() {
        return storage.hero.random()
    }

    async highfive() {
        return storage.highfive.random()
    }

    async hug() {
        return await explorer.nekoslife("hug")
    }

    async laugh() {
        return storage.laugh.random()
    }

    async pat() {
        return await explorer.nekoslife("pat")
    }

    async playingGames() {
        return storage.playingGames.random()
    }

    async poke() {
        return await explorer.nekoslife("poke")
    }

    async punch() {
        return storage.punch.random()
    }

    async read() {
        return storage.read.random()
    }

    async run() {
        return storage.run.random()
    }

    async sad() {
        return storage.sad.random()
    }

    async scared() {
        return storage.scared.random()
    }

    async shrug() {
        return storage.shrug.random()
    }

    async sick() {
        return storage.sick.random()
    }

    async sing() {
        return storage.sing.random()
    }

    async slap() {
        return storage.slap.random()
    }

    async sleepy() {
        return storage.sleepy.random()
    }

    async smile() {
        return storage.smile.random()
    }

    async smug() {
        return await explorer.nekoslife("smug")
    }

    async stare() {
        return storage.stare.random()
    }

    async tickle() {
        return await explorer.nekoslife("tickle")
    }

    async wink() {
        return storage.wink.random()
    }
}

module.exports = Anime