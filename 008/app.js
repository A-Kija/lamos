function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const monsterSize = rand(10, 30);

const makeNiceArray = () => {
  const array = [];
  const size = rand(1, 2);
  for (let i = 0; i < size; i++) {
    array.push(rand(0, 10));
  }
  return array;
};

let monster = [];
for (let sizeNumber = 0; sizeNumber < monsterSize; sizeNumber++) {
    const monsterPart = makeNiceArray();
    if (!sizeNumber) {
        monsterPart[monsterPart.length - 1] = 0;
    } else {
        monsterPart[monsterPart.length - 1] = monster;
    }
    monster = monsterPart;
}
console.log(monster);

const prime = (a) => {
    let count = 0;
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            count++;
        }
    }
    return count;
};

const sqArray = [];

for (let i = 0; i < 10; i++) {
    const row = [];
    for (let y = 0; y < 10; y++) {
        row.push(rand(1, 100));
    }
    sqArray.push(row);
}

const primeSum = a => {
    let sum = 0;
    let count = 0;
    a.forEach(e => e.forEach(v => {
        if (!prime(v)) {
            count++;
            sum += v;
        }
    }));
    return count ? sum / count : 0;
}

const findMin = a => {
    let min = a[0][0];
    let coord = [0, 0];
    a.forEach((r, ri) => r.forEach((v, ci) => {
        if (v < min) {
            min = v;
            coord = [ri, ci];
        }
    }));
    return coord;
}

console.table(sqArray);

console.log(findMin(sqArray));

let s = 1000;

while(primeSum(sqArray) < 70){
    if(--s === 0) {
        console.log('BR')
        break;
    }
    const [x, y] = findMin(sqArray);
    sqArray[x][y] += 3;

}

console.table(sqArray);