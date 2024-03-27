exports.run = (message) => {

    if (message.author.bot) return;
    if (message.channel.id !== "880069748740735029") return;

    const author = message.author;

    message.guilds.resolve("1102107437483446275").channels.resolve("1102107800420761670").send({
        embeds: [{
            color: 3092790,
            author: {
              name: author.displayName,
              icon_url: author.displayAvatarURL()
            },
            description: message.content ? "> " + message.content : null,
            timestamp: new Date(Date.now()).toISOString(),
            image: {
              url: message.attachments.first() ? message.attachments.first().proxyURL : null
            }
        }]
    });

};