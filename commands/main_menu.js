/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var strtmsg = Bot.getProperty("strtmsg")
var user = User.getProperty("status");
if (user=="member" | user =="administrator" | user=="creator"){
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var ref = Bot.getProperty("RefBonus")
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("💰 Bakiye,👨‍💻Admin Panel,\n👥 Referans,🎰 Bonus,📤 Çekim,\n🗒 Görevler,📞 Yardım", "*▶️ Ref Toplayarak Veya Görev Yaparak Kolayca Kazan \n\n "+strtmsg+"*")
}
if (user=="left"){
Bot.runCommand("/start");
}
