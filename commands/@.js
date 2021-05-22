/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var times = Libs.ResourcesLib.userRes("ads")
var times2 = Libs.Random.randomInt(1,5);
if(times.value() > ""+times2+""){
times.add(-times2)
var button = [[{title: "Katıl",url: "https://t.me/referansv"}]]
Bot.sendInlineKeyboard(button,"*#Reklam\n\n Katılmak Mecbur*")
}else{
times.add(1)
}
