function sendemail(){
   let name=document.getElementById("name").value ;
   let email=document.getElementById("email").value ;
   let message=document.getElementById("message").value ;
  
   let body="Name:" +name +"<br/> Email:"+ email+"<br/> Message:"+ message;


    Email.send({
      SecureToken :"7015160f-8822-4d9e-af8e-09c59f28a693",
      
        To : "contactabhirahtech@gmail.com",
        From : "contactabhirahtech@gmail.com",
        Subject : "Send message form",
        Body : body
    }).then(
      message => alert("sent successfully")
    );
}



