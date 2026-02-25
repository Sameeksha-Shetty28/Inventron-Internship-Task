// Flag to track first or second submit
let isFirstSubmit = true;

// Store generated captcha
let generatedCaptcha = "";

// Get form reference
const form = document.getElementById("dynamicForm");
const extraSection = document.getElementById("extraSection");
const captchaText = document.getElementById("captchaText");
const captchaInput = document.getElementById("captchaInput");

// Function to generate random captcha
function generateCaptcha() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters[randomIndex];
    }

    return captcha;
}

// Form Submit Event
form.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    if (isFirstSubmit) {

        // Show captcha + third field
        extraSection.classList.remove("hidden");

        // Generate captcha
        generatedCaptcha = generateCaptcha();

        // Display captcha
        captchaText.textContent = generatedCaptcha;

        // Change state
        isFirstSubmit = false;

    } else {

        // Validate captcha
        if (captchaInput.value === generatedCaptcha) {
            alert("Submitted successfully");
        } else {
            alert("Invalid captcha");
        }
    }
});
