/*CMD
  command: Skanal2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Nick Gönder
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("Ch2", message, "string")
Bot.sendMessage("Start Channel set to "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
