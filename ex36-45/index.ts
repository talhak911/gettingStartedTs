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

//38
console.log("\n ex 38 \n");

function describe_city(city:string,country:string="pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Faisalabad")
describe_city("karachi","pak")
describe_city("London","England")

//39
console.log("\n ex 39 \n");
function city_country(city:string,country:string)
    {
        return `"${city},${country}"`
    }
console.log(city_country("Faisalabad","Pakistan"));
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Ohio","USA"));

//39
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

