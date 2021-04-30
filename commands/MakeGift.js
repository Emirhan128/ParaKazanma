/*CMD
  command: MakeGift
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Kart Kodu Gönder
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
var options = { myData: message }
if (message.length < 10){
  Bot.sendMessage("*SET ATLEAST 10 DIGIT CODE*")
  return
}else Bot.run({ command: "SetValueCode", options })
}else{
Bot.sendMessage("You Are Not An Admin")
}
