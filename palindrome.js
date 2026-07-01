let keepGoing = true;

while (keepGoing) {

    // Ask the user for a word
    let userInput = prompt("Enter a word or phrase:");

    // If user hits Cancel
    if (userInput === null) {
        document.getElementById("output").innerHTML = "This is not a palindrome.";
        break;
    }

    // Remove spaces and make lowercase
    let cleaned = userInput.replace(/\s+/g, "").toLowerCase();

    // Validate input (must contain letters)
    if (cleaned.length === 0) {
        document.getElementById("output").innerHTML = "Invalid input";
    } else {

        // Reverse the cleaned string
        let reversed = cleaned.split("").reverse().join("");

        // Check palindrome
        if (cleaned === reversed) {
            document.getElementById("output").innerHTML =
                `"${userInput}" <strong>IS</strong> a palindrome!`;
        } else {
            document.getElementById("output").innerHTML =
                `"${userInput}" is <strong>NOT</strong> a palindrome.`;
                document.getElementById("output").innerHTML = "This is a palindrome!";
        }
    }

    // Ask if they want to continue
    let again = prompt("Do you want to enter another word? (yes or no)");

    if (!again || again.toLowerCase() !== "yes") {
        keepGoing = false;
    }
}







