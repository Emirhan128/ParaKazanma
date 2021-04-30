/*CMD
  command: /Kanal1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let Buttons = [
  { title: "✅ Katıldım", command: "Kontrol1" },
  { title: "➡️ Kanala Git", url: "t.me/atomreklam" }
]

Bot.sendInlineKeyboard(
  Buttons,
  " Öncelikle Kanala Katıl Ve Katıldıma Bas Ve 0.10 Kazan"
)
