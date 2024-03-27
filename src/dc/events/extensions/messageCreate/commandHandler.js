const { dc: bot } = require("./../../../../assets/func/clients.js");

exports.run = (message) => {

    const prefix = "k!";
  
    if (message.author.bot) return;
    if (!message.content.toLowerCase().startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = bot.commands.filter((c) => !c.slash).get(args[0].toLowerCase());
    
    if (!command) return;
    if (command.data?.forAdmins && !message.member.roles.highest) return;
    
    command.run(message, args);

};