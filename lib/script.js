function sendemail(){
   let name=document.getElementById("name").value ;
   let email=document.getElementById("email").value ;
   let message=document.getElementById("message").value ;
  
   let body="Name:" +name +"<br/> Email:"+ email+"<br/> Message:"+ message;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "contactabhirahtech@gmail.com",
        Password : "03E62198F8AAAE561FBE8DA67223A58941C6",
        To : "contactabhirahtech@gmail.com",
        From : "contactabhirahtech@gmail.com",
        Subject : "Send message form",
        Body : body
    }).then(
      message => alert("sent successfully")
    );
}



