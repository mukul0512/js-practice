//     1
//    123
//   12345
//  1234567
// 123456789

const PyramidPattern = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        space = n + 1 - i;
        for (let j = 1; j <= space; j++) {
            pattern = pattern + " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            pattern = pattern + k;
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}
PyramidPattern(5);

