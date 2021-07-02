console.log("Hello World!\n==========\n");

// Controller is called after form submission and 
// then calls printOdds and checkAge
let controller = function(obj) {
    // Coerce count to a number
    printOdds(count.value * 1);
    // Coerce age to a number
    checkAge(userName.value, age.value * 1);
    document.getElementById("form").reset();
}

// Exercise 1 Section
// Assign a defalt value if count not defined
function printOdds(count=0) {
    console.log("EXERCISE 1:\n==========\n");
    document.getElementById("exercise-1").innerText="";
    for(let i=0; i <= count; i++) {
        if(i % 2 !=0) {
            console.log(`ODD - ${i}`);
            let text = document.createTextNode(i);
            let br = document.createElement("br");
            document.getElementById("exercise-1").appendChild(text);
            document.getElementById("exercise-1").appendChild(br);
        }
    }
}

// Exercise 2 Section
// Assign a defalut value if userName or age not defined
function checkAge(userName, ageP=0) {
    console.log("EXERCISE 2:\n==========\n");
    if(userName == "") {
        userName = "Anonymous User";
    }
    let aboveSixteen =`Congrats "${userName}", you can drive!`;
    let belowSixteen =`Sorry "${userName}", but you need to wait until you're 16.`;
    const minAge = 16;
    if(ageP < minAge) {
        console.log(belowSixteen);
        document.getElementById("exercise-2").innerText = belowSixteen;
    }
    else {
        console.log(aboveSixteen);
        document.getElementById("exercise-2").innerText = aboveSixteen;
    }
}
