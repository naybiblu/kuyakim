const { log } = require("./../../assets/func/dcMisc.js");
const { mongo } = require("./../../assets/func/db.js");

module.exports = {

    event: "disconnect",
    once: false,
    async run() {
  
        console.log(log.error(
            "MongoDB", 
            `Offline.`
        ));

        await mongo.connect();
  
    }
  
};