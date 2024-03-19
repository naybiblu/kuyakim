const { getRandomInt: random } = require("./../../assets/func/misc.js");

module.exports = {

  event: "guildMemberRemove",
  once: false,
  async run(member) {

    const channel = await member.guild.channels.fetch("880069748740735029");
    const byeArray = [
      `Mami-miss ka namin, ${member.displayName}!\n🎶*UMUWI KA NA, BABYYYYY!!!*🎶`,
      `> Ang taong bored, umiiyak. Ang taong masaya, nagpapakatanga. Pero ang taong umalis, nagpapakatanga rin. Charot!\n**—${member.displayName}** probably`,
      `> We happy, we drink\nWe sad, we drink\nWe mad, we drink\nWe got achievements, we drink\n**—${member.displayName}** probably`
    ];

    channel.send(byeArray[random(0, byeArray.length - 1)]);

  }

};