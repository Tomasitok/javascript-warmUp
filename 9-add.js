#!/usr/bin/env node

function add(a, b){
    return a + b;
}

const args = process.argv.slice(2);
const int1 = parseInt(args[0]);
const int2 = parseInt(args[1]);

const result = add(int1, int2);

console.log(result);