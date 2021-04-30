/*CMD
  command: /ok
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bal = Libs.ResourcesLib.userRes("balance");
if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}

let status = options.result.status;

var isJoined = (
   (status == "member")||
   (status == "administrator")||
   (status == "creator")
)

if(isJoined){
Bot.sendMessage("✅ Görev Başarılı\n + 0.10 Tl");
bal.add(0.10)
}else{
Bot.sendMessage("❌ 0.10 tl Kazanmak İçin Katılmalısın");
}
