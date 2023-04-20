console.log("-------------------------1st step---------------");
const arraySeaonalFruites=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`All element of array:${arraySeaonalFruites}`);
const arrayFirstElem=arraySeaonalFruites.slice(0,1);
console.log(`First element of array:${arrayFirstElem}`);
const arrayLastElem=arraySeaonalFruites.slice(arraySeaonalFruites.length-1)
console.log(`Last elment of array:${arrayLastElem}`);

console.log("-------------------------2nd step---------------");
arraySeaonalFruites.unshift("Papaya");
console.log(`Add Element of Papaya before Banana:${arraySeaonalFruites}`);

console.log("-------------------------3nd step---------------");
arraySeaonalFruites.splice(4,1);
console.log(`Remove the Mango element in array:${arraySeaonalFruites}`);

console.log("-------------------------4nd step---------------");
arraySeaonalFruites.push("Pineapple");
console.log(`insert element in last array:${arraySeaonalFruites}`);

console.log("-------------------------5nd step---------------");
arraySeaonalFruites.splice(4,0,"Dragon Fruit");
console.log(`insert element Dragon Fruit before water melon:${arraySeaonalFruites}`);

console.log("-------------------------6nd step---------------");
arraySeaonalFruites.splice(2,1,"Kiwi");
console.log(`Replace element 'Orange' with 'Kiwi':${arraySeaonalFruites}`);


console.log("-------------------------8nd step---------------");
const res=arraySeaonalFruites.slice(1,5);
console.log(`select element starting index 1 to 4:${res}`);

console.log("-------------------------8nd step---------------");
const result=arraySeaonalFruites.slice(arraySeaonalFruites.length-3);
console.log(`only select last 3 elements in array:${result}`)