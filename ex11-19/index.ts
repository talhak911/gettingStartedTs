//no 11 exercise it prints names one by one
let array1:string[]=["Ali","Umer","Mohsin","Imran","Naveed"];
function printNames(){
for (let i=0;i<array1.length;i++)
    {
        console.log(array1[i]);
        
    }

}
printNames();
//12 Greetings
function message2()
{
    for (let i=0;i<array1.length;i++)
    {
        console.log(`Hi ${array1[i]}, How are you`);
        
    }
    
}
message2();

//13
let Transport:string[]=["HONDA bike","BMW car"]
function message3()
//func
{
        console.log(`I would like to own ${Transport[0]} because i like motorcycles`);
        
        console.log(`I would like to own ${Transport[1]} because i like cars`);
    
}
message3();