 const number0Films = +prompt ('How many films have you watched?', '');
 
const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last watched movie?', ''),
      b = prompt('How much do you rate it?', '');
     
personalMovieDB.movies[a] = b;

const c = prompt('How your favorite actor?', ''),
      d = prompt('How old is he?', '');
personalMovieDB.actors[c] = d;

const e = prompt('Do u know genres your film?', ''),
      f = prompt('Answer: ','');
personalMovieDB.genres[e] = f;

console.log(personalMovieDB);



