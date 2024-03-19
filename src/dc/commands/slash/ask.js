const { SlashCommandBuilder } = require("discord.js");
const { aiChat } = require("./../../../assets/func/dcMisc.js");

module.exports = {

  data: new SlashCommandBuilder()
    .setName("ask")
    .setDescription("Consult Gemini or ChatGPT for any question.")
    /*.addStringOption( o => 
      o
        .setName("model")
        .setDescription("The chatbot you want to ask.")
        .setRequired(true)
        .addChoices(
					{ name: 'Gemini', value: 'gemini' },
					{ name: 'ChatGPT', value: 'chatgpt' }
				)
    )*/
    .addStringOption( o => 
      o
        .setName("prompt")
        .setDescription("The question you want to ask.")
        .setRequired(true)
    ),
  slash: true,
  async run (i) {

    //const model = i.options.getString("model");
    const model = "gemini";
    const prompt = i.options.getString("prompt");

    await i.reply("<a:loading:1192136274811813980> Let me think...");
    await aiChat(prompt, i, model);

  }
  
};