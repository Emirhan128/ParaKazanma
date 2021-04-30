/*CMD
  command: 👨‍💻Admin Panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
var button = [
[{title: "🎙️Broadcast", command: "Broadcast"}],[{title: "⚠️Ban", command: "Ban"},{title: "🔓Unban", command: "UnBan"}],[{title:"🕹️Bakiye Değiş", command: "ChangeBal"}],[{title: "♦️Kod Oluştur", command: "MakeGift"},{title: "📤Mesaj Gönder", command: "SendMsg"}],[{title: "💡Starttaki Kanalı Seç",command: "ChangeSChannel"}],[{title:"➕Admin Ekle", command: "AddAdmin"},{title: "➖ Admin", command: "RemoveAdmin"}],[{title:"📤Botu Gönder", command: "SendBot"}],[{title: "🎁Bonus Ayarla", command: "ChangeBonus"}],[{title: "💠Ödeme Kanalı Ayarla",command: "ChangePChannel"}],[{title: "💼Kullanıcı Bakiye Bak", command: "FindUserBal"}],[{title: "💡Starttaki 2. Kanalı Seç", command: "Skanal2"}],[{title: "⚙️Ref Bonus Ayarla", command: "ReferBonus"}],[{title: "🎚 Görevleri Ayarla", command: "gorevayarla"}],[{title: "⚙️ Başlagıc mesajı", command: "startmesaj"}]];
Bot.sendInlineKeyboard(button, "Welcome ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n🌐Coded By [Yusiqo](https://t.me/yusiqo)")
}else{
Bot.sendMessage("You Are Not An Admin")
}
