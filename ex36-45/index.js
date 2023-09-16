"use strict";
//36 shirt function
console.log("\n ex 36 \n");
function make_shirt(size, message) {
    console.log(`The size of shirt is ${size} and "${message}" is printed on it`);
}
make_shirt("M", "I love code");
//37 large shirt
console.log("\n ex 37 \n");
function largeShirt() {
    make_shirt("L", "I love typescript");
}
largeShirt();
function MediumShirt() {
    make_shirt("M", "I love typescript");
}
MediumShirt();
function anySizeShirt(S, M) {
    make_shirt(S, M);
}
anySizeShirt("XL", "I love typescript");
//38
console.log("\n ex 38 \n");
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Faisalabad");
describe_city("karachi", "pak");
describe_city("London", "England");
//39
console.log("\n ex 39 \n");
function city_country(city, country) {
    return `"${city},${country}"`;
}
console.log(city_country("Faisalabad", "Pakistan"));
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Ohio", "USA"));
//39
console.log("\n ex 40 \n");
function make_album(_name, _title, _track) {
    let album = {
        name: _name,
        title: _title,
        track: _track
    };
    return album;
}
let album1 = make_album("Music", "New Album");
console.log(album1);
console.log(make_album("New music 2", "New Album 2"));
console.log(make_album("New music 3", "New Album 3"));
console.log(make_album("New music 4", "New Album 4", 9));
