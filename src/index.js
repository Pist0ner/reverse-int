module.exports = function reverse (n) {
    // function getReversedNum(num) {
    //     let result = 0;
    //     while (n) {
    //         result = result * 10 + n % 10;
    //         n = Math.floor(n / 10);
    //     }
    //
    //     return result;
    // }
    let y = 0;
    n = Math.abs(n)
    for(; n; n = Math.floor(n / 10)) {
        y *= 10;
        y += n % 10;
    }
    return y
}
