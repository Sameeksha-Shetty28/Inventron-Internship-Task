function showContent(type) {
    let content = "";

    if (type === "arrow") {
        content = `
        <h3>Arrow Function</h3>
        <p>Arrow functions are a shorter way to write functions in JavaScript.</p>
        <pre>
const add = (a, b) => a + b;
        </pre>`;
    }

    else if (type === "param") {
        content = `
        <h3>Parameter & Argument</h3>
        <p>Parameters are variables listed in function definition.</p>
        <p>Arguments are values passed to the function.</p>
        <pre>
function greet(name) {
    console.log(name);
}
greet("Sam");
        </pre>`;
    }

    else if (type === "return") {
        content = `
        <h3>Return Keyword</h3>
        <p>The return keyword sends a value back from the function.</p>
        <pre>
function sum(a, b) {
    return a + b;
}
        </pre>`;
    }

    else if (type === "anonymous") {
        content = `
        <h3>Anonymous Function</h3>
        <p>Anonymous functions do not have a name.</p>
        <pre>
let msg = function() {
    console.log("Hello");
};
        </pre>`;
    }

    else if (type === "callback") {
        content = `
        <h3>Callback Function</h3>
        <p>A callback function is passed as an argument to another function.</p>
        <pre>
function display(result) {
    console.log(result);
}

function calculate(a, b, callback) {
    callback(a + b);
}
        </pre>`;
    }

    document.getElementById("content-box").innerHTML = content;
}