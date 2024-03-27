const { dc: bot } = require("./../../../assets/func/clients.js");

module.exports = {
  
    data: {
      name: "spy",
      aliases: [],
      forAdmins: true
    }, 
    async run (message, args) {

        const lobby = bot.guilds.resolve("880069748740735026").channels.resolve("880069748740735029");
        const messages = await lobby.messages.fetch({ limit: 100, cache: false});
        const parsed = messages.map(m => m.content).join("\n");
        let array = [];

        if (parsed.length > 2000) for (let i = 0; i < parsed.length; i += 2000) array.push(parsed.slice(i, i + 4000));
        else array.push(parsed);

        array.forEach(async (el) => await message.channel.send(el));
    
    }

};