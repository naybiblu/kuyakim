const { readdirSync } = require("fs");

module.exports = {

  event: "guildMemberAdd",
  once: false,
  async run(member) {

    readdirSync("./src/dc/events/extensions/guildMemberAdd").forEach((file) => require(`./extensions/guildMemberAdd/${file}`).run(member));

  }

};