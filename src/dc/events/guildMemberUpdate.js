const { dynamicGraphics } = require("./../../assets/func/dcMisc.js");

module.exports = {

  event: "guildMemberUpdate",
  once: false,
  async run(oldM, newM) {

    if (newM.roles.cache.has("880121950683406407")) newM.guild.channels.resolve("880069748740735029").send({
    content: `\'Andito na si <@${newM.id}>!`,
    files: [ await dynamicGraphics.welcome(newM) ]
  });
    
  }

};