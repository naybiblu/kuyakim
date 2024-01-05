const { log } = require("./../../../../assets/func/dcMisc.js");
const { dc } = require("./../../../../assets/func/clients.js")

exports.run = async (i) => {

  if (!i.isChatInputCommand()) return;

  const slash = dc.commands.filter((c) => c.slash).get(i.commandName);

  if (!slash) return;

  slash.run(i).catch(
    log.error(
      "Discord",
      "Something went south in this text command.")
  );
  
};