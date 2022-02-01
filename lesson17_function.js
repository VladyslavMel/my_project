'use strict';

let number0Films;

function start() {
    number0Films = +prompt ('How many films have you watched?', ''); 

    while (number0Films == '' || number0Films == null || isNaN(number0Films)){
        number0Films = +prompt ('How many films have you watched?', '');
    }
}
start();

const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function  rememberMyFilms() {
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
}
/* rememberMyFilms(); */

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Few films watched');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('You like films');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are crazy');
    } else {
        console.log('Error');
    }
}
/* detectPersonalLevel(); */

function showMYDB (hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMYDB(personalMovieDB.privat);

/* console.log(personalMovieDB);  */

function writeYourGenres () {
   for (let i = 1; i <= 3; i++) { 
       /* const genre = prompt(`What is your favorite genre under number ${i}`);  */     
       personalMovieDB.genres[i-1] = prompt(`What is your favorite genre under number ${i}`);
   }
}
writeYourGenres();