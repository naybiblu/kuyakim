exports.run = async (member) => {

    member.roles.add("910315515237503066");
      
    member.send({
      embeds: [{
        title: `👋 Welkam, Hausmeyt ${member.user.tag}!`,
        description: "Para maging ganap kang **hausmeyt** sa aking bahay, mag-verify sa **[channel](https://discord.com/channels/880069748740735026/910324379223736360/1191411485038084187)** na ito!",
        footer: {
          text: "Tip: Kontakin ang mga Janitors kung kailangan mo ng tulong sa verification."
        },
        color: 0x2f3136
      }]
    });
    
  };