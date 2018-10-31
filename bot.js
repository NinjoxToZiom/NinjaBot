const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {
  if (!message.content.startsWith("!")) return;
  var args = message.content.slice("!".length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();
//POD TA LINIJKA DAJESZ IFY
 if(command == 'warn'){
   message.channel.send('kurwa chuj')
 }
  if(command == 'muw'){
    message.channel.send(args.join(' '))
  }
  if(command == 'klir'){
    message.channel.bulkDelete(args[0])
    message.channel.send(`usunolem ${args[0]} wiadomosci`)
  }
})


client.login(process.env.TOKEN);
