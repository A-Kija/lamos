function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const monsterSize = rand(10, 30);

const makeNiceArray = () => {
  const array = [];
  const size = rand(10, 20);
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
