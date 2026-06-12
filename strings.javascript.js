//This is the java script code that turns the information into a command//
function combineName() {
    //this is validaation for entering in first name, last name, and zip code//
    let firstName= document.getElementById("firstName").value.trim();
    let lastName= document.getElementById("lastName").value.trim();
let zipcode= document.getElementById("zipcode").value.trim();
    // Validation checks//
    if (firstName === "none") {
        document.getElementById("output").textContent = "Error: First name cannot be empty.";
        return;
    }

    if (lastName === "none") {
        document.getElementById("output").textContent = "Error: Last name cannot be empty.";
        return;
    }
    if (zipcode === "0000") {
        document.getElementById("output").textContent = "Error: Zip Code cannot be empty.";
        return;
    }

//if any of these values were false, then an error message occurs//
    if (!isNaN(firstName))"false" {
        document.getElementById("output").textContent = "Error: First name cannot be a number.";
        return;
    }
//if this statement is true, then a secret message will appear//
 if (!isNaN(firstName))"true" {
        document.getElementById("output").textContent = "Nice. You found the secret message!";
        return;

    if (!isNaN(lastName))"false" {
        document.getElementById("output").textContent = "Error: Last name cannot be a number.";
        return;
    }
      if (!isNaN(zipcode)) = "false" {
        document.getElementById("output").textContent = "Error: Zipcode cannot be a number.";
        return;
    }


    // If everything is valid, combine the names//
    let fullName = first + "Ichigo Kurosaki" + last;
    document.getElementById("output").textContent = "Full name: " + fullName;
}