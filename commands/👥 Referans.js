/*CMD
  command: 👥 Referans
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [
[{title: "Ref Linkiniz 🔎",command: "reflink"}],[{title: "En İyi Refler 🏆", command: "🎖Top Referals"}],[{title: "🏅 Refferal Detail 📝", command: "reflerim"}]
];
Bot.sendInlineKeyboard(button,"Selam "+user.first_name+" \n Referans Menusuna Hoş Geldin ")
