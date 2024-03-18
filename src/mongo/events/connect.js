const mongo = require("mongoose");
const { log } = require("./../../assets/func/dcMisc.js");

module.exports = {

    event: "connect",
    async run() {
  
        mongo.connection.on("connect", async () => {

            console.log(log.success(
                "MongoDB",
                `Online.`
            ));

        });
  
    }
  
  };