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
        await message.channel.send(messages.map(m => m.content).join("\n"));
    
    }

};