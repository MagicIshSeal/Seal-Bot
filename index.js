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
            var num = 0;
            function dice(){
              let res = mesg.substring(5)
              var num = Math.ceil(Math.random()*res);
            }
            dice();
            msg.channel.send(num);
            break;
        }
});


client.login(process.env.TOKEN);