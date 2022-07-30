"use strict";

// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {

//   let lastWatchedFilmName = prompt("Один из последних просмотренных фильмов?",);
//   let lastWatchedFilmRate = prompt("Насколько оцените его?", "0");

//   personalMovieDB.movies[lastWatchedFilmName] = lastWatchedFilmRate;

// }

// console.log(personalMovieDB);

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const aa = prompt('Один из последних просмотренных фильмов?', ''),
      bb = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

personalMovieDB.movies.aa = bb;
personalMovieDB.movies.c = d;


console.log(personalMovieDB.movies);

