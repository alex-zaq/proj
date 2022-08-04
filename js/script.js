"use strict";

// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");



const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function(){
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || 
    isNaN(personalMovieDB.count)){
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
      
    }
   
  },
  rememberMyFilmes: function () {

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
  
  },
  detectPersonalLevel: function () {

    if (personalMovieDB.count < 10) {
      console.log("Просмотрено мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  
  },
  showMyDb: function (hidden) {
    if (!personalMovieDB.hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function (){
    return personalMovieDB.privat = !personalMovieDB.privat;
  },
  writeYourGenres: function (){
    for (let i = 1; i < 2; i++) {
      // let genre = prompt(`Ваш любимый жанр под номеров ${i}`);

      // if (genre === '' || genre == null){
      //   i--;
      //   continue;
      // }

      // personalMovieDB.genres[i - 1] = genre;
     
      // personalMovieDB.genres.forEach( e => {
      //   console.log(`Любимый жанр ${i + 1} - это ${e}`)
      //   });

      let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

      if (genres === '' || genres == null){
        i--;
        
      } else {
        personalMovieDB.genres = genres.split(','); 
        personalMovieDB.genres.sort();
      }
    }
  
  }



};


 
 










