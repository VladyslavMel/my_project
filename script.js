"use strict";

//alert("Hello");

//const result = confirm("Are you here?");
//console.log(result);

//const answer = +prompt("Do you have 18 years?", "");
//console.log(typeof(answer));
//console.log(answer + 5);
//const answers = [];

//answers[0] = prompt('What you nawe?', '');
//answers[1] = prompt('What you surname?', '');
//answers[2] = prompt('How old are you?', '');

//console.log(answers);
//document.write(answers);
//console.log(typeof(answers));
//console.log(typeof(null));
///////////////////////////////////////////////////////

//const category = 'toys';

//console.log(`https://someurl.com/${category})/5`);

//const user = 'Vlad';

//alert(`Hello dear, ${user}`);

console.log(4 + +'5');

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(5%2);

console.log(2*4 === 8);

const isChecked = true,
        isClose = false;
//console.log(isChecked && isClose);
console.log(isChecked || !isClose);

console.log(2 + 2 * 2 !== '6');

/////////////////////////////////////////////

if (1) {
    console.log('Ok!');
} else {
    console.log('No!');
}

///////////////////////////////////////////

//if (num < 49) {
//    console.log('Error');
//} else if (num > 100) {
//    console.log('Large');
//} else {
//    console.log('Ok!');
//}

//(num === 50) ? console.log('Ok!') : console.log('Error');

//const num = 50;
//switch (num) {
 //   case 49:
 //       console.log('False');
 //       break;
 //   case 100:
 //       console.log('False');
 //       break;
 //   case 51:
 //       console.log('Yes u right!');
 //       break;
 //   default:
 //       console.log('Oops...');
 //       break;
//}

let num = 50;

//while (num <= 55) {
   // console.log(num);
   // num++;
//}

//do { 
  //  console.log(num);
  //  num++;
//}
//while (num < 55);

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6){
        break;
        //continue;

    }
    console.log(i);
}