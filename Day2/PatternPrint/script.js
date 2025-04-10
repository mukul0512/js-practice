// 1. Triangle Pattern — I

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const TrianglePattern1 = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            pattern = pattern + j + " ";
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}

TrianglePattern1(5);

// -------------------------------------------------------------------------------------
// 2. Triangle Pattern — II

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

const TrianglePattern2 = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            pattern = pattern + i + " ";
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
TrianglePattern2(5);

// -------------------------------------------------------------------------------------
// 3. Triangle Pattern — III

// 1
// 2 3
// 4 5 6
// 7 8 9 10

const TrianglePattern3 = (n) => {
    let variable = 1;
    let pattern = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            pattern = pattern + variable + " ";
            variable++;
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
TrianglePattern3(4);

// -------------------------------------------------------------------------------------
// 4. Reverse Triangle — I

// 12345
// 1234
// 123
// 12
// 1

const ReverseTriangle1 = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n + 1 - i; j++) {
            pattern = pattern + j;
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
ReverseTriangle1(5);

// -------------------------------------------------------------------------------------
// 5. Number Pyramid Pattern — I
/*
    1
   123
  12345
 1234567
123456789

*/

const NumberPyramidPattern1 = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let space = 1; space <= n - i; space++) {
            pattern = pattern + " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            pattern = pattern + j;
        }

        pattern = pattern + "\n";
    }
    console.log(pattern);
}
NumberPyramidPattern1(5)

// -------------------------------------------------------------------------------------
// 6. Number Pyramid Pattern — II
/*
  1
 234
56789

*/

const NumberPyramidPattern2 = (n) => {
    let variable = 1;
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let space = 1; space <= n - i; space++) {
            pattern += " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            pattern = pattern + variable;
            variable++;
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
NumberPyramidPattern2(3);

// ----------------------------------------------------------------------------

// 7. Square Star Pattern — I
/*

*****
*****
*****
*****
*****

 */

const SquareStarPattern1 = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 5; j++) {
            pattern = pattern + "*";
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
SquareStarPattern1(5)