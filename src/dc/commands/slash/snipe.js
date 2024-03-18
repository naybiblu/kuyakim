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
      content: "❎ **There is nothing here that you can snipe to.**",
      ephemeral: true
    });
    else {

      const member = await i.guild.members.fetch(recent.memberID);
      
      i.reply({
        embeds: [
          {
            color: 3092790,
            author: {
              name: member.displayName,
              icon_url: member.displayAvatarURL()
            },
            description: recent.content ? "> " + recent.content : null,
            timestamp: new Date(recent.timestamp).toISOString(),
            image: {
              url: recent.imageURL
            },
            footer: {
              text: `🌠 Recently ${recent.type}d message`,
            }
          }
        ]
      });

    }

  }
  
};