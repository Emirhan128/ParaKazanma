/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var Ch1 = Bot.getProperty("Ch1")
var Ch2 = Bot.getProperty("Ch2")
var button = [{ title : "✅ Katıldım" , command : "✅ Check" }]
Bot.sendInlineKeyboard(button , "*Kanala Katıl Ve Katıldıma Bas\n\n➤ "+Ch1+"\n\n➤ "+Ch2+"\n\n⚠️ Katılmak Mecburdur.*")
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*Kendine Ref Olamazsın ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
 balance.add(+ref)
Bot.sendMessageToChatWithId(refUser.chatId, "*♻️ Yeni Referans = "+ref+" tl*");
}

function doAlreadyAttracted(){
  Bot.sendMessage("*Zaten Botu Başlattın ❌*");
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
var new_user = User.getProperty ("new_user")
if(!new_user){ 
Bot.sendMessageToChatWithId(1684473889, "🚦New User🚦\n\n⚜ User = "+user.first_name+"\n🔰 Username = @"+user.username+"\n🆔 User ID = "+user.telegramid+"\n📛 User Link = ["+user.first_name+"](tg://user?id="+user.telegramid+")")

User.setProperty ("new_user",true,"boolean")
}
