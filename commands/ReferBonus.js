/*CMD
  command: ReferBonus
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Referans Bonusu Fiyatı Gir
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("RefBonus", message, "string")
Bot.sendMessage("RefBonus Set To "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
