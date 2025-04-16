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

function getFinalUser(oldUser) {
    // logic
    return {
        oldUser: oldUser.name,
        name: this.name,
        oldAge: oldUser.age,
        age: this.age
    }
}

console.log(getFinalUser.call(newUser, oldUser));