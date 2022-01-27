'use strict';

let num = 20;

/* function showFirstMessage() {
    console.log('Hello World');
}

showFirstMessage();

function showFirstMessage(text) {
    console.log(text);
    num = 5;
}
showFirstMessage('Hi, Dear!');
console.log(num);
 */

function showFirstMessage(text) {
    console.log(text);
    let num = 5; 
    console.log(num);
}
showFirstMessage('Hi, Dear!');
console.log(num);

/* function calc(a, b){
    return (a + b);
}

console.log(calc(5, 5));
console.log(calc(1, 5));
console.log(calc(100, 5)); */

function ret(){
    let num = 50;
    //
    //
    //
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function(){
    console.log('Im here');
};

logger();

/* const calc = (a,b) => a + b; */
/* const calc = (a,b) => {return a + b}; */
/* const calc = (a,b) => a + b; */
const calc = (a,b) => {
    console.log('1');
    return a + b;
};
calc();
