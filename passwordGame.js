let correctPassword = "isntthemoonlovelyashii"; // Default password

function checkPassword() {
    let userGuess = document.getElementById('password-input').value;
    let feedback = document.getElementById('feedback');
    let greetingMessage = document.getElementById('greetingMessage');
    
    if (userGuess === correctPassword) {
        feedback.textContent = "🎉 Congratulations! You guessed it right!";
        feedback.style.color = "green";

        // Show the greeting message once the password is correct
        greetingMessage.style.display = "block";
    } else {
        feedback.textContent = "Oops! Try again!";
        feedback.style.color = "red";
    }
}
