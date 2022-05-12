const b = 5;

function fun(ki, li) {
    console.log(ki);
    console.log(li);
    const rez1 = ki + li;
    const rez2 = ki * li;
    return [rez1, rez2];
}

const [gavau1, gavau2] = fun(5, 7);
console.log(gavau1, gavau2);



function suVardu() {
    console.log('as turiu grazu varda');
}

function suVardu() {
    console.log('bla bla bla');
}


const beVardo = function() {
    console.log('as neturiu vardo');
}

const strele = (t) => {
    console.log('As streline funkcija');
    return y;
}

const vienas = y => {
    return 'As streline funkcija';
}

const du = y => 'As streline funkcija DU';


// beVardo();
// suVardu();
console.log(du());
console.log(vienas());
