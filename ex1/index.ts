let Name:string="Talha sadiq Khan";
console.log(`Hello ${Name}, would you like to learn some Python today?`);
console.log("To Lower case name : ",Name.toLowerCase());
console.log("To upper case name : ", Name.toUpperCase);


function titleCase(str:any) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
 console.log(titleCase(Name));
/*Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

Albert Einstein once said, “A person who never made a mistake never tried anything new.”

Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message
*/
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);

let famous_person:string="Albert Einstein";
let message: string= famous_person + ` once said , "A person who never made a mistake never tried anything new."`;
console.log(message);
//6

let name1 :string =" \t Talha Khan \n";

console.log(name1) ;
const nameWithoutSpace:string = name1.trim() ;

console.log(nameWithoutSpace) ;
//7 -8
console.log(5+3) ;
console.log(4*2) ;

console.log(16/2) ;
console.log(10-2) ;

// 9 and 10
//favourite number added 
let favNum:number=911;
let message1: string=`My favourite number is ${favNum}`;
console.log(message1);

