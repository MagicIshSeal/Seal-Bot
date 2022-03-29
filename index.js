const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('We are online!');
});

client.on("message", msg =>{
        var mesg = msg.content;
        if(mesg.includes("+roll") === true){
          var stat = "roll"; //set msg stat to roll
        }
  
        switch(stat){
          case "roll":
            var split = mesg.split(/(\s+)/);
            if(split[2] === undefined){
              for(var i = 0; i < 1; i++){
              var num = dice();
              msg.channel.send(num);
            }
            }else{
              for(var i = 0; i < split[2]; i++){
              var num = dice();
              msg.channel.send(num);
            }
            } 
            function dice(){
              let res = split[0].substring(5)
              let num = Math.ceil(Math.random()*res);
              return num;
            }
            }
            
      
});


client.login(process.env.TOKEN);