/*CMD
  command: 💰 Bakiye
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*🧑🏻‍💻 İsim = "+user.first_name+"\n\n💰 Bakiye = "+balance.value().toFixed(2)+" Tl\n\n⚜️Referans Topla Ve Daha Fazla Kazan !*")
