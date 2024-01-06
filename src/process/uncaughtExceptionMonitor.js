const { log } = require("./../assets/func/dcMisc.js");

module.exports = {
  
  event: "uncaughtExceptionMonitor", 
  async run (err, orig) {

    console.log(log.error(
      "NodeJS", 
      `Error detected from ${orig}:`
    ));
    console.error(err);
    
  }
  
};