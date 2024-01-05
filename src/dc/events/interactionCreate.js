const { readdirSync } = require("fs");

module.exports = {

  event: "interactionCreate",
  async run(i) {

    readdirSync("./src/dc/events/extensions/interactionCreate").forEach((file) => require(`./extensions/interactionCreate/${file}`).run(i));
    
  }

};