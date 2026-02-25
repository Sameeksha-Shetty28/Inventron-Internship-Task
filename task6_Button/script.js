function openPage(type) {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("details").classList.remove("hidden");

    let text = "";

    if (type === "arrow") {
        text = `
Arrow Function

Syntax:
const functionName = (parameters) => {
    // code
};

Example:
const add = (a, b) => a + b;

Arrow functions provide a shorter syntax and do not have their own 'this'.
        `;
    }

    else if (type === "param") {
        text = `
Parameters & Arguments

Syntax:
function functionName(parameter) {
    // code
}

Example:
function greet(name) {
    console.log(name);
}
greet("Sam");

Parameters are variables in function definition.
Arguments are values passed while calling the function.
        `;
    }

    else if (type === "return") {
        text = `
Return Keyword

Syntax:
function functionName() {
    return value;
}

Example:
function sum(a, b) {
    return a + b;
}

The return keyword sends a result back to the caller.
        `;
    }

    else if (type === "anonymous") {
        text = `
Anonymous Function

Syntax:
const variable = function() {
    // code
};

Example:
const message = function() {
    console.log("Hello");
};

Anonymous functions do not have a name and are often used as callbacks.
        `;
    }

    else if (type === "callback") {
        text = `
Callback Function

Syntax:
function firstFunction(callback) {
    callback();
}

Example:
function display(result) {
    console.log(result);
}

function calculate(a, b, callback) {
    callback(a + b);
}

A callback function is passed as an argument to another function.
        `;
    }

    document.getElementById("details-text").innerText = text;
}

function goBack() {
    document.getElementById("details").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}