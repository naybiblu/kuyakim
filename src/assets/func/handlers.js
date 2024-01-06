const { readdirSync } = require("fs");
const express = require("express");
const { REST, Routes, Collection } = require("discord.js");
require("dotenv").config();
const { log } = require("./dcMisc.js");
const { dc } = require("./clients.js");
const { 
        DC_BOTID: botID,
        DC_GUILDID: guildID,
        DC_TOKEN: token
      } = process.env;

exports.initializeCollections = () => {

  dc.commands = new Collection;

};

exports.setServer = () => {

  express()
    .enable("trust proxy")
    .set("etag", false)
    .set("view engine", "ejs")
    .get('/', async (req, res) => res.send('Kumusta? Ako si <em>Kuya Kim</em>; ang opisyal na nagma-manage sa aking Bahay! ✨'))
    .listen(3000, async () => {

      console.log(log.success(
        "Express", 
        `Online.` 
      ));

    });

};

exports.eventHandler = () => {

  readdirSync("./src/dc/events").filter((e) => e.endsWith(".js")).forEach((event) => {

    let data = require(`./../../dc/events/${event}`);

    if (data.once) dc.once(data.event, data.run.bind(dc));
    else dc.on(data.event, data.run.bind(dc));
    
    });

};

exports.commandHandler = () => {

  readdirSync("./src/dc/commands").forEach((type) => {

    const commands = readdirSync(`./src/dc/commands/${type}`);

    commands.forEach((command) => {

      const code = require(`./../../dc/commands/${type}/${command}`);

    dc.commands.set(code.data?.name, code);
    });

    if (type === "text") console.log(
      log.success(
        "Discord", 
        `Registered ${commands.length} text command${commands.length > 1 ? "s" : ""}.`
      )
    );

  });

};

exports.registerSlash = async () => {

  comArr = [];
  const rest = new REST({ version: '10' }).setToken(token);

  dc.commands.filter((c) => c.slash).forEach((command) => comArr.push(command.data.toJSON()));

  await rest.put(
    Routes.applicationGuildCommands(botID, guildID),
    {
      body: comArr
    }
  )
  .then(async (data) => {

    console.log(log.success(
      "Discord REST", 
      `Registered ${data.length} slash command${data.length > 1 ? "s" : ""}.`
    ));

  })
  .catch(async () => {

    console.log(log.error(
      "Discord REST", 
      `Something went wrong while processing a certain slash command.`
    ));

  });

};

exports.catchErrors = () => {
  
  readdirSync("./src/process").forEach((e) => {

    let data = require(`./../src/process/${e}`);

    process.on(data.event, data.run.bind(process));

  });
  
  console.log(log.success(
    "NodeJS", 
    "Error-catchers are placed."
  ));
  
};

exports.initializeBot = () => {

  const { 
    initializeCollections: a,
    eventHandler: b, 
    commandHandler: c, 
    registerSlash: d,
    setServer: e, 
    catchErrors: f
  } = this;

  a();
  b();
  c();
  d();
  e();
  dc.login(token);

};