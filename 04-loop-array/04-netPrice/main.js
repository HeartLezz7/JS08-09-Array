// - จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
// - netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)

const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
];

const newArr = [];
// //#1st layer : WalkThrough Array (loop)
// for (let productObj of sales) {
//     let price = productObj.price;
//     let discount = productObj.discount;
//     let netPrice = price;
//     if(discount){
//         netPrice = price*(1-discount);
//     }
//     const newObj = {netPrice: netPrice};
//     newArr.push(newObj)
//     // console.log(newObj);
// }

// #2nd
obj = {price: 1000, discount: 0.1}
sales.forEach((obj) => {
    let netPrice = obj.price*(1-(obj.discount || 0));
    newArr.push({ netPrice });
});

// #3rd
// sales.forEach((obj) => newArr.push({newPrice: obj.price * (1-(obj.discount || 0)) }));
console.log(newArr);
console.log(sales);