//25 alien colors
console.log("\n ex 25 \n");
const alien_color:string="green"
if (alien_color=="green")
{
    console.log("you just earned 5 points");
    
}
const alien_color1:string="red"
if(alien_color1=="green")
{
   
}

console.log("\n ex 26 \n");
//26
//1st
if(alien_color=="green")
{
    console.log("you just earned 5 points");
}
else {
    console.log("you just earned 10 points");
    
}

//2nd
if(alien_color1=="green")
{
    console.log("you just earned 5 points");
}
else {
    console.log("you just earned 10 points");
    
}

//27
console.log("\n ex 27 \n");

//version1
console.log(alien_color);

const alien_color2:string="yellow";

if (alien_color=="green")
{
    console.log("you just earned 5 points");
    
}
else {
    if(alien_color=="yellow"){
        console.log("you just earned 10 points");
        
    }
    else 
    if(alien_color=="red"){
        console.log("you just earned 15 points");
        
    }
}
//version 2
console.log(alien_color1);
if (alien_color1=="green")
{
    console.log("you just earned 5 points");
    
}
else {
    if(alien_color1=="yellow"){
        console.log("you just earned 10 points");
        
    }
    else 
    if(alien_color1=="red"){
        console.log("you just earned 15 points");
        
    }
}

//version 3
console.log(alien_color2);
if (alien_color2=="green")
{
    console.log("you just earned 5 points");
    
}
else {
    if(alien_color2=="yellow"){
        console.log("you just earned 10 points");
        
    }
    else 
    if(alien_color2=="red"){
        console.log("you just earned 15 points");
        
    }
}
//28 ages of life
console.log("\n ex 28 age 20 \n");
const personAge:number=20;
if (personAge<2)
{console.log("person is a baby")}
else if(personAge>=2 && personAge<4){console.log("person is a toddler")}
else if (personAge>=4 && personAge<13){console.log("person is a kid")}
else if (personAge>=13 && personAge<20){console.log("person is a teenager")}
else if (personAge>=20 && personAge<65){console.log("person is a adult")}
else if (personAge>=65){console.log("person is a elder")}

//29
console.log("\n ex 29 \n");
const favorite_fruits:string[]=["mango","apple","watermelon"]
const checkFruit:string="mango"
if(favorite_fruits.includes(checkFruit))
{
    console.log("you really like",checkFruit);
    
}
if(favorite_fruits.includes("banana"))
{
    console.log("you really like banana");
    
}
if(favorite_fruits.includes("apple"))
{
    console.log("you really like apple");
    
}
if(favorite_fruits.includes("watermelon"))
{
    console.log("you really like watermelon");
    
}
if(favorite_fruits.includes("cherry"))
{
    console.log("you really like cherry");
    
}
//30
console.log("\n ex 30 \n");
const userNames:string[]=["Talha","admin","Iftikhar","Babar"]
userNames.forEach((names=>{
    if (names=="admin"){console.log(`Hello ${names}, would you like to see a status report?`)}
    else {console.log(`Hello ${names}, thank you for logging in again.`);
    }   
}))

//31 no users 
console.log("\n ex 31 \n");

userNames.length=0;
if(userNames.length===0)
{
    console.log("We need to find some users!");
    
}

//32 finding user
console.log("\n ex 32 \n");
const currentUsers: string[] = ["talha","Arif","Ilyas"]
const newUsers: string[] = ["TALHA", "ARIF", "babar", "Moin"];


for (const newUser of newUsers) {
  //convert both to lowercase to check
  const lowerNewUser = newUser.toLowerCase();
  if (currentUsers.map(user => user.toLowerCase()).includes(lowerNewUser)) {
    console.log(`Username '${newUser}' is not available. You need to enter new username.`);
  } else {
    console.log(`'${newUser}' Username is available.`);
  }
}


//33 ordinal number
console.log("\n ex 33 \n");
const numArr:number[]=[1,2,3,4,5,6,7,8,9];
const ordinalArr=numArr.map((num)=>{
    if(num===1){
        return num+"st"
    }
    else if (num===2)
    { return num+"nd"}
    else if (num===3)
    {return num+"rd"}
    else{return num+"th"}
})
ordinalArr.forEach((num)=>{
    console.log(num);
    
}
)
//34 pizzas
console.log("\n ex 34 \n");
const favPizzas:string[]=["Malai boti", "Chiken fajita", "Behari kabab"]
for (const pizza of favPizzas)
{
    console.log(pizza);
    
}

for (const pizza of favPizzas)
{
    console.log(`I like ${pizza} pizza`);
    
}
console.log(`I like ${favPizzas.length} kinds of pizzas . These all are my favourites`);
console.log("I really like pizzas");
//35 Animals
console.log("\n ex 35 \n");

const animals:string[]=["Dog","Car","Goat"]
for (let i=1;i<animals.length;i++)
{
    console.log(animals[i]);
    
}

for (const animal of animals)
{
    console.log(`A ${animal} would make a great pet`);
    
}
console.log("Any of these animals would make a great pet!");

