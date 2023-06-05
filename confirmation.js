
//create a verification process
var verifcation = prompt("Type in verification code from text **********618");

if (verification!=223){
    document.getElementById("Payment denied").innerHTML =
    "Payment denied. Please try again"
}

if (verifcation==223){
    //show order confirmation page
} else {
    //alert payment cancelled!
}



// parseInt(string, )