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
var times2 = Libs.Random.randomInt(2,5);
if(times.value() > ""+times2+""){
times.add(-times2)
var button = [[{title: "Katıl",url: "https://t.me/joinchat/3nkHL2u5GYY1MTMx"}]]
Bot.sendInlineKeyboard(button,"*#Reklam\n\n Katılmak Mecbur*")
}else{
times.add(1)
}
