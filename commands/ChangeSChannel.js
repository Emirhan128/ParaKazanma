/*CMD
  command: ChangeSChannel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: nick Gir
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("Ch1", message, "string")
Bot.sendMessage("Start Channel set to "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
