console.log("Classes and Objects");
// classes&Objects
/*

* Prototypes in JS
* A javaScript object is am entity having state and behavior (properties and method).
* JS objects have a special property called prototype.
* We can set prototype using _ _ proto _ _

* If object and prototype have same method, object's method will be used.
* Whenever we create an object in js then by default we have prototype (reference to an object). 
* All objects in js inherits some properties and method from prototype (reference to an object). Example .push(), .pop() etc

*/

// first way of creating object in js
// Example 1
const student = { // direct way
    fullname: "Mukul Karnwal",  // sate
    marks: 94,                  // sate
    printMarks: function () {   // behavior
        console.log("marks = ", this.marks); // here this.marks means student.marks
    }
};
console.log(student);
console.log(student.fullname);
console.log(student.marks);
student.printMarks();

console.log(student.printMarks);
console.log(student.toString);

// Example 2
const employee = {
    calcTax1() {             // another way of creating function inside an object
        console.log("tax rate is 10%");
    },
    calcTax2: function () {  // another way of creating function inside an object
        console.log("tax rate is 20%");
    }
};

const karanArjun1 = {
    salary: 50000
}
const karanArjun2 = {
    salary: 50000
}
const karanArjun3 = {
    salary: 50000
}
const karanArjun4 = {
    salary: 50000
}

console.log(karanArjun1);
karanArjun1.__proto__ = employee; // by default every object have prototype (reference to an object). Here new function created i.e. calcTex1, calcTex2
console.log(karanArjun1);

console.log(karanArjun2);
karanArjun2.__proto__ = employee; // by default every object have prototype (reference to an object). Here new function created i.e. calcTex1, calcTex2
console.log(karanArjun2);

console.log(karanArjun3);
karanArjun3.__proto__ = employee; // by default every object have prototype (reference to an object). Here new function created i.e. calcTex1, calcTex2
console.log(karanArjun3);

console.log(karanArjun4);
karanArjun4.__proto__ = employee; // by default every object have prototype (reference to an object). Here new function created i.e. calcTex1, calcTex2
console.log(karanArjun4);

// now we can use
karanArjun1.calcTax1();
karanArjun1.calcTax2();

karanArjun2.calcTax1();
karanArjun2.calcTax2();

karanArjun3.calcTax1();
karanArjun3.calcTax2();

karanArjun4.calcTax1();
karanArjun4.calcTax2();

// --------------------------------------------------------------------------------------------------------------------------

// In case the tax rate for karanArjun object is high as their salary is more than employeeObj2 

// Example 
const employeeObj2 = {
    calcTax1() {             // another way of creating function inside an object
        console.log("tax rate is 10%");
    },
    calcTax2: function () {  // another way of creating function inside an object
        console.log("tax rate is 20%");
    }
};

const KaranArjun1 = {
    salary: 50000,
    calcTax() { // If object and prototype have same method, object's method will be used.
        console.log("tax rate is 40%");

    }
}
const KaranArjun2 = {
    salary: 50000,
    calcTax() { // If object and prototype have same method, object's method will be used.
        console.log("tax rate is 40%");

    }
}
const KaranArjun3 = {
    salary: 50000,
    calcTax() { // If object and prototype have same method, object's method will be used.
        console.log("tax rate is 40%");

    }
}
const KaranArjun4 = {
    salary: 50000,
    calcTax() { // If object and prototype have same method, object's method will be used.
        console.log("tax rate is 40%");

    }
}

console.log(KaranArjun1);
KaranArjun1.__proto__ = employeeObj2; // by default every object have prototype (reference to an object). Here new function created i.e. calcTex1, calcTex2
console.log(KaranArjun1);

console.log(KaranArjun2);
KaranArjun2.__proto__ = employeeObj2; // by default every object have prototype (reference to an object). Here new function created i.e. calcTex1, calcTex2
console.log(KaranArjun2);

console.log(KaranArjun3);
KaranArjun3.__proto__ = employeeObj2; // by default every object have prototype (reference to an object). Here new function created i.e. calcTex1, calcTex2
console.log(KaranArjun3);

console.log(KaranArjun4);
KaranArjun4.__proto__ = employeeObj2; // by default every object have prototype (reference to an object). Here new function created i.e. calcTex1, calcTex2
console.log(KaranArjun4);

// now we can use
KaranArjun1.calcTax(); // Employee 1 If object and prototype have same method, object's method will be used.
// KaranArjun1.calcTax1();
// KaranArjun1.calcTax2();

KaranArjun2.calcTax(); // Employee 2 If object and prototype have same method, object's method will be used.
// KaranArjun2.calcTax1();
// KaranArjun2.calcTax2();

KaranArjun3.calcTax(); // Employee 3 If object and prototype have same method, object's method will be used.
// KaranArjun3.calcTax1();
// KaranArjun3.calcTax2();

KaranArjun4.calcTax(); // Employee 4 If object and prototype have same method, object's method will be used.
// KaranArjun4.calcTax1();
// KaranArjun4.calcTax2();

// ---------------------------------------------------------------------------------------------------------------
/*
* Classes in JS
* class is a program-code template for creating objects.
* Those objects will have some state (variables) & some behavior (functions) inside it.
* Example
  class MyClass {
    constructor() {...}
    myMethod() {...}
}
  
  let myObj = new MyClass();

*/

