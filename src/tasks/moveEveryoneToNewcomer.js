const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
client.on('ready', () => {
  const guild = client.guilds.get('458369015782440961');
  console.log(guild);
});
client.login('NDg2OTc0ODY0MjcyMzkyMjA0.DvBdIw.IbwukkngIJH3mhzPVz8i_WebeNs');
