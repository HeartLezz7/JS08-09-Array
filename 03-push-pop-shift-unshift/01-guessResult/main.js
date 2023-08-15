let fruits = ['Apples', 'Pear', 'Orange'];
// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push('Banana');
// what's in fruits?
console.log(fruits.length); // * 4 เพราะshoppingCartมีref เดียวกันกับ fruits ถ้าทำการเพิ่มใน shoppingCart fruits ก็จะเพิ่มตามไปด้วย