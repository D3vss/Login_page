var email=document.getElementById("email").value;
//console.log(ema);

var pwd=document.getElementById("password").value;
//console.log(pass);

document.getElementById("login").addEventListener("click", function() {
    document.getElementById("email_pass_group").innerHTML ='';
    document.getElementById("login_register").innerHTML ='';
    document.getElementById("email_pass_group").innerHTML ='<div> <img id="spinner" src="images/spinner.gif" height 100px> </div>';
    
});