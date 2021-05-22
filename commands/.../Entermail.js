/*CMD
  command: Entermail
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ...

  <<ANSWER
💌 Send Your Email Here ⬇️

✅_ A Confirmation Code Will Send To Your Coinbase Email In 5-10 Seconds.Be Patient_
  ANSWER
  keyboard: 
  aliases: 
CMD*/

function validateEmail(email) {

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());

}


if(validateEmail(message)){
function GACode(){
  
  // send Email
  MailApp.sendEmail({
    to: message,
    subject: "Verification Code For @"+bot.name+" Login",
    htmlBody: "<body><b>Your Confirmation Code : </b></body>" + options.myData+" "

  });
}
Libs.GoogleApp.run({
  func: GACode,
  onRun: "onRun",
});

Bot.sendMessage("✅ Confirmation Code Sent  To Your Mail Successfully.\n\n⚠️ Please Check Also Spam Folder If You Can't Found It.")



Bot.runCommand("/verifyotp")

}else{

Bot.sendMessage("⚠️ Please Send a Vaild Mail")
Bot.runCommand("/getM")
}
