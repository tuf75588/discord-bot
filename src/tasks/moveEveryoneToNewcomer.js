const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  const guild = client.guilds.get(process.env.GUILD_ID);
  [...guild.roles.values()].forEach(role => {
    console.log(role.name);
  })
});



client.login(process.env.BOT_TOKEN);
