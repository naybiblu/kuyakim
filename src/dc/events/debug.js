module.exports = {

    event: "debug",
    once: false,
    async run(output) {
  
      if (output.startsWith('Hit a 429')) require('child_process').exec('kill 1');
  
    }
  
  };