// สรุปเนื้อหา
let arr = [4,5,2,"codecamp",true];

console.log(arr.indexOf(4)); // 4 
console.log(arr.includes('codecamp')); // true
console.log(arr.includes('codecam')); // false

console.log('test find');

let resultFasleFindIndex = arr.findIndex((item) => item == "codecam");
let resultFindIndex = arr.findIndex((item) => item == "codecamp");
let resultFind = arr.find((item) => item > 4);
let result = arr.filter((item) => item > 1);

console.log(resultFasleFindIndex); // index = -1
console.log(resultFindIndex); // index = 3
console.log(resultFind); // 5
console.log(result); // [4,5,2]

// ### indexOf,include() ###
// index(item) = parameter คือ item ที่เราต้องการค้นหา
// indexOf => return indexตัวแรก // return index -1
// includes => return true // return false

// ### find,findIndex,filter( callbackFN ) ###
// callback FN = เขียนเงื่อนไขที่ต้องการใช้หาค่าใน array โดยเงื่อนไขต้องเป็นboolean เช่น หาค่าสมาชิกที่มีค่ามากกว่า 4 เป็นต้น
// find => return item ตัวแรกที่เจอ // return undefined
// findIndex => return index ตัวแรกที่เจอ // retur index -1
// filter => return [itemที่เจอ] // return []