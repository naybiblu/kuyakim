const { readdirSync } = require("fs");

module.exports = {

  event: "ready",
  once: true,
  async run() {
    
    readdirSync("./src/dc/events/extensions/ready").forEach((file) => require(`./extensions/ready/${file}`).run());

  }
  
};