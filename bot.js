const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const premium = ['295216776428388362']
let prefix = "#"


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var guilds = {};
client.on('message',async message => {
 var prefix2 = '#';//البرفكس
  if(message.content.startsWith(prefix2 + "تقديم")) {

if(!message.channel.guild) return message.reply(' ');


  let submite = message.guild.channels.find(`name`, "submit");

  if(!submite) return message.channel.send("❌لم اجد الروم الخاص بالتقديمات");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب اسم البوت الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| من فضلك اكتب الايدي البوت  الأن... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| من فضلك اكتب مميزات البوت انت الأن... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من تقديمك؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديمات**');

          collected.first().delete();

          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submite⬇**

[**اسم البوت**]: 
${thisMessage}

[**الايدي البوت**]: 
${boi}

[**مميزات البوت**]: 
${boi2}

[**تم التقديم بواسطة**]: 
${message.author}

[**ايدي المقدم**]: 
${message.author.id}`);

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});
client.login(process.env.BOT_TOKEN);
