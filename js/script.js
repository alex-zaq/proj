"use strict";

// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


start();
rememberMyFilmes();
detectPersonalLevel();
showMyDb(personalMovieDB.privat);
writeYourGenres();

function start() {
  
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
  
  while (numberOfFilms == '' || numberOfFilms == null || 
  isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
  }

  personalMovieDB.count = numberOfFilms;

}

function rememberMyFilmes() {

  for (let i = 1; i <= 2; i++) {

    const a = prompt("Один из последних просмотренных фильмов?", "").trim();
    const b = prompt("Насколько оцените его?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }

}

function detectPersonalLevel() {

  if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }

}

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}


function writeYourGenres(){
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] =  prompt(`Ваш любимый жанр под номеров ${i}`);
  }

}


