require('dotenv').config();

const config = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  prefix: process.env.PREFIX
};
module.exports = config;
