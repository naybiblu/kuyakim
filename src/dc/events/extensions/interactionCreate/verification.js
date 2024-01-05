const { AttachmentBuilder } = require("discord.js");
const Captcha = require('@haileybot/captcha-generator');

exports.run = async (i) => {

  if (!i.isButton()) return;
  if (i.customId !== "verify") return;
  
  if (i.member.roles.cache.has("880121950683406407")) return i.reply({
    content: "Sumosobra ka na, ha! **Hausmeyt** ka na kaya!",
    ephemeral: true
  });

  let captcha = new Captcha;
  const attachment = new AttachmentBuilder(captcha._canvas.toBuffer(), { name: "captcha.png" });

  await i.reply({
    content: "Paki-check ang inbox mo dahil nag-message ako ng **CAPTCHA** na isang Weekly Task ko bago ka maging isang **Hausmeyt!**",
    ephemeral: true
  });

  await i.user.send({
    embeds: [{
      title: "🔡 Verification Time!",
      description: "**Instructions:** Paki-type ang **CAPTCHA** sa ibaba sa loob ng 1 minute. Dapat naka-lowercase lahat, ha?",
      color: 0x2f3136,
      footer: {
        text: "Tip: Kontakin ang mga Janitors kung kailangan mo ng tulong sa verification."
      },
      image: {
        url: "attachment://captcha.png"
      }
    }],
    files: [ attachment ]
  })
  .then(async () => {

    const collector = i.user.dmChannel.createMessageCollector({
      filter: (m) => m.content.toLowerCase() === captcha._value.toLowerCase(),
      max: 1,
      time: 60000,
      errors: ['time']
    });

    collector
      .on("end", async (c, r) => {

        if (r === "limit") {

          await i.member.roles.add("880121950683406407");
          await i.member.roles.remove("910315515237503066");
          
          await i.user.send({
          embeds: [{
            title: "✅ Verification Success!",
            description: "**Congratulations!** Pwede ka nang maglibot sa **𝐁𝐀𝐇𝐀𝐘 𝐍𝐈 𝐊𝐔𝐘𝐀 𝐊𝐈𝐌** or start chatting **[here](https://discord.com/channels/880069748740735026/880069748740735029/1191425481900310588)**!",
            color: 0x00FF00
          }]
        });
          
        } else {

          await i.user.send({
            embeds: [{
              title: "❎ Expired CAPTCHA",
              description: "**Sorry!** Subukan mo ulit mag-verify sa **[channel](https://discord.com/channels/880069748740735026/910324379223736360/1191411485038084187)** na ito!",
              color: 0xFF0000
            }]
          });
          
        };
        
      });
    
  });
  
};