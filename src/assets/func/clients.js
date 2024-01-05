const { Client, Partials } = require("discord.js");

exports.dc = new Client({
    intents: [
      "Guilds",
      "GuildMessages",
      "GuildMembers",
      "DirectMessages",
      "MessageContent"
    ],
    partials: [
      Partials.Channel,
      Partials.User
    ]
});