// - ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์
// squareArr(arr); // [4, 9, 25, 49, 121]

const arr = [2, 3, 5, 7, 11];

function squareArr (array){
    const newArr =[];
    array.forEach((element,i) => newArr[i] = element**2);
    return newArr;
}
let newArray = squareArr(arr);
console.log(arr);
console.log(newArray);


// 2nd WAY
// function squareArr (array){
//     const newArr =[];
//    for(let i = 0; i< array.length; i++){
//     newArr.push(array[i]**2)
//    }
//     return newArr;
// }
// let newArray = squareArr(arr);
// console.log(arr);
// console.log(newArray);

