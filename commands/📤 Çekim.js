/*CMD
  command: 📤 Çekim
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: Seç
  keyboard: 🎛PaparaNo,\n 🔙 Geri
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("wallet")
if( wallet == undefined ){
Bot.sendMessage("_❌ Papara No Ayarlanmamış_")
}else{
if (balance.value() < 10){
Bot.sendMessage("_❌ Minumum Çekim 10 Tl !_")
}else{
Bot.sendMessage("*📤 Ne Kadar Çekmek İstersin *")
Bot.runCommand("Auto")
}
}}
