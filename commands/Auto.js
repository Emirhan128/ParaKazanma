/*CMD
  command: Auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var withdrawn = Bot.getProperty("totalWithdrawn");
withdrawn = parseFloat(withdrawn); 
var wallet = User.getProperty("wallet");
var balance = Libs.ResourcesLib.userRes("balance")
if(message < 10 ){
Bot.sendMessage("_❌ Minimum Çekim 10 tl_")
}else{
if(message > balance.value()){
Bot.sendMessage("_❌ Yeterli Bakiye Yok"+balance.value().toFixed(6)+" Rs_")
}else{
Bot.sendMessage("*📤 Withdrawal Sent 📤\n\n💳 Transaction Details = Generating....\n 💰Amount = "+message+" Rs\n💼 Wallet = "+wallet+"\n\n⛔ May Be It Will Take Upto 24 Hours To Complete Your Payment⏰*")
balance.add(-message)
Api.sendMessage({ 
chat_id: "@Otoke", 
text: "*🔋 New Approved Payout 🔋\n\n▪️ Status = Confirmed\n▪️ User Id = "+user.telegramid+"\n▪️ Amount = "+message+" Rs*\n\n*📱Paytm Number =* "+wallet+"\n\n*👮🏻‍♂ Bot = @"+bot.name+"*" , 
parse_mode: "Markdown"})
}}
