const { SlashCommandBuilder } = require("discord.js");
const { model } = require("./../../../assets/db/models/snipe.js");

module.exports = {

  data: new SlashCommandBuilder()
    .setName("snipe")
    .setDescription("Discover the recent deleted or edited message in the server."),
  slash: true,
  async run (i) {

    const recent = await model.findOne({ channelID: i.channel.id });

    if (!recent) return i.reply({
      content: "❎ | **There is nothing here that you can snipe to.**",
      ephemeral: true
    });
    else {

      const member = await i.guild.members.fetch(recent.memberID);
      
      i.reply({
        embeds: [
          {
            title: `🌠 | Recently ${recent.type}d message detected!`,
            color: 0x3092790,
            author: {
              name: member,
              icon_url: member.displayAvatarURL()
            },
            description: msg.content ? "> " + recent.content : null,
            timestamp: new Date(recent.timestamp).toISOString(),
            image: {
              url: recent.imageURL
            }
          }
        ]
      });

    }

  }
  
};