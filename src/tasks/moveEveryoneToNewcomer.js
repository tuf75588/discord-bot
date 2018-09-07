const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  const guild = client.guilds.get(process.env.GUILD_ID);
  const allRoles = guild.roles.array();
  const rolesByName = allRoles.reduce(
    (byName, role) => ((byName[role.name] = role), byName),
    {}
  );

  const otherRoles = allRoles.filter(role => role.name !== '@everyone');
  const otherRoleMembersById = otherRoles.reduce((memberById, role) => {
    role.members.array().forEach(({ user }) => {
      memberById[user.username] = user;
    });
    return memberById;
  }, {});

  const newcomersRole = rolesByName['@newcomers']
  const everyoneRole = guild.roles.find(role => role.name === '@everyone');
  Promise.all(
    everyoneRole.members.map(member => {
      if (!otherRoleMembersById[member.user.id]) {
        console.log('Starting to move', member.user.username);
        return member.addRole(newcomersRole).then(() => {
          console.log('Moved', member.user.username, 'to @seedling');
        }).catch(() => {
          console.log('Error moving', member.user.username, 'to @seedling');
        });
      }
      console.log('Skipping', member.user.username);
      return Promise.resolve();
    })
  ).then(results => {
    console.log('Checked', results.length, 'users.');
  });
});

client.login(process.env.BOT_TOKEN);
