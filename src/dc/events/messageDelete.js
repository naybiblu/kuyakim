const { snipe } = require("./../../assets/func/dcMisc.js");

module.exports = {

  event: "messageDelete",
  once: false,
  async run(message) {

    if (message.author.bot) return;

    await snipe(
      message.id, 
      "delete", 
      message.content, 
      message.author.id,
      message.channel.id,
      message.attachments.first() ? message.attachments.first().proxyURL : null
    );

  }

};