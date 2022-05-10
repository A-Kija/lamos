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