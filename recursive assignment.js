// code to assign ticket prices to different ages 
let age = prompt("Enter your age"); 

if (age<=12) {
    console.log("You're to pay 10 dollars");
}
else if  (age>= 13 && age <=17) {
    console.log("You're to pay 15 dollars")
}
else if (age>=18) {
    console.log("You're to pay 20 dollars")
}

// code to advise person on clothing decision based on temp and weather condition
let temp = Number(prompt("Enter current temperature"));
let weather = prompt("Enter Weather condition: Rainy/Sunny/Cloudy");

if (temp >= 20 && weather== "Sunny") {
    console.log("Please, it's hot outside. Kindly wear something light and not colour Black. Thanks")
}
else if (temp>=10 && weather == "Cloudy") {
    console.log("It's definitely about to rain. Kindly wear something a little thick and go out with your Umbrella. Thank you.")
}
else if (temp <10 && weather == Rainy){
    console.log("It's raining, kindly wear your sweater and also go out with an Umbrella.")
}

// fibonacci code 
function fibonacci(n) {
    if (n === 0) {
        return 0;    // Base case: the 0th Fibonacci number is 0
    }
    if (n === 1) {
        return 1;    // Base case: the 1st Fibonacci number is 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);   // Recursive case
}

// Example usage:
console.log(fibonacci(7));  // Output: 13 (The 7th Fibonacci number is 13)
