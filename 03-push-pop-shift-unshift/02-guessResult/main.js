let arr = ["a", "b"];

arr.push(function() {
  alert(this);
})

arr[2](); // * alert arr เพราะ this ในfunctionที่push เข้าไปคือ arr เลยทำการalert arr ออกมา 