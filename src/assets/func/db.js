const mongo = require("mongoose");
const { MONGO_URL: key } = process.env;

exports.mongo = {

    async connect () {

        mongo.set('strictQuery', true);
	    mongo.set('autoIndex', false);

	    await mongo.connect(key);
	    mongo.Promise = global.Promise;

    },

    async disconnect () {

        setTimeout(async () => {

            await mongo.disconnect();

        }, 2000);

    }

};