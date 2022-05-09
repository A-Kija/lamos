
let a = 0;

let b = 0;

while (b < -10) {

    if (++a > 100) {//saugiklis
        console.log('avarija');
        break; 
    }

    b++;

}

let c = 0;

do {

    if (++a > 100) {//saugiklis
        console.log('avarija');
        break; 
    }

    c++;


}while(c < -10);

console.log(b, c);

for (let i = 0; i < 10; i++) {

    if (i == 2) {
        break;
    }
    
    if (i == 6 || i == 3) {
        continue;
    }
    
    console.log(`Dabar sukasi:
     ${ i + 1 } ratas`);

}


