//This function is supposed to change the text when the button is clicked//
//This is a function tag. it...well...makes things function//
function updateText();{
    document.getElementById("heading").innerHTML="This is kind cool.";
}
//This is anaother fucntion that takes a parameter and uses this input value and outputs results.//
function doubleNumber(num) {
    // Input validation: check if num is a valid number.//
    if (typeof num !== 'number' || isNaN(num)) {
        console.error("Invalid input: Please provide a valid number.");
        return;
    }

    // Process: double the number//
    const result = num * 2;

    // Output the result//
    console.log(`Double of ${num} is ${result}`);
}

