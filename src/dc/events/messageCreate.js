const { readdirSync } = require("fs");

module.exports = {

    event: "messageCreate",
    async run(message) {

      readdirSync("./src/dc/events/extensions/messageCreate").forEach((file) => require(`./extensions/messageCreate/${file}`).run(message));
  
    }
  
  };