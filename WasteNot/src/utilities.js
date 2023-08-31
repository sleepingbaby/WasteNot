import * as PantryItems from "./data/PantryItems.json";
console.log(PantryItems);

let autoCompleteArr = [];

for (let itemName in PantryItems.data) {
  const item = PantryItems.data[itemName];
  autoCompleteArr.push({ label: item.name, id: item.id, image: item.image });
}

console.log(autoCompleteArr);


