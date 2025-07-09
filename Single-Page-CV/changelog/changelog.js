let now = new Date();
let birthday = new Date("April 29 2003 23:55");
let epoch = birthday.getTime();
document.getElementById("date").innerHTML = `<h1> todays date is ${now} (and ${now.getMilliseconds()} milliseconds!<br>
that date in the UTC timezone is ${now.getUTCDate()}<br>
my birthday was ${birthday}<br>
that time in epoch is ${epoch}</h1>`;

function exampleText() {
    alert("this is example text!");
}

function math() {
    let num = +(prompt("enter first number"));
    let num2 = +(prompt("enter second number"));
    let sumNum = (num + num2);
    alert("your sum is " + sumNum + "!");
}

function array() {
    let array = [];
    let i0 = prompt("enter first item");
    let i1 = prompt("enter second item");
    let i2 = prompt("enter last item");
    array.push(i0);
    array.push(i1);
    array.push(i2);
    let ans = +prompt(`would you like to view item 1, 2, or 3? i think
        i may
        be beginning
        to prefer
        strng literals! ${array[2]}`);
    for (let i = 0; i < 3; i++) {
        if ((i + 1) == ans) {
            alert(array[i]);
        }
    }
}

function stringTests() {
    let string = prompt("enter the string you would like to use");
    let stringArray = string.split(" ");
    let backwardsStringArray = stringArray.slice().reverse();
    /*for (let i = 0; i < stringArray.length; i++) {
        backwardsStringArray.splice(0, 0, stringArray[i])
    }*/

    palindrome = stringArray.concat(backwardsStringArray);

    document.getElementById("stringy").innerHTML = `<p>the character at the 2nd index is "${string.charAt(2)}."
    the index of the first "a" in the sequence is ${string.indexOf(`a`)}
    the first four letters of your string are "${string.slice(0, 5)}."
    the length of your string is ${string.length} characters.
    your string in all caps is "${string.toUpperCase()}"
    your string backwards is ${backwardsStringArray}
    your string as a palindrome is ${palindrome}
    </p>`;

    if (Array.isArray(palindrome)) {
        let midpoint = Math.round(palindrome.length / 2);
        palindrome.splice(midpoint, 0, "SPLICE")

        document.getElementById("stringy2").innerHTML = `<p>your string became an array!
        Lets do a test splice.. ${palindrome}<br> 
        time to fill your palindrome with gravel HAHAHAHHAHA ${palindrome.fill("gravel", midpoint)}</p>`;
    }
}

let arrayTests = () => {
    let string = prompt("enter a sentence please");
    let array = string.split(" ");

    array.forEach(word => { console.log(word) });
    let arrays = array.map(word => { return `${word}s` });
    let modArray = array.filter(word => { return ['a', 'e', 'i', 'o', 'u'].includes(word[0]) });
    let longer = word => { return word.length > 3 };

    let numbers = [1, 2, 3, 4, 5];
    let sum = numbers.reduce((a, b) => { return a+b; });

    document.getElementById("arrayy").innerHTML = `<p>To quote you, "${array}"<br>
    to quote you agains, "${arrays}"
    to quote all words starting with a vowel "${modArray}"<br>
    to quote the first word with more than 3 letters "${array.find(longer)}"
    the index of that word is "${array.findIndex(longer)}"
    your number sir "${sum}"
    </p>`;

}

let houston = {
    name: "houston",
    race: "human",
    weapon: "legs",
    age: 22,
    greeting: function() {
        return `hello there, I am ${this.name}!`
    },
};

function guessAge() {
    let ageGuess = prompt(`How old do you think ${houston.name} is?`);
    if (ageGuess == houston.age) {
        alert("CORRECT!");
    } else {
        alert("sorry, no :/");
    }
}

function makeImmortal() {
    delete houston["age"];

    if (houston.age == undefined) {
        alert("success.");
    }

    proof();
}

function proof() {
    let displayArray = [];
    for (property in houston) {
        displayArray.push(houston[property]);
    }

    objectProperties = Object.keys(houston);

    document.getElementById("proof").innerHTML = objectProperties + displayArray;
}

function objectTests() {
    document.getElementById("object").innerHTML = `<p>${houston.greeting()}<br>
    My weapons of choice are my ${houston.weapon}.<br>
    My race is ${houston["race"]}.<br>
    <button onClick="guessAge()">Guess ${houston.name}'s age!</button><br>
    or.....
    <button onClick="makeImmortal()">Make ${houston.name} immortal.</button><br>
    <div id="proof"></div>
    </p>`;
}