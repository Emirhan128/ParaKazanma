/*CMD
  command: gorev2ayarla
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: metni gönder
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage ("Görev 2 ayarlandı:"+message+"")
Bot.setProperty ("gorev2",message,"string")
