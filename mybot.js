const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const qizman = client.emojis.find(emoji => emoji.name === "qizman")

  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  switch (command) {
    case "ping":
      message.delete();
      message.channel.send("pong!");
      break;
    case "foo":
      message.delete();
      message.channel.send("bar!");
      break;
    case "asl":
      message.delete();
      let [age, sex, location] = args;
      message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
      break;
    case "qizman":
      message.delete();
      message.channel.send(`${qizman} Gay`);
      break;
    default:

  }

  if (message.author.id == config.ownerID) {
    if (command === "say") {
      let text = args.join(" ");
      message.delete();
      message.channel.send(text);
    }
  }
});

client.login(config.token);
