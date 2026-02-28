function openPage(type) {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("details").classList.remove("hidden");

    let content = "";

    if (type === "for") {
        content = `
For Loop Function

function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

Used when number of iterations is known.
        `;
    }

    else if (type === "while") {
        content = `
While Loop Function

function printNumbers() {
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}

Condition checked before execution.
        `;
    }

    else if (type === "dowhile") {
        content = `
Do While Loop Function

function printNumbers() {
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 5);
}

Executes at least once.
        `;
    }

    else if (type === "forin") {
        content = `
For...in Loop Function

function displayObject() {
    const student = { name: "Sam", age: 21, course: "JS" };
    for (let key in student) {
        console.log(key + ": " + student[key]);
    }
}

Used to iterate over object properties.
        `;
    }

    else if (type === "forof") {
        content = `
For...of Loop Function

function displayArray() {
    const numbers = [10, 20, 30];
    for (let value of numbers) {
        console.log(value);
    }
}

Used to iterate over array values.
        `;
    }

    else if (type === "break") {
        content = `
Break and Continue Example

function loopControl() {
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            continue; // skips 3
        }
        if (i === 5) {
            break; // stops loop
        }
        console.log(i);
    }
}

break → exits loop
continue → skips current iteration
        `;
    }

    else if (type === "nested") {
        content = `
Nested Loop Function

function printPattern() {
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            console.log("i=" + i + ", j=" + j);
        }
    }
}

A loop inside another loop.
Used in patterns and matrix operations.
        `;
    }

    document.getElementById("details-text").textContent = content;
}

function goBack() {
    document.getElementById("details").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}