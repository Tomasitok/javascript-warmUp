#!/usr/bin/env node

let maxim = Number.NEGATIVE_INFINITY
let second_m = Number.NEGATIVE_INFINITY

const args = process.argv.slice(2);

for(let i = 0; i < args.length; i++){
    const num = parseInt(args[i])
    if (!isNaN(num)){
        if(num > maxim){
            second_m = maxim;
            maxim = num;
        }
        else if(num > second_m && maxim !== num){
            second_m = num;
        }
    }      
}
console.log(second_m);

