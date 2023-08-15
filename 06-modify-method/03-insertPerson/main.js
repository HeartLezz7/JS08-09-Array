// ให้เขียนโค้ดเพื่อลบ Jay ออกและใส่ Jack และ Joe เข้าไปแทน

const person = ['John', 'Jay', 'Jim', 'Jame'];

let name = person.splice(1,1,'Jack','Joe');

console.log(name);
console.log(person);