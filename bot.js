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
 if(command == 'grzybas'){
   message.channel.send('to kurwa')
 }
 if(command=='zlewozmywarka'){
   message.channel.send('no chyba ty')
 }
 if(command == 'franek'){
   message.channel.send('0iq player')
 }
 if(command == 'skilluje'){
   message.channel.send('miekka faja')
 }
  if(command == 'muw'){
    message.channel.send(args.join(' '))
  }
 if(command == 'anime'){
   message.channel.send('gowno zjebane')
 }
  if(command == 'multi'){
     message.channel.send('to pies')
  }
  if(command == 'klir'){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("aa kura ne dla psa");
    message.channel.bulkDelete(args[0])
    message.channel.send(`usunolem ${args[0]} wiadomosci`)
  }
})
client.login(process.env.TOKEN)
