#!/usr/bin/env node

function factorial(a){
    if (a === 0 || a === 1 || a === undefined){
        return 1;
    }

    return a * factorial(a - 1);
}

const args = process.argv.slice(2);
let int1 = parseInt(args[0]);

if(isNaN(int1)){
    int1 = undefined;
}

const result = factorial(int1);
console.log(result)
