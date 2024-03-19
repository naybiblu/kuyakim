const { Client, Partials } = require("discord.js");

exports.dc = new Client({
    intents: [
      "Guilds",
      "GuildMessages",
      "GuildPresences",
      "GuildMembers",
      "DirectMessages",
      "MessageContent"
    ],
    partials: [
      Partials.Channel,
      Partials.User
    ]
});