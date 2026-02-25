function checkNumber() {

    try {
        let value = document.getElementById("number").value;

        // If empty
        if (value === "") {
            throw "Input cannot be empty";
        }

        // If not a number
        if (isNaN(value)) {
            throw "Please enter a valid number";
        }

        // If number is negative
        if (value < 0) {
            throw "Number cannot be negative";
        }

        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerText =
            "✔ Valid number: " + value;
    }
    catch (error) {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerText =
            "❌ Error: " + error;
    }
    finally {
        console.log("Try-Catch executed");
    }
}