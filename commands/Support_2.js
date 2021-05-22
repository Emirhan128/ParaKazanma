/*CMD
  command: Support_2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Nası Yardımcı Ola Bilirim?
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("✅ Messaj Admine Gönderildi")
Bot.sendMessageToChatWithId(1684473889, "*New Support Message\n\n🤴Name:*  ["+user.first_name+"](https://t.me/"+user.username+")\n*💡Id:* "+user.telegramid+"\n⛱️Profile [Link](tg://user?id="+user.telegramid+")\n\n*📥Message: * "+message+"")
