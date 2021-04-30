/*CMD
  command: kanit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Lütfen Ss Gönderiniz
  keyboard: 
  aliases: 📮 kanıt gönder
CMD*/

var button =[{title:"Cevapla",command:"SendMsg"}]
let pic = request.photo[0]
let admin = Bot.getProperty("admin")
Bot.setProperty("Ask")
User.getProperty("Caption")
Bot.sendMessage("*📩 Fotoğraf admine Gönderildi *")
Api.sendPhoto({ chat_id: admin, photo: pic.file_id })
Bot.sendInlineKeyboardToChatWithId(admin,button,"*📥 Yeni Kanıt \n\n🧑🏻‍💻 User =*  ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n\*🔮 His Telegram Id :* "+user.telegramid +"\n\n*📮 His Username :* *@"+user.username+"*")

