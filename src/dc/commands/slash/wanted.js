const { SlashCommandBuilder } = require("discord.js");
const { dynamicGraphics } = require("./../../../assets/func/dcMisc.js");

module.exports = {

  data: new SlashCommandBuilder()
    .setName("wanted")
    .setDescription("Be the infamous criminal in the server by generating a wanted poster.")
    .addUserOption((o) =>
      o
        .setName("user")
        .setDescription("The user you want to be a criminal.")
    ),
  slash: true,
  async run (i) {

    const target = i.options.getUser("user") ?? i.user;

    await i.reply("<a:loading:1192136274811813980> Let me cook...");

    await i.editReply({
      content: "\'Eto na!", 
      files: [ await dynamicGraphics.wanted(target) ]
    });
  
  }
  
};