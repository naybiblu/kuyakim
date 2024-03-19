const { dc } = require("./../../../../assets/func/clients.js");

exports.run = async () => {

    setInterval( async () => {

        const channel = await dc.channels.fetch("880834479453777920");
        const guild = await dc.guilds.fetch("880069748740735026");

        channel.setName(`Hausmeyts: ${guild.memberCount}`);

    }, 5000);

};