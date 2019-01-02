exports.run = (client, message, args) => {
    message.delete();
    message.channel.send("help command WIP, the following commands are in existance.").catch(console.error);
    message.channel.send("help").catch(console.error);
    message.channel.send("ping").catch(console.error);
    message.channel.send("play").catch(console.error);
    message.channel.send("qizman").catch(console.error);
    message.channel.send("the current multi message help thingy is only temporary. this is until i get a proper help command response code figured out").catch(console.error);
  }
  