const form = document.getElementById("regForm");

// Remove popup when user types/selects
function attachLiveValidation(input) {
    input.addEventListener("input", function () {
        const popup = input.parentElement.querySelector(".error-popup");
        if (popup) popup.remove();
        input.classList.remove("error-border");
    });

    input.addEventListener("change", function () {
        const popup = input.parentElement.querySelector(".error-popup");
        if (popup) popup.remove();
        input.classList.remove("error-border");
    });
}

// Attach to all inputs
document.querySelectorAll("input, select").forEach(input => {
    attachLiveValidation(input);
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Remove old popups
    document.querySelectorAll(".error-popup").forEach(el => el.remove());
    document.querySelectorAll("input, select").forEach(el => {
        el.classList.remove("error-border");
    });

    const fields = [
        {
            input: document.getElementById("fname"),
            validate: value => /^[A-Za-z]+$/.test(value.trim()),
            message: "First name is required."
        },
        {
            input: document.getElementById("lname"),
            validate: value => /^[A-Za-z]+$/.test(value.trim()),
            message: "Last name is required."
        },
        {
            input: document.getElementById("email"),
            validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
            message: "Enter a valid email address."
        },
        {
            input: document.getElementById("password"),
            validate: value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value),
            message: "Password must be strong."
        },
        {
            input: document.getElementById("confirmPassword"),
            validate: value => value !== "" && value === document.getElementById("password").value,
            message: "Passwords do not match."
        },
        {
            input: document.getElementById("dob"),
            validate: value => value !== "" && value <= new Date().toISOString().split("T")[0],
            message: "Select valid date of birth."
        },
        {
            input: document.getElementById("gender"),
            validate: value => value !== "",
            message: "Please select gender."
        },
        {
            input: document.getElementById("contact"),
            validate: value => /^[0-9]{10}$/.test(value.trim()),
            message: "Enter valid 10 digit number."
        }
    ];

    function showError(input, message) {

        input.classList.add("error-border");

        const popup = document.createElement("div");
        popup.className = "error-popup";

        popup.innerHTML = `
            <div class="error-icon">!</div>
            <div>${message}</div>
        `;

        input.parentElement.appendChild(popup);

        input.focus();
        input.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // first invalid field
    for (let field of fields) {
        if (!field.validate(field.input.value)) {
            showError(field.input, field.message);
            return;
        }
    }

    // If everything valid
    alert("🎉 Registration Successful!");
    form.reset();
});
