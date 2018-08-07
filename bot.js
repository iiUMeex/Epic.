const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا

client.on('message', msg => {
    if (msg.content === 'هلا') {
      msg.reply('هلا والله بيك');
    }
  });

  //كود الرد التلقائي
  //By EpicKinG.

  client.on("message", message => {
    if(message.content.startsWith(prefix + "server")) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**ليس لديك البرمشن المطلوب لاستخدام هذا الامر ❌**");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RANDOM")
  
  .addField('**عدد اعضاء السيرفر 👤 **' , `${message.guild.memberCount}`)
  .addField('**اونر السيرفر 👑**' , `${message.guild.owner.user.username}`)
  .addField(`**الرومات :scroll: **`,true)
  .addField(`# الكتابية`, `${message.guild.channels.filter(m => m.type === 'text').size}`)
  .addField( `:loud_sound: الصوتية`,`${message.guild.channels.filter(m => m.type === 'voice').size}`)
  .addField(`**عدد الرتب**:briefcase:`,`${message.guild.roles.size}`)
        message.channel.send({embed:embed})
    }
  });

  client.on('message', message => {
          

    if (message.content.startsWith(prefix + "user")) {
              if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

         message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
 moment.locale('ar-TN');
var id = new  Discord.RichEmbed()

.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
message.channel.sendEmbed(id);
})
}


  
});

client.login("NDc2NDUyNzEzNDI1NjY2MDQ5.Dkt0mA.caeruTd9f4lUDOUijcpXWjQGUEo")

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', 'welcome');
  let memberavatar = member.user.avatarURL
    if (!channel) return;
  let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('🎽 | name :  ',`${member}`)
      .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
      .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
              .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
             
                .addField("Name:",`<@` + `${member.id}` + `>`, true)
                   
                                   .addField(' الـسيرفر', `${member.guild.name}`,true)
                                     
   .setFooter(`${member.guild.name}`)
      .setTimestamp()
 
    channel.sendEmbed(embed);
  });
  
  client.on('guildMemberRemove', member => {
      var embed = new Discord.RichEmbed()
      .setAuthor(member.user.username, member.user.avatarURL)
      .setThumbnail(member.user.avatarURL)
      .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
      .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
      .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
      .setColor('RED')
      .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
  
  var channel =member.guild.channels.find('name', 'welcome')
  if (!channel) return;
  channel.send({embed : embed});
  })
