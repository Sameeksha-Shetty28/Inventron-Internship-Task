function showAlert() {
    alert("This is an alert button!");
}

function changeColor() {
    document.body.style.backgroundColor = "#d1e7dd";
}

function showDate() {
    document.getElementById("output").innerHTML =
        "Current Date & Time: " + new Date();
}

function resetPage() {
    document.body.style.backgroundColor = "#f4f4f4";
    document.getElementById("output").innerHTML = "";
}