// function DNAtoRNA(dna) {
//     let rna = '';
//     for(let i = 0; i < dna.length; i++){
//     //     if(dna[i] === 'T'){
//     //         rna += 'U';
//     //     } else {
//     //         rna += dna[i];
//     //     }
//     //     rna =+ dna[i];
//     // }
//     rna += dna[i] === 'T' ? 'U' : dna[i];
//     }
//     return dna;
// }

// function DNAtoRNA(dna) {
//     return dna
//     .split('')
//     .map((el) => (el === 'T' ? 'U' :  el))
//     .join('')
// }

//High order function
// const DNAtoRNA = (dna) => dna.split('').map((el) => (el === 'T' ? 'U' :el)).join('');

//regex
const DNAtoRNA = (dna) => dna.replaceAll(/T/g, 'U');

console.log(DNAtoRNA("TTTT"));