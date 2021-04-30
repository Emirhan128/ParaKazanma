/*CMD
  command: reflink
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","Bot");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage(""+reflink+"");
}
