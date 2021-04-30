/*CMD
  command: gorev1ayarla
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Metni Gönder
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage ("Görev 1 ayarlandı:"+message+"")
Bot.setProperty ("gorev1",message,"string")
