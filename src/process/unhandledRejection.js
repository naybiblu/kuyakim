const { log } = require("./../assets/func/dcMisc.js");

module.exports = {
  
  event: "unhandledRejection", 
  async run (reason, p) {

    console.log(log.error(
      "NodeJS", 
      `Promise ${p} is unhandled due to:`
    ));
    console.error(reason);
    
  }
  
};