const student = {
    name: "Mukul",
    age: 25,
    marks: 68.91,
    isPass: true
};

student["age"] = student["age"] + 1;
console.log(student["age"]);

const product = {
    name: "Parker Jotter Standard CT Ball Pan (Black)",
    rating: 4.5,
    price: "₹270",
    offer: "5%"
}

const profile = {
    username: "@mukul.codinworkx",
    isFollow: true,
    followers: 123,
    following: 123
}

console.log(typeof (profile));
console.log(typeof (profile["username"]));

// ------------------------------------------------------------------------------

let a = "5";
let b = 5;
console.log("a == b", a == b); // check for value only
console.log("a === b", a === b); // check for value and type
// ---------------------------------------------------------------------------------------

// let num = prompt("Enter no: ");
// if (num % 5 === 0) {
//     console.log(`${num} is multiple of 5`);
// }
// else {
//     console.log(`${num} is not the multiple of 5`);
// }

// --------------------------------------------------------------------------------
// for ...of loop -> used for strings and arrays
let str = "Mukul";
for (let i of str) {
    console.log("i = ", i);
}
// for ...in loop  -> used for objects and arrays
let stud = {
    name: "mukul",
    marks: 75,
    age: 25,
    isPass: true
}

for (let key in stud) {
    console.log(key, stud[key]);
}

// ----------------------------------------------------------------------------

// let num = 25;
// let guessNum = prompt("Guess the correct number ");
// while (guessNum != num) {
//     guessNum = prompt("Guess again please ");
// }
// console.log("Congratulations! You guessed the correct number ");

// --------------------------------------------------------------------------------

let penObj = {
    item: "pen",
    price: 10
};
console.log("the cost of", penObj.item, " is", penObj.price, "rupees");
console.log(`the cost of ${penObj.item} is ${penObj.price} rupees`);
console.log(`this is a template literal ${1 + 2 + 3}`);

let str1 = "Mukul"
str1[0] = "V"; // not possible
str1 = str1.replace(str1[0], "P")
console.log(str1);
console.log(str1.replace("M", "V"));
// --------------------------------------------------------------------------------------------

// let fullname = prompt(`Enter fullname`);
// let username = "@" + fullname + fullname.length;
// console.log(username);

// ------------------------------------------------------------------------------------

let items = [500, 200, 50, 350, 450, 700];
// let i = 0;
// for (let val of items) {
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);
// -------------------------------------------------------------------------

function countVowel(str) {
    let result = {};
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        let currentChar = str.charAt(i);
        if (vowels.includes(currentChar)) {
            if (result[currentChar]) {
                result[currentChar]++;
            }
            else {
                result[currentChar] = 1;
            }
        }
    }
    return result;
}
console.log(countVowel("mukul karnwal codingworkx"));

// ---------------------------------------------------------------------------------

// given a string "Hello World" count the no of character and print

function charCountOfString(str) {
    let totalCount = {};
    for (let i = 0; i < str.length; i++) {
        let currentCharacter = str.charAt(i);
        if (totalCount[currentCharacter]) {
            totalCount[currentCharacter]++;
        }
        else {
            totalCount[currentCharacter] = 1;
        }
    }
    return totalCount;
}

console.log(charCountOfString("Hello World"));

// ------------------------------------------------------------------

// given a string of words "This is my company and that is my profile."


function countWordsOfString(str) {
    let wordMap = {};
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (wordMap[word]) {
            wordMap[word] += 1;
        }
        else {
            wordMap[word] = 1;
        }
    }
    return wordMap;

}
console.log(countWordsOfString("this is my company and this is my profile"));


// -----------------------------------------------------------------

function splitWordsOfArray(str) {
    let result = [];
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") {
            result.push(word);
            word = "";
        } else {
            word = word + str.charAt(i);
        }
    }
    return result;
}
console.log(splitWordsOfArray("this is my company and this is my profile"));
