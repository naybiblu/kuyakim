const { snipe } = require("./../../assets/func/dcMisc.js");

module.exports = {

  event: "messageDelete",
  once: false,
  async run(message) {

    await snipe(
      message.id, 
      "delete", 
      message.content, 
      message.member.id,
      message.channel.id,
      message.attachments.first() ? message.attachments.first().proxyURL : null
    );

  }

};