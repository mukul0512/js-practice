// a function that can receive any amount
//  of object and return a final object 
// which will be combination of all object

// rest operator and spread operator must be used
function combineAllObject(...combineAllObject) {
    console.log(combineAllObject);
    console.log(combineAllObject[0]);
    console.log(combineAllObject[1]);
    console.log(combineAllObject[2]);

    // logic
    return {
        ...combineAllObject // spread operator
    };
}
let obj1 = {
    name: "Ram",
    age: 25
};
let obj2 = {
    address: "Rampur",
    wardNo: 12
}
let obj3 = {
    State: "Bihar",
    pincode: 838453,
    name: "shyam",
}
const ans = combineAllObject(obj1, obj2, obj3)
console.log(ans);


/*
output

console.log({
    name: "Ram",
    age: 25,
    address: "Rampur",
    wardNo: 12,
    State: "Bihar",
    pincode: '456789',
})

*/
