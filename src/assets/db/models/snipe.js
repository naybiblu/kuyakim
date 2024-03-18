const mongo = require("mongoose");

exports.model = mongo.models.snipe || mongo.model('snipe', 
    new mongo.Schema({
        id: { type: String, require: true, unique: true },
        type: { type: String, require: true },
        content: { type: String, require: true },
        memberID: { type: String, require: true },
        channelID: { type: String, require: true },
        imageURL: { type: String },
        timestamp: { type: Number, require: true },
    })
);