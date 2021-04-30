/*CMD
  command: topref
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = "En İyi 10 ref listesi : \n\n";
let users = Libs.ReferralLib.topList.get(10);

for(var index in users){
  let u = users[index];
  msg+= "*@"+ u.username + "* : " + u.count + "\n";
}

Bot.sendMessage(msg);
