/*CMD
  command: RemoveAdmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Tg İd Gönder
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == 1342133634){
Bot.sendMessageToChatWithId(""+message+"", "*Owner Demoted You*")
Bot.sendMessage(message+" Demoted")
Bot.setProperty("admin"+message+"","demote","string")
}else{
Bot.sendMessage("You have to Become Owner")
}
