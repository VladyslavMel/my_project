 const number0Films = +prompt ('How many films have you watched?', '');
 
const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last watched movie?', ''),
      b = prompt('How much do you rate it?', ''),
      c = prompt('Last watched movie?', ''),
      d = prompt('How much do you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



