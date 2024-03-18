const colors = require('colors/safe');
const { loadImage, createCanvas, registerFont } = require('canvas');
const { Canvas } = require("canvacord");
const { AttachmentBuilder } = require('discord.js');
const { getRandomInt } = require("./misc.js");
const { dc } = require("./clients.js");
const { model } = require("./../db/models/snipe.js");

exports.log = { 

  error (provider, message, err = undefined) {

    return colors.red.bold(`[${provider}]: `) + colors.red(`${message}\n${err}`);

  },

  success (provider, message) {

    return colors.green.bold(`[${provider}]: `) + colors.green(`${message}`);

  }

};

exports.setPresence = async () => {

  dc.user.setActivity("/help");
  dc.user.setStatus("idle");

};

exports.dynamicGraphics = {
  async welcome (member) {

    registerFont("src/assets/files/fonts/Agrandir.otf", { family: 'Fancy' });
    
    const canvas = createCanvas(1240, 400);
    const ctx = canvas.getContext('2d');
    const avatar = await loadImage(member?.user.displayAvatarURL({ extension: 'png' }));
    const bg = await loadImage("https://media.discordapp.net/attachments/880362586015670292/1190640079820034148/20231230_192714_0000.png?ex=66080c7c&is=65f5977c&hm=a289a7740ef508b0fd9ebcd7a4cf4c48ad1e71c77e0de110bd3abcc9161f65ee&=&format=png&quality=lossless&width=1025&height=410");

    ctx.drawImage(bg, 0, 0, canvas.width, 480);

    ctx.font = '35px Fancy';
    ctx.fillStyle = "#f6102c";
    ctx.textAlign = "right";
    ctx.fillText("@" + member?.user.tag, 1140, 218);

    ctx.font = '25px Fancy';
    ctx.fillStyle = "#fdc380";
    ctx.textAlign = "right";
    ctx.fillText(`Hausmeyt #${await member?.guild.members.fetch().then(m => m.size)}`, 1200, 375);
    
    ctx.beginPath(); 
    ctx.arc(358, 196, 180, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(avatar, 170, 7, 380, 380);

		const buffer = new AttachmentBuilder(canvas.toBuffer(), "welcome.png");

    return buffer;
    
  },
  async wanted (user) {

    registerFont("src/assets/files/fonts/Wanted.ttf", { family: 'Wanted' }); 

    const bounty = "$ " + getRandomInt(500000, 9000000).toLocaleString("en-US") + ".00–";
    const name = user.username.toUpperCase().replace(" ", "•");
    const canvas = createCanvas(720, 1280);
    const ctx = canvas.getContext('2d');
    
    const sharpened = await Canvas.sharpen(user.displayAvatarURL({ format: 'png', size: 1024 }), 0.3);
    const vintagified = await Canvas.colorfy(sharpened, '#c9995d');
    const avatar = await loadImage(vintagified);
    const wantedSign = await loadImage("https://wallpapercave.com/wp/wp2509766.jpg");

    ctx.drawImage(wantedSign, 0, 0, 720, 1280);
    
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 15;
    ctx.strokeRect(50, 50, 620, 1180);

    ctx.drawImage(avatar, 110, 350, 500, 500);

    ctx.strokeRect(110, 350, 500, 500);

    ctx.font = '200px Wanted';
    ctx.fillText("WANTED", 89, 268);
    
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.lineTo(80, 120);
    ctx.lineTo(640, 120);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineTo(80, 280);
    ctx.lineTo(640, 280);
    ctx.stroke();

    ctx.font = '100px Wanted';
    ctx.fillText("··DEAD OR ALIVE··", 70, 970);
  
    const textDimension = ctx.measureText(name);

    const dynamicText = (context, canvas, text, fontFamily) => {

        let fontSize = 140;

        do {
          context.font = `${fontSize -= 10}px ${fontFamily}`;
        } while (context.measureText(text).width > canvas.width - 125);

        return context.font;

    }
    
    ctx.font = dynamicText(ctx, canvas, name, "Wanted");
    ctx.textAlign = "center";
    ctx.fillText(name, 360, 1072);

    ctx.font = dynamicText(ctx, canvas, bounty, "Wanted");
    ctx.fillText(bounty, 357, 1180);

    const buffer = new AttachmentBuilder(canvas.toBuffer(), "wanted.png");

    return buffer;
    
  }
  
};

exports.snipe = async (messageID, type, content, memberID, channelID, imageURL) => {

  const current = await model.findOne({ channelID: channelID });

  if (!current) await model.create({
    id: messageID,
    type: type,
    content: content,
    memberID: memberID,
    channelID: channelID,
    imageURL: imageURL,
    timestamp: Date.now()
  });
  else await model.updateOne(
    {
      channelID: channelID
    },
    {
      id: messageID,
      type: type,
      content: content,
      memberID: memberID,
      channelID: channelID,
      imageURL: imageURL,
      timestamp: Date.now()
    }
  );

};