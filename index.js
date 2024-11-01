function reverseString() {
    const inputString = document.getElementById("inputString").value.trim(); // Get and trim input

    // Check if the input string is empty
    if (inputString === "") {
        document.getElementById("result").innerText = "Please enter a string.";
        return; // Exit the function if input is empty
    }

    // Reverse the string without using built-in functions
    let reversed = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversed += inputString[i];
    }

    // Display the result
    document.getElementById("result").innerText = "Reversed String: " + reversed;
}
