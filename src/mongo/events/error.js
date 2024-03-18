const { log } = require("./../../assets/func/dcMisc.js");
const { mongo } = require("./../../assets/func/db.js");

module.exports = {

    event: "error",
    once: false,
    async run(err) {
  
        console.log(log.error(
            "MongoDB", 
            `Error occured:`
        ));

        console.error(err);

        await mongo.disconnect();
  
    }
  
};