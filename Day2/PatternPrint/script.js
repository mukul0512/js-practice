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

// -------------------------------------------------------------------

// 8. Hollow Square Star Pattern
/*

*****
*   *
*   *
*   *
*****

*/

const HollowSquareStarPatter = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == 1 || i == n) {
                pattern = pattern + "*";
            }
            else {
                if (j == 1 || j == n) {
                    pattern += "*";
                } else {
                    pattern += " ";
                }
            }
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
HollowSquareStarPatter(5);

// -------------------------------------------------------------------------------------

// 9. Right Triangle Pattern
/*

    *
   **
  ***
 ****
*****

*/

const RightTrianglePattern = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            pattern = pattern + " ";
        }
        for (let k = 1; k <= i; k++) {
            pattern = pattern + "*";
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
RightTrianglePattern(5);

// ----------------------------------------------------------------------

// 10. Left Triangle Pattern
/*

*
**
***
****
*****

*/

const LeftTrianglePattern = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            pattern = pattern + "*";
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
LeftTrianglePattern(5);

// -----------------------------------------------------------------------------

// 11. Pyramid Triangle Pattern
/*

    *
   ***
  *****
 *******
*********

*/

const PyramidTrianglePattern = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            pattern = pattern + " ";
        }
        for (let k = 1; k <= i; k++) {
            pattern = pattern + "*";
        }
        for (let l = 1; l <= i - 1; l++) {
            pattern = pattern + "*";
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
PyramidTrianglePattern(5);

// ---------------------------------------------------------------------

// 12. Reverse Triangle — I
/*

54321
5432
543
54
5

*/

const ReverseTriangleI = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            pattern = pattern + j;
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
ReverseTriangleI(5);

// ------------------------------------------------------------------

// 13. Hollow Triangle Star Pattern 
/*

*
**
* *
*  *
*   *
******

*/

const HollowTriangleStar = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (i == n || j == 1 || i == j) {
                pattern = pattern + "*";
            }
            else {
                pattern = pattern + " ";
            }
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
HollowTriangleStar(5);

// -----------------------------------------------------------------------

// 14. Downward Triangle Star Pattern
/*

*****
****
***
**
*

*/
const DownwardTriangleStarPattern = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n + 1 - i; j++) {
            pattern = pattern + "*";
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
DownwardTriangleStarPattern(5);

// -----------------------------------------------------------------------

// 15. Triangle Pattern
/*

A
AA
AAA
AAAA
AAAAA

*/

const TrianglePattern = (n) => {
    let pattern = "";
    let char = "A";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            pattern = pattern + char;
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
TrianglePattern(5);

// ----------------------------------------------------------------

// 16. Reverse Triangle

/*

AAAAA
AAAA
AAA
AA
A

*/

const ReverseTriangle = (n) => {
    let pattern = "";
    let char = "A";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n + 1 - i; j++) {
            pattern = pattern + char;
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
ReverseTriangle(5);

// -------------------------------------------------------------

// 17. Inverse Triangle Pyramid — I
/*

$
$$
$$$
$$$$
%%%%%
%%%%
%%%
%%
%

*/

const InverseTrianglePyramid1 = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            pattern = pattern + "$";
        }
        pattern = pattern + "\n";
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n + 1 - i; j++) {
            pattern = pattern + "%";
        }
        pattern = pattern + "\n";
    }

    console.log(pattern);
}
InverseTrianglePyramid1(5);

// --------------------------------------------------------------------

// 18. Inverse Triangle Pyramid — II 
/*

AAAAA
AAAA
AAA
AA
A

B
BB
BBB
BBBB
BBBBB

*/

const InverseTrianglePyramid2 = (n) => {
    let char1 = "A";
    let char2 = "B";
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n + 1 - i; j++) {
            pattern = pattern + char1;
        }
        pattern = pattern + "\n";
    }
    pattern = pattern + "\n";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            pattern = pattern + char2;
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
InverseTrianglePyramid2(5);