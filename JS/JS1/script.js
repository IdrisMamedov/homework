// Task1


//implicit

// let number=5;
// let str="hello" + 5;
// console.log(str);    //avtomatik number stringe cevrilir

// let word="10";
// let calc= word - 3;
// console.log(calc);  //string numberə çevrilir

// let bool1 = true;
// let clc= 5 + bool1;
// console.log(clc);  //bool numbere cevrilir

// let bool2= false;
// let png= "true or " + bool2;
// console.log(png);   //bool stringe cevrilir

//  let nl = null;
//  let sls = 0 + null;
//  console.log(sls);   //null numbere cevrilir, stringin uzerine gelsek stringe cevrilerr


//explicit

//  let a=15;
//  let wrd=String(a);
//  console.log(typeof(wrd)); //num stringe cevrilir

//  let booll = true;
//  let sum = Number(booll)
//  console.log(sum);  //booleaan numa kecir

//  let booll2 = false;
//  let words = String(booll2)
//  console.log(words);  //boolean stringe kecir

//  let arr = [1, "salam", 10]
//  let strarr = String(arr);
//  console.log(strarr); //stringe kecid


// Task 2

// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean('0'));
// console.log(Boolean(''));
// console.log(Boolean(' '));
// console.log(Boolean("akasfna"));
// console.log(Boolean({}));
// console.log(Boolean(5));
// console.log(Boolean(null));


// Task3

// let itemCode = 3

// switch (itemCode) {
//     case 1:
//         console.log("cips-2azn");
//         break
//     case 2:
//         console.log("soda-1.5azn");
//         break
//     case 3:
//         console.log("sokalad-2.5azn");
//         break
//     case 4:
//         console.log("su-1azn");
//         break
//     case 5:
//         console.log("saqqiz-0.5azn");
//         break
//     default:
//         console.log("kod sehvdir");
// }



// Task4

// let arr = [12, 45, 22, 31, 8, 17, 29, 40, 55, 90]
// let sum_arr = 0;
// let odd_arr = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] %2 === 0){
//         sum_arr+=arr[i];
//     }
//     else{
//         odd_arr+=arr[i]
//     }
// }
// console.log("hasil:", sum_arr*odd_arr);


// Task5


// let fruit = ["alma", "banan", "qarpız", "nar", "ananas", "portağal"]

// let longword = fruit[0]

// for (let i = 0; i < fruit.length; i++) {
//     if ( fruit[i].length > longword.length){
//         longword= fruit[i]
//     }
// }

// console.log(longword);


// Task6

// let numbers =  [45, 3, 12, 78, 4, 90, 23]

// let bignumber = numbers[0]
// let smallnumber = numbers[0]
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i]>bignumber){
//         bignumber=numbers[i];
//     }

//     else if(smallnumber>numbers[i]){
//         smallnumber=numbers[i]
//     }
    
// }
// console.log("boyuk",bignumber);
// console.log("kicik",smallnumber);


// Task7
// for (let i = 0; i < 51; i++) {
//     if(i%3===0 && i%5===0){
//         console.log(i, "FizzBuzz");
//     }
//     else if(i%3===0){
//         console.log(i,"Fizz");
//     }
//     else if(i%5===0){
//         console.log(i, "Buzz");
//     }
//     else{
//         console.log(i,);
//     }
    
// }


// Task 8


// let str = "ƏLİ İLƏ"; 

// if (str === str.split('').reverse().join('')) {
//     console.log("Palindromdu");
// } else {
//     console.log("Palindrom deyil");
// }

// Task 9

// let firstName = "Idris"
// let lastName = "Mamedov"
// let age = 20;
// let specialty = "Programming"
// let birthYear = new Date().getFullYear() - age;

// let id = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}${birthYear}_${specialty.slice(0, 2).toUpperCase()}`;

// console.log("ID:", id);
















