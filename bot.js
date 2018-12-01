client.login( "MzM3Mzk4ODQzNDU4OTc3Nzky.DtbEWQ.UDDG9s_39W-e-1C50vvdbf0ZCv0") ;
const devs = ["337398843458977792"];
const adminprefix = ["Mi"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith('Mi!ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**:white_check_mark:   ${argresult}**`)
  } else 
     if (message.content === ("Mileave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('Miwt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith('Mils')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith('Mist')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**:white_check_mark:**`)
  }
  if (message.content.startsWith('setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('Misetavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}

});
 
