const oldUser = {
    name: "Ram",
    age: 25,
}

const newUser = {
    name: "Shyam",
    age: 30,
}
/**
 * finalUser = {
 *  oldName = "Ram"
 *  name = "Shyam"
 *  oldAge = 25
 *  age = 30 
 * }
*/

function getFinalUser(newUser, oldUser) {
    // logic
    return {
        ...newUser, oldName: oldUser.name, oldAge: oldUser.age
    }
}

// console.log(getFinalUser.call(newUser, oldUser));
console.log(getFinalUser(newUser, oldUser));


// --------------------------------------------------------------------------

// cloning object using spread operator 

let src = {
    age: 12,
    wt: 68,
    ht: 172
};

let dest1 = { ...src };
src.age = 90;
console.log("src: ", src);
console.log("dest: ", dest1);

// ----------------------------------------------------------------------------------

// let src = {
//     age: 12,
//     wt: 68,
//     ht: 172
// };

// let src2 = {
//     value: 101,
//     name: "Mukul Karnwal"
// }

// let dest = Object.assign({}, src, src2);
// console.log(dest);

