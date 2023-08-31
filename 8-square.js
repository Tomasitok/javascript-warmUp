const args = process.argv.slice(2);

const size = parseInt(args[0]);

if (!isNaN(size)) {
    let cuadrado = "";
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            cuadrado += "X";
        }
        cuadrado += "\n";
    }
    console.log(cuadrado);
}
else{
    console.log("Missing size");
}
