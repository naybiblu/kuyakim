const { snipe } = require("./../../assets/func/dcMisc.js");

module.exports = {

  event: "messageUpdate",
  once: false,
  async run(oldM) {

    if (oldM.author.bot) return;

    await snipe(
      oldM.id, 
      "edite", 
      oldM.content, 
      oldM.author.id,
      oldM.channel.id,
      oldM.attachments.first() ? oldM.attachments.first().proxyURL : null
    );

  }

};