const explorer = require("../util/explorer")

class Animals {
	constructor() {
		this.methods = ["bird","cat","dog","lizard"]
	}
	
	async bird() {
		return await explorer.alexflipnote("birb")
	}
    async cat() {
		return await explorer.alexflipnote("cats")
	}

	async dog() {
		return await explorer.alexflipnote("dogs")
	}

	async lizard() {
		return await explorer.nekoslife("lizard")
	}
}

module.exports = Animals