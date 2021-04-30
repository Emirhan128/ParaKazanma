/*CMD
  command: Kontrol1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
if(chat.chat_type!="private"){
Bot.sendMessage("Buraya Bas Kullanmak İçin");
return
}

let id = user.telegramid;
Api.getChatMember({
chat_id:"@atomreklam", user_id: id, on_result :"/ok"})
