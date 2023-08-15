const log = console.log;

log('learn array');

// ## Declaration (ประกาศตัวแปร)
// Array Literal (ตรงตัว)
// element : สมาชิก
const friends = ['Money', 'Non', 'Peakpoon', 'Fon'];
log(friends);

// Array Constructor
const height = new Array(150, 160, 175);
log(height);

// ## Access,Modify,Add,Delete
// Bracket Notation with Index
log(friends[0]);
log(friends[2]);
log(friends[-1]);// undefined
log(friends[10]);// undefined

// Update
friends[0] = 'Gold';
log(friends);

friends[1] = 'Michael';
log(friends);

// ถ้าพยายามอัพเดทใน index ที่ไม่มีอยู่จริง === add
// friends[-1] = 'Pavit';
// log(friends);
// log(friends.length);

// Add
log(friends);
friends[4] = 'Git';
log(friends);

// Delete การลบจะลบ value ใน index นั้นทิ้งแต่จะไม่ทำการ run index ให้ใหม่
delete friends[2];
log(friends[2]); // undefined

// ## 3.basic property and Method of Array

// <arr>.length
log(friends.length);

// friends[6] = 'Mix';
friends[friends.length] = 'Mix'; //ความยาวของ length == last index of array
log(friends);
log(friends.length);

for (let i = 0; i <= friends.length - 1 ;i++) {
    console.log(i, friends[i]);
}

// Method CRUD element

const animals = ['Spider', 'Cat', 'Elephant'];

// Immutable : เปลี่ยนแปลงต่าไม่ได้ (ถ้าจะเปลี่ยนต้องเขียนทับเท่านั่น)
// Mutable : เปลี่ยนแปลงค่าได้

// Method push ทำให้ Array Mutate ไหม ? Yes
// Method push return อะไรกลับมา
let r = animals.push('Dog');
log(r);

let s = animals.unshift('Snake', 'Moutain Bird');
log(animals);
log(s);// 6

let t = animals.pop();
log(animals);
log(t);

// ## 4. Loop

// 4A: for loop
// Imperative กำหนด i เอง
// for (let i = 0; i <= animals.length; i++) {
//     console.log(animals[i]);
// }

// 4B: for...in (มอว array เป็น object ประเภทหนึ่งได้ )
/* <key>:<value> => <index><<value>
const arr = {
        0 : 'Bird',
        1 : 'Cat',
        2 : 'Dog',
} */

// ไม่ต้องกำหนด i เอง
for (let index in animals){
    console.log(index, animals[index]);
}

// 4C: for...of
for (let element of animals) {
    //1st : element = 'Snake'
    //2nd : element = 'Mountain Bird'
    // .......
    //last : element = last value
    log(element);
} 

// Aside topic : Higher Order Function
function add(x, y) {
    return x + y;
}
log (add(5,6));

// Function Expression : FN as a value
const a =console.log;
const b = alert;

//สร้าง Function รับ parameter เป็น function

function addAndShow (x, y, showFn){
    let result = x + y;
    // Call showFn
    showFn(`result is : ${result}`);
    return result;
}

function show (result) {
    console.log(result);
}

addAndShow(5, 10, show);

// Main FN : Higher Order Function (ฟังก์ชันที่รับฟังก์ชันเป็น parameter)
// fn1,fn2,fn3 : Callback

// fn1,fn2,fn3 : จะถูกรันก็ต่อเมื่อ cook รันเท่านั้น
function cook(fn1, fn2, fn3) {
    fn1();
    fn2();
    fn3();
}

// Sub FN
function step1() {
    log('1.Prepare ingredient');
}
function step2() {
    log('2.Cooking');
}
function step3() {
    log('3.Serve');
}

cook(step1, step2, step3);

// 4d : forEach
// SYNTAX : <array>.forEach( FN )
// array == Caller
// Higer order FN == forEach(รับพารามิเตอร์เป็น FN)

const item = ['Football', 'Bag', 'Dish'];

// item.forEach(   function () {}   )
// Callback จะถูกเรียกใช้ตามจำนวนสมาชิกใน array
// item.forEach(function(){
//     console.log('Hi');
// });

// function iterateFn(a) {
//     console.log(a);
// }
// item.forEach(iterateFn);

// const iterateFn = (item) =>console.log(item);
// const iterateFn = (element) =>console.log(element);
// const iterateFn = (a, b, c) =>console.log(a, b,c);
const iterateFn = (item, index,array) =>console.log(item, index,array);


item.forEach(iterateFn);
// 1st Loop : ("Footbll",0,item) => console.log("Footbll")
// 2nd Loop : ("Bag") => console.log("Bag")
// 3rd Loop : ("Dish") => console.log("Dish")

item.forEach((a,b,c) =>{
    console.log(`At index ${b}, element = ${a}`);
});

function myForEach(fn) {
    // code...
    
    // #2 : fn
    // for (let i = 0; i < 2; i++){
    //     fn('random');
    // }
    for (let i = 0; i < 10; i++){
        fn(`index = ${i}`);
    }
    // code...
}

// Caller
myForEach((a) => console.log(a));

// Map method
// <array>.map( callback FN )

[2,5,10].map((x) => x*3); // [6,15,30]
// MAP
// create newArr = []
// 1st Loop(item=2) : newArr.push(2*3)
// 2nd Loop(item=5) : newArr.push(5*3)
// 3rd Loop(item=10) : newArr.push(10*3)
// return newArr

let arr2 = [2,5,6]

let newArr2 = arr2.map((x) => x**3);

console.log(arr2)
console.log(newArr2)