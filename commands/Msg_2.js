/*CMD
  command: Msg_2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Mesaj Gönder
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
var tg =
User.getProperty("MsgId")
Bot.sendMessage("*Message:* "+message+"*\n Has been sent*")
Bot.sendMessageToChatWithId(tg, "*Admin Has Messaged You\n*\n\n_"+message+"_")
}else{
Bot.sendMessage("You Are Not An Admin")
}
