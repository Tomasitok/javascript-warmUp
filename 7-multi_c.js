const args = process.argv.slice(2);

const j = args[0];

if (args.length <= 0 ){
    console.log("Missing number of occurrences")
}
else{
    for(let i = 0; i < j; i++){
        console.log("C is fun");
    }
}
