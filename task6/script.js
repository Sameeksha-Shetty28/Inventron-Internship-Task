function showMessage() {
    document.getElementById("output").innerText =
        "✅ Button clicked! This is a working button.";
}

function changeColor() {
    document.body.style.background = "#e3f2fd";
    document.getElementById("output").innerText =
        "🎨 Background color changed!";
}

function showDate() {
    let today = new Date();
    document.getElementById("output").innerText =
        "📅 Today's Date: " + today.toDateString();
}

function resetPage() {
    location.reload();
}