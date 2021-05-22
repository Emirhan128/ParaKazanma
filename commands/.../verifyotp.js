/*CMD
  command: verifyotp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ...
  answer: Ok
  keyboard: 
  aliases: 
CMD*/

let cc = User.getProperty("otp")
if(message==cc){
Bot.sendMessage("*✅ Your Email Is Successfully Verified .*")
Bot.runCommand("main_menu")
}else{
Bot.sendMessage("⚠️ You Send Wrong Confirmation Code\n\n✅ Please Send The Right Confirmation Code 🔽")
Bot.runCommand("verifyotp")
}
