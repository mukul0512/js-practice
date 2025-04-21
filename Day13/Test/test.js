// data types 

//
let arr = [1, 2, 3, 4]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//while
let i = arr.length - 1;
while (i >= 0) {
    console.log(arr[i]);
    i--;
}

let k = 0;
do {
    console.log(arr[k]);
    k++;
} while (k < arr.length);

//

for (let key of arr) {
    console.log(key);
}

let obj = {
    name: "mukul",
    age: 25
}
console.log(`the result is ${obj.name}`);

let str2 = "codingworkx";
let ans = "";
console.log(str2.length);

for (let i = 0; i < str2.length; i++) {
    console.log(str2[i]);
    if (str2.charAt(i) === "o") {
        // str2[i] = "O";
        str2.charAt(i) === "O";
        ans += "O";
    }
    else {
        ans += str2.charAt(i);
    }

}
console.log(ans);

// console.log(str2.replaceAll("o", "O"));

