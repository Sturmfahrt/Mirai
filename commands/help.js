exports.run = (client, message, args) => {
    message.delete();
    message.channel.send({embed: {
       color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Mirai Bot",
        url: "https://github.com/atomiclord/Mirai",
        description: "this is the help page.",
        fields: [{
           name: "help",
           value: "self explanatory"
          },
         {
            name: "ping",
           value: "used to see if the bot is responding"
         },
         {
            name: "play",
            value: "can play music. currently WIP."
         },
          {
           name: "qizman",
            value: ";)"
          }
        ],
       timestamp: new Date(),
       footer: {
          icon_url: client.user.avatarURL,
         text: "© Example"
        }
      }
    });
  }
  