/*CMD
  command: SendMsg
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: İd Gönder
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
User.setProperty("MsgId",message, "string")
Bot.runCommand("Msg_2")
}else{
Bot.sendMessage("You Are Not An Admin")
}
