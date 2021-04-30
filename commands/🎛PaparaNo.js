/*CMD
  command: 🎛PaparaNo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title : "💼 No Ayarla" , command : "Wallet" }]
var wallet = User.getProperty("wallet")
Bot.sendInlineKeyboard(button, "*🕹 Hesap Ayarları ⚙\n\n🤴🏻 Kullanlcı = "+user.first_name+"\n🆔 ID = "+user.telegramid+"\n💼 PaparaNo =* "+wallet+"\n\n*🚀Papara No Ayarlamadıysanız Ayarlayınız🔻*")
