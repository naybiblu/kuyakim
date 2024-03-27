module.exports = {
  
    data: {
      name: "eval",
      aliases: [],
      forAdmins: true
    }, 
    async run (message, args) {
  
      const arg = args.join(" ");
      
      if (!arg.startsWith("\`\`\`js") && !arg.endsWith("\`\`\`")) return message.channel.send({embeds: [{
          description: "⚠️ **|** Evaluate code within code block format please! JavaScript is only accepted to be evaluated.",
          color: 0xff0000
      }]});
      
      message.react("👁️");
      eval(`(async () => {${arg.replace("\`\`\`js", "").replace("\`\`\`", "").replace("\n", "")}})()`);
      
    }
  
  };