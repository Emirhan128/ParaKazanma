/*CMD
  command: gorev1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data)
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
var button = [{title:"↩️ Geri",command:"gorevgeri"}]
let gorev1 = Bot.getProperty ("gorev1")
Bot.sendInlineKeyboard (button,gorev1)
