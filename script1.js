'use strict';

const number0Films = +prompt ('How many films have you watched?', '');
 
const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* const a = prompt('Last watched movie?', ''),
      b = prompt('How much do you rate it?', '');
     
personalMovieDB.movies[a] = b; */

/* const c = prompt('How your favorite actor?', ''),
      d = prompt('How old is he?', '');
personalMovieDB.actors[c] = d;

const e = prompt('Do u know genres your film?', ''),
      f = prompt('Answer: ','');
personalMovieDB.genres[e] = f; */

for (let i = 0; i < 2; i++) {
    const a = prompt('Last watched movie?', ''),
          b = prompt('How much do you rate it?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('error');
        i--;
    }

    
} 

  if (personalMovieDB.count < 10) {
    console.log('Few films watched');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('You like films');
} else if (personalMovieDB.count >= 30) {
    console.log('You are crazy');
} else {
    console.log('Error');
}


console.log(personalMovieDB); 

/* switch (personalMovieDB.count) {
    case 10:
        console.log('Small');
        break;
    case 25:
        console.log('Good');
        break;
    case 100:
        console.log('Exellent');
        break;
    default 1:
        console.log('Bad answer');
        break;
} */

/* while (personalMovieDB.count < 10) {
    console.log('Few...');
    personalMovieDB.count ++;
}
while (personalMovieDB.count < 30) {
    console.log('Ok, classic user');
    personalMovieDB.count ++;
}
while (personalMovieDB.count < 100) {
    console.log('Very nice');
    personalMovieDB.count ++;
} */

/* do {
    console.log('Small...');
    personalMovieDB.count ++;
} while (personalMovieDB.count < 10);

do {
    console.log('So close :)');
    personalMovieDB.count --;
} while (personalMovieDB.count > 15); */







