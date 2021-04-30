/*CMD
  command: ♻️ Görevler
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button =[
[{title: "Görev 1 💸",command:"gorev1"},
{title: "Görev 2 💸",command:"gorev2"}],
[{title: "Görev 3💸",command:"gorev3"},
{title: "Görev 4💸",command:"gorev4"}],
[{title: "Görev 5💸",command:"gorev5"}]
];
Bot.sendInlineKeyboard (button,"Görevler Bölümüne Hoşgeldin ")
