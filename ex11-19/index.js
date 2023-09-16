"use strict";
//no 11 exercise it prints names one by one
console.log("ex 11");
let array1 = ["Ali", "Umer", "Mohsin", "Imran", "Naveed"];
function printNames() {
    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i]);
    }
}
printNames();
//12 Greetings
console.log("ex 12");
function message2() {
    for (let i = 0; i < array1.length; i++) {
        console.log(`Hi ${array1[i]}, How are you`);
    }
}
message2();
//13
console.log("ex 13 \n");
let Transport = ["HONDA bike", "BMW car"];
function message3() {
    console.log(`I would like to own ${Transport[0]} because i like motorcycles`);
    console.log(`I would like to own ${Transport[1]} because i like cars`);
}
message3();
//14
console.log("ex 14 \n");
let arrNames = ["Bilal", "Abu Bakar", "Ahmed", "Uzair"];
arrNames.forEach((name) => { console.log(`${name} you are invited to dinner`); });
let index = 1;
//15
console.log("ex 15 \n");
function removPerson(index) {
    console.log("Sorry ", arrNames[index]);
    arrNames.splice(index, 1, "Umer Gul");
}
removPerson(index);
arrNames.forEach((name) => { console.log(`${name} you are still invited to dinner`); });
//16
console.log("ex 16 \n");
console.log("We have found bigger table for dinner!");
arrNames.unshift("Arif");
console.log("Added at first", arrNames);
arrNames.splice(arrNames.length / 2, 0, "Ali");
console.log("Added at middle", arrNames);
arrNames.push("Zubair");
console.log("Added at last", arrNames);
console.log(arrNames);
//17
console.log("\n ex 17 \n");
console.log("Sorry! we can invite only two people for dinner");
for (let i = arrNames.length - 1; i > 1; i--) {
    console.log(`Sorry ${arrNames[i]} we can't invite you`);
    arrNames.pop();
}
arrNames.forEach((names) => { console.log(`${names} you are still invited`); });
while (arrNames.length > 0) {
    arrNames.pop();
}
console.log(arrNames);
//18
console.log("\n ex 18 \n");
const oPlacesArr = ["Saudi Arabia", "Amsterdam", "Zimbabwe", "Finland", "Paris"];
console.log("Original Array ", oPlacesArr);
console.log("Sorted Array Alphabeticaly ", [...oPlacesArr].sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}));
console.log("Original Array ", oPlacesArr);
console.log("Sorted in reverse ", [...oPlacesArr].sort((a, b) => {
    if (a < b) {
        return 1;
    }
    else {
        if (a > b) {
            return -1;
        }
        else {
            return 0;
        }
    }
}));
console.log("Original ", oPlacesArr);
oPlacesArr.reverse();
console.log("Order reversed ", oPlacesArr);
oPlacesArr.reverse();
console.log("Reverse again so it becomes original ", oPlacesArr);
oPlacesArr.sort();
console.log("Sorted ", oPlacesArr);
oPlacesArr.sort((a, b) => {
    if (a < b) {
        return 1;
    }
    else {
        if (a > b) {
            return -1;
        }
        else {
            return 0;
        }
    }
});
console.log("Reversed ", oPlacesArr);
//19
console.log("\n ex 19 \n");
// let arrNames:string[]=["talha","Khan"]
console.log(`We are inviting ${arrNames.length} people to dinner`);
//20
console.log("\n ex 20 \n");
let arrPlaces = ["Park", "Mountains", "Rivers"];
console.log(`Places to go ${arrPlaces}`);
//21
console.log("\n ex 21 \n");
let car1 = {
    name: "Honda",
    color: "black",
    price: 999
};
let car2 = {
    name: "Tesla",
    color: "White",
    price: 9999
};
console.log(car1, car2);
//22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
/*
console.log("ex 12");
function message2()
{
    for (let i=0;i<=array1.length;i++)  // out of boundary // remove equal
    {
        console.log(`Hi ${array1[i]}, How are you`);
        
    }
    
}
message2();
*/
//23 
console.log("\n ex 23 \n");
let background = "Black";
console.log("is background black I predict it is true");
console.log("Result ", background === "black" || background === "Black");
console.log("is background white I predict it is false");
console.log("Result ", background === "white");
console.log("is 5>2 I predict true");
console.log(5 > 2);
console.log("is 5<2 I predict false");
console.log(5 < 2);
console.log("is 10/5===2 I predict true");
console.log(10 / 5 === 2);
//24
console.log("\n ex 24 \n");
let str1 = "hello";
let str2 = "Hello";
console.log("is str1 is equal to str2 I predict it is false");
console.log("Result ", str1 === str2);
//lower case function
console.log("are two string equal if we ignore case i predict true", str1.toLowerCase() == str2.toLowerCase());
// or and and test
let person = {
    gender: 'Male',
    age: 19
};
console.log("person is ", person);
console.log("can person apply if he is male and above 18 i predict true");
console.log(person.gender == "Male" && person.age > 18);
