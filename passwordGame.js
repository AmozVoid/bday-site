const correctPassword = "isntthemoonlovelyashii";

// Centering the game and hiding the greeting initially
document.getElementById("greeting").style.display = "none";
document.getElementById("passwordGame").style.display = "flex";

// Password check
document.getElementById("submitPassword").addEventListener("click", () => {
    const userInput = document.getElementById("passwordInput").value.trim();
    const passwordHint = document.getElementById("passwordHint");

    if (userInput === correctPassword) {
        document.getElementById("passwordGame").style.display = "none";
        document.getElementById("greeting").style.display = "block";
    } else {
        passwordHint.textContent = "Incorrect! Here's a hint: " +
            "The password has something to do with the moon and someone named Ashii.";
    }
});