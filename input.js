var birthYear = parseInt(prompt("Enter your birth year:"));
var currentYear = new Date().getFullYear();

if (isNaN(birthYear) || birthYear > currentYear || birthYear < 1900) {
    console.log("Invalid entry");
    document.body.innerHTML = "<h1>Invalid entry</h1>";
} else {
    var age = currentYear - birthYear;
    console.log(`Your age is: ${age}`);
    document.body.innerHTML = `<h1>Your age is: ${age}</h1>`;
}
