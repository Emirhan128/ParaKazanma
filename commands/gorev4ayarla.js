/*CMD
  command: gorev4ayarla
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: metni gönder
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage ("Görev 4 ayarlandı:"+message+"")
Bot.setProperty ("gorev4",message,"string")
