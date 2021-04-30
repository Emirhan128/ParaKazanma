/*CMD
  command: gorev3ayarla
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: metni gönder
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage ("Görev 3 ayarlandı:"+message+"")
Bot.setProperty ("gorev3",message,"string")
