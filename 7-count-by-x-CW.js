// function countBy(x, n) {
//     let z = [];
//     for(let i = 1; i<=n; i++) {
//         z.push(i * x);
//     }

//     return z;
// }


const countBy = (x, n) => [...Array(n)].map((el, i) => (i + 1) * x);

console.log(countBy(2, 5));