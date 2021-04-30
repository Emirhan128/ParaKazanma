/*CMD
  command: Wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ⛔Sadece Papara No Gönder⛔
  keyboard: 
  aliases: 
CMD*/

var wallet = User.getProperty("wallet")
var wallet = User.setProperty("wallet", message, "string")
Bot.sendMessage("*🔍Papara Nonuz "+message+"*")
