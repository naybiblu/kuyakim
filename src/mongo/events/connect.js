const { log } = require("./../../assets/func/dcMisc.js");

module.exports = {

    event: "connect",
    once: false,
    async run() {
  
        console.log(log.success(
            "MongoDB",
            `Online.`
        ));
  
    }
  
  };