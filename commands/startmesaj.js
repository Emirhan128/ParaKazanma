/*CMD
  command: startmesaj
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Aq Metni Yaz
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("strtmsg", message, "string")
Bot.sendMessage("Start message set to "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
