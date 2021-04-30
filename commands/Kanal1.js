/*CMD
  command: Kanal1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 1
CMD*/

let join = Libs.ResourcesLib.userRes("join");
if( join.value()<1){
join.set(1)
Bot.runCommand("/Kanal1")
return
}
Bot.sendMessage("*‼️ Görevi Zaten Yaptın!*")
