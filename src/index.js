const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config');
require('dotenv').config();

client.on('ready', () => {
  console.log('I am ready!');
});

//basic repeating command
client.on('message', (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content
    .slice(1)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === 'asl') {
    const [age, sex, location, ...rest] = args;

    if (!Number(args[0])) {
      message.channel.send(
        'REEEEEEEEEEEEEEEEEEEEEEEEEEEE pls give me your ASL in proper order...age/sex/location(no commas or slashes)'
      );
    } else {
      message.channel.send(
        `${message.author.username} it appears you are ${age}, ${sex[0] === 'm' ? 'male' : 'female'} and from ${
          location.length > 1 ? `${location.split(' ').join(' ')} ${rest}` : location
        } wanna date? ⊂( ͡° ͜ʖ ͡°)⊃ 💘😍💖😘💋 `
      );
    }
  }
});
client.login(config.BOT_TOKEN);
