//36 shirt function
console.log("\n ex 36 \n");

function make_shirt(size:string,message:string){
    console.log(`The size of shirt is ${size} and "${message}" is printed on it`);
    
}
make_shirt("M","I love code")
//37 large shirt
console.log("\n ex 37 \n");

function largeShirt():void{
    make_shirt("L","I love typescript")
}
largeShirt();
function MediumShirt():void{
    make_shirt("M","I love typescript")
}
MediumShirt();
function anySizeShirt(S:string,M:string):void{
    make_shirt(S,M)
}
anySizeShirt("XL","I love typescript")

//38 describe city
console.log("\n ex 38 \n");

function describe_city(city:string,country:string="pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Faisalabad")
describe_city("karachi","pak")
describe_city("London","England")

//39 city country pair
console.log("\n ex 39 \n");
function city_country(city:string,country:string)
    {
        return `"${city},${country}"`
    }
console.log(city_country("Faisalabad","Pakistan"));
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Ohio","USA"));

//40  Album
console.log("\n ex 40 \n");
function make_album(_name:string,_title:string,_track?:number){ 
    let album:{name:string;title:string;track?:number}={
        name:_name,
        title:_title,
        track:_track
    }

return album
}
let album1=make_album("Music","New Album")
console.log(album1);
console.log(make_album("New music 2","New Album 2"));
console.log(make_album("New music 3","New Album 3"));
console.log(make_album("New music 4","New Album 4",9));

//41 Magicians: prints the name of each magician in the array.
console.log("\n ex 41 \n");
const magicianNames:string[]=["Talha","Altaf","Dilawar","Bhatti"]
function show_magicians(arr:string[])
    {
        for (const magician of arr)
        {
            console.log("magician is ",magician);
            
        }
    }
    show_magicians(magicianNames)

    //42
    console.log("\n ex 42 \n");
    function make_great(arr:string[]){
        for (let i=0;i<arr.length;i++)
        {
            arr[i]="The great "+arr[i]
        }
    }
    make_great(magicianNames)
    console.log(magicianNames);


     //43 without changing magician names
    console.log("\n ex 43 \n");
    const magicianNamesOrignal:string[]=["Talha","Altaf","Dilawar","Bhatti"]
    const greatNames :string[]=[]
    console.log("Orignal names "+ magicianNamesOrignal);
    
    function makeGreat_WithoutChanging(arr:string[]){
        for (const magician of arr)
        {
           greatNames.push("The great "+magician) 
        }
        return greatNames
    }
    console.log(
    makeGreat_WithoutChanging(magicianNamesOrignal))
    console.log("Still orignal "+ greatNames );
    

     //44 make sandwich
     console.log("\n ex 44 \n");

    function makeSandwich(...items: string[]) {
        console.log("Sandwich Summary:");
        if (items.length === 0) {
            console.log("Empty Sandwitch");
        } else {
            console.log("You Sandwich has following items:");
            for (const item of items) {
                console.log(" , " + item);
            }
        }
        
    }
    
    makeSandwich("pickles", "Cheese", "onion");
    makeSandwich("Chiken", "ketchup", "Eggs");
    makeSandwich();
    //44 car
    console.log("\n ex 44 \n");

    function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]) {
        const car = {
            manufacturer:manufacturer,
            modelName:modelName
        };
        for (const option of options) {
            Object.assign(car, option);
        }
        return car;
    }
    const car1 = createCar("Honda", "City", { color: "Silver", year: 2022 });
    console.log(car1);
    