const mongo = require("mongoose");
const { log } = require("./../../assets/func/dcMisc.js");
const { mongo: db } = require("./../../assets/func/db.js");

module.exports = {

    event: "disconnect",
    async run() {

        mongo.connection.on("disconnect", async () => {

            console.log(log.error(
                "MongoDB", 
                `Offline.`
            ));
    
            await db.connect();

        });
  
    }
  
};