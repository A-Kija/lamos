'use strict';


const n = ['Petras', 'Asilas', 'Barsukas', 'Kate'];


console.table(n);


console.log(n[2]);


n[1] = 'Kazys';

// n[8] = 'Suo Sarikas';

// n.pop();

// n.shift();


n.push('Suo Sarikas');

n.unshift('Pele');


// n.splice(2, 1);


console.table(n);

console.log(n.length);


for (let i = 0; i < n.length; i++) {
    console.log(n[i]); // i= 0, 1, 2, ....
}

const nPlus = [
    [4, 7, 12],
    [85, 17, 12],
    [10, 33, 74],
    [26, 41, 99],
]

console.table(nPlus);

console.log(nPlus[3][2]);


for (let i = 0; i < nPlus.length; i++) {

    for (let k = 0; k < nPlus[i].length; k++) {

        console.log(nPlus[i][k]); 

    }

}