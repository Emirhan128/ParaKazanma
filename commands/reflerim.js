/*CMD
  command: reflerim
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// Automatic fix
var refList;

// Automatic fix
var refList;

// Automatic fix
var refList;

// Automatic fix
var refList;

// Automatic fix
var refList;

var i;

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

let msg;
if(refList.length>0){
  msg = "Toplam Ref : " + refList.length + "\n";
  for(i in refList){
    user = refList[i];
    msg+= "\nUser : " + " @" + user.username + "";
  }
}else{
  msg = "Hiç Referansınız Yok";
}
Bot.sendMessage(msg);
