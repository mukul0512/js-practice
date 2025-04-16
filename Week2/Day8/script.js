// a function that can receive any amount
//  of object and return a final object 
// which will be combination of all object

// rest operator and spread operator must be used

let obj1 = {
    name: "a",
    age: 5
}

let obj2 = {
    name: "b",
    age: 6
}

let obj3 = {
    name: "c",
    age: 7
}

let obj4 = {
    name: "d",
    age: 8
}

function combineAllObject(...objList) {
    return {
        ...objList
    }
}

console.log(combineAllObject(obj1, obj2, obj3, obj4))

// -------------------------------------------------------------------

function add(...z) {
    let res = 0;
    for (let i = 0; i < z.length; i++) {
        res = res + z[i];
    }
    return res;
}

function printElements(...elementList) {
    console.log(...elementList);
}
printElements(1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);

// --------------------------------------------------------------------------------------
