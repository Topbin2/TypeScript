
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}


let combineValues: (a: number, b: number) => number;

// combineValues = printResult;
// combineValues = 5;


addAndHandle(10, 20, (result) => {
    console.log(result);
})