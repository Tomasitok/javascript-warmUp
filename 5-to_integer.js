const args = process.argv.slice(2);

const integer = args[0];

if (!isNaN(integer)){
    console.log("My number:", integer);
}
else{
    console.log("Not a number")
}
