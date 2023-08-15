// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

let a = [1,2,3,4,5];
let b = [];


function clone(arr) {
    for (let i = 0; i < arr.length; i++){
        b.push(arr[i]);
    }
}

// #another way
// function clone(arr) {
//     return b = arr.slice();
// }

clone(a);
console.log(b);