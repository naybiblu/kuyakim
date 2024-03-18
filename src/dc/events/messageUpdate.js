const { snipe } = require("./../../assets/func/dcMisc.js");

module.exports = {

  event: "messageUpdate",
  once: false,
  async run(oldM) {

    await snipe(
      oldM.id, 
      "edit", 
      oldM.content, 
      oldM.member.id,
      oldM.channel.id,
      oldM.attachments.first() ? message.attachments.first().proxyURL : null
    );

  }

};