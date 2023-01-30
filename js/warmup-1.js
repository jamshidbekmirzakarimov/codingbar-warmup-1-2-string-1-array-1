//? uyishi

//! Warmup-1

//* 1-masala sleepIn
// let a = true && false;
// console.log(a);


//*2-masala monkeyTrouble

// let aMonkey = prompt("enter boolean");
// let bMonkey = prompt("enter boolean2");

// if (aMonkey && bMonkey) {
//   console.log(true);
// } else if (!aMonkey && !bMonkey) {
//   console.log(true);
// }

//* 3-masala sumDouble

// let a = Number(prompt("a qiymatni kiriting"));
// let b = Number(prompt("b qiymatni kiriting"));
// sum = a + b;

// if (a == b) {
//   sum = sum * 2;
// }
// console.log(sum);

//* 4-masala diff21

// let a = prompt("son kiriting");
// let b = 21;

// sum = Math.abs(b - a);

// if (b >= a) {
//   console.log(sum);
// }else if(b <= a){
//   console.log(sum * 2);
// }

//* 5-masala parrotTrouble

// let speak = "gapiradi";

// let hour = prompt("soat kiriting");

// jami = (speak && (hour < 7 || hour > 20));

// console.log(jami);


//*6-masala makes10

// let a = prompt("a son kiriting");
// let b = prompt("b son kiriting");

// jami = (a == 10 || b == 10 || a + b == 10);
// console.log(jami);


//* 7-masala nearHundred

//tushunmadim

//* 8-masala posNeg

// let a = prompt("a son kiriting");
// let b = prompt("b son kiriting");
// let negative = "qwer";

// if (negative) {
//   sum = (a < 0 && b < 0);
//   console.log(sum);
// } else if (negative) {
//   sum = (a < 0 && b > 0) || (a > 0 && b < 0);
//   console.log(sum);
// }

//*9-masala notString

// let str = "not candy"
// sum = str.match(/^not/) ? str : 'not ' + str;
// console.log(sum);


//* 10-masala missingChar

// let str = "kitten";
// let n = prompt("n son kiriting");

// sum = str.slice(0, n) + str.slice(n + 1, str.length);

// console.log(sum);


//* 11-masalani ishlay olmadim

//* 12-masala frontBack

// let str = "java";

// sum = str.slice(0, 3).repeat(3);
// console.log(sum);

//* 13-masala backAround

// function backAround(str) {
//   const c = str[str.length - 1];
//   console.log(c + str + c);
// }
// backAround("cat");


//*14-masala or35

// function or35(n){
//   if (n > 0 && (n % 3 == 0 || n % 5 == 0)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// or35(7)

//* 15-masala front22

// function front22(str) {
//   const a = str.slice(0, 2);
//   console.log(a + str + a);
// }
// front22("kitten");

//* 16-masala startHi

// function startHi(str){
//   const a = str.slice(0, 2).includes("hi");
//   console.log(a);
// }
// startHi("hi fvdfvfd salom")

//* 17-masala icyHot

// function icyHot(temp1, temp2){
//   if (temp1 < 0 && temp2 > 100) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// icyHot(-1, 110)

//* 18-masala in1020
// function in1020(a, b){
//   if (a >= 10 && a <= 20 || b >= 10 && b <= 20) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// in1020(25, 90)

//* 19-masala hasTeen

// function hasTeen(a, b, c){
//   if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)) {
//     console.log(true);
//   }
//   else {
//     console.log(false);
//   }
// }

// hasTeen(35, 4, 16);


//* 20-masala loneTeen

// function loneTeen(a, b){
//   if (a >= 13 && a <= 19 || b >= 13 && b <= 19) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// loneTeen(20, 25)

//* 21-masala  delDel

// function delDel(str){
//   if (str.slice(1, 4) === "del") {
//     let count = str.slice(0, 1) + str.slice(4);
//     console.log(count);
//   } else {
//     console.log(str);
//   }
// }
// delDel("adelqw");

//*22-masala mixStart

// function mixStart(str){

//   if(str.slice(1, 3) === "ix") {
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// }
// mixStart("qix snacks");

//* 23-masala intMax

// function intMax(a, b, c){
//   let max;
//   if (a > b) {
//     max = a;
//   } else {
//     max = b
//   }
//   if (c > max) {
//     max = c;
//   }
//   console.log(max);
// }
// intMax(4, 7, 2)
