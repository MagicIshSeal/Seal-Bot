const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('We are online!');
});

client.on("message", msg =>{
        var mesg = msg.content;
        if(mesg.includes("+roll") === true){
          var stat = "roll"; 
        }
  
        switch(stat){
          case "roll":
            var num = dice();
            var split = mesg.split(/(\s+)/);
            function dice(){
              let res = split[0].substring(5)
              let num = Math.ceil(Math.random()*res);
              return num;
            }
            console.log(split[1])
            msg.channel.send(num);
            break;
        }
});


client.login(process.env.TOKEN);