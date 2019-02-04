client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { /// This is The DMS Code Send The Help In DMS // Code By NotGucci
    let pages = [`
***__وصف عن البوت__***
**
:gem:  البوت فيه كثير ميزات حلوة و جميلة
 ا:rocket: البوت يعمل 24 ساعه 

**
        ***__General orders__***
**
?${prefix}server/يعرض لك معلومات عن السيرفر?
?${prefix}bot/يعرض لك كل معلومات البوت?
?${prefix}count/يعرض لك عدد الاشخاص بالسيرفر بدون بوتات?
?${prefix}invite/ لدعوة البوت في سيرفرك ?
?${prefix}rooms/يعرض لك كل الرومات الي بالسيرفر مع عددها?
?${prefix}roles/يعرض لك كل الرانكات بالسيرفر بشكل جميل?
?${prefix}emojilist/يعرض لك كل الايموجيات الي بالسيرفر?
?${prefix}say/يكرر الكلام الي تكتبو?
?${prefix}id/معلومات عنك?
?${prefix}avatar/صورتك او صورة الي تمنشنو?
?${prefix}embed/يكرر الي تقولو بشكل حلو? 
?${prefix}support/سيرفر الدعم?
**
  `
,`
        ***__Administrative Orders__***
**
?${prefix}move @user /  لسحب الشخص الى روومك?  
?${prefix}bc / رسالة جماعية الى كل اعضاء السيرفر?
?${prefix}role @user <rank> / لأعطاء رتبة لعضو معين?
?${prefix}hchannel / اخفاء الشات?
?${prefix}schannel / اضهار الشات المخفية?
?${prefix}clr <numbr> / مسح الشات بعدد?
?${prefix}clear / مسح الشات?
?${prefix}mute @user <time> / اعطاء العضو ميوت ?
?${prefix}unmute @user / لفك الميوت عن الشخص ?
?${prefix}kick @user <reason> / طرد الشخص من السيرفر?
?${prefix}ban @user <reason> / حضر الشخص من السيرفر?
?${prefix}mutechannel / تقفيل الشات?
?${prefix}unmutechannel / فتح الشات?
?${prefix}mvall/لأتحريك كل الاغضاء للروم الصوتيه?
?${prefix}dc / مسح كل الرومات?
?${prefix}dr / <مسح كل الرانكات <لازم تكون رانك البوت فوق كل الرانكات?
?${prefix}setleave/لأنشاء روم مغادر العضوا?
?${prefix}setmedia/لأنشاء رووم مخصص لصور و الخ?
?${prefix}togglemedia/لتشغيل الروم و اطقائها?
?${prefix}infomedia/معلومات عن روم الي انت أنشأتها?
?${prefix}gstart/للأنشاء جيف اواي شرط لا تمنشن الروم اكتب اسمها فقط?

**

`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('?').then( r => {
            msg.react('?')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
      
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 
