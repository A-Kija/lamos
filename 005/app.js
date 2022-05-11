const n1 = ["Petras", "Asilas", "Barsukas", "Kate"];
const n2 = ["Antanas", "Asilas", "Barsukas", "Simona"];

const copy = n1.map((v) => v + " Valio");
const copy1 = n1.filter((v) => false);
const index = n1.indexOf("Drablys");

const copy2 = n1.filter((v) => -1 != n2.indexOf(v));

const copy3 = [];
for (let i = 0; i < n1.length; i++) {
  const what = n1[i];
  for (let k = 0; k < n2.length; k++) {
    if (n2[k] == what) {
      copy3.push(what);
      break;
    }
  }
}

console.table(copy3);
console.table(copy2);
