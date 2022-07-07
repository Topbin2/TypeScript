"use strict";
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
let combineValues;
// combineValues = printResult;
// combineValues = 5;
addAndHandle(10, 20, (result) => {
    console.log(result);
});
