// a function that can receive any amount
//  of object and return a final object 
// which will be combination of all object

// rest operator and spread operator must be used
function combineAllObject(...objectList) {
    console.log(objectList);
    let result = {}
    for (let i = 0; i < objectList.length; i++) {
        result = { ...result, ...objectList[i] };
        console.log(result);
    }
    return result
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
