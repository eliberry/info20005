//getting user input of their personal details
var emailAdress = prompt("Email address");
var firstName= prompt("First name");
var lastName = prompt("Last name");
var address = prompt("Address");
var apartment = prompt("Apartment, suite, etc (optional)");
var suburb = prompt("Suburb");
var stateOrTerritory = prompt("State/territory");
var postcode = prompt("Postcode");
var phone = prompt("Phone");

//for payment section
var phone = prompt("Phone");
var expiration = prompt("MM/YY");
var cvv = prompt("CVV");


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