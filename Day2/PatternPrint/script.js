// 1. Triangle Pattern — I

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const TrianglePattern1 = () => {
    let n = 5;
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