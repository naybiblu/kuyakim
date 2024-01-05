const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  data: {
    name: "verify",
    aliases: [],
    forAdmins: true
  }, 
  async run (message) {

    message.delete();
    
    message.channel.send({
      embeds: [{
        title: "🔡 Verification Time",
        color: 0x2f3136,
        description: "Maligayang pagdating sa **𝐁𝐀𝐇𝐀𝐘 𝐍𝐈 𝐊𝐔𝐘𝐀 𝐊𝐈𝐌**! Paki-pindot na ang button sa ibaba para maging ganap ka nang **Hausmeyt**! 😁"
      }],
      components: [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setCustomId("verify")
            .setLabel("Verify")
            .setStyle(ButtonStyle.Success)
        )
      ]
    });

  }

};