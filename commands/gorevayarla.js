/*CMD
  command: gorevayarla
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [
[{title: "⚙️Gorev 1", command: "gorev1ayarla"}],[{title: "⚙️Gorev 2", command: "gorev2ayarla"}],[{title: "⚙️Gorev 3", command: "gorev3ayarla"}],[{title: "⚙️Gorev 4 ", command: "gorev4ayarla"}],[{title: "⚙️Gorev 5", command: "gorev5ayarla"}]
];
Bot.sendInlineKeyboard(button,"Selam "+user.first_name+" \n\n Görev Ayarlamak İçin Numara Seç")
