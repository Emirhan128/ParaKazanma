/*CMD
  command: gorev5ayarla
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: metni gönder aq
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage ("Görev 5 ayarlandı:"+message+"")
Bot.setProperty ("gorev5",message,"string")
