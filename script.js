"use strict";
let myName = 'Nazar';

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули');  
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже переглянули');  

    }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один з останніх переглянутих фільмів?', ''),
              b = prompt('На скільки оціните його');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("переглянуто мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Ви класичний глядач");
    } else if (personalMovieDB.count > 30) {
        console.log("Ви кіноман");
    } else {
        console.log("Виникла поимлка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.ganres[i - 1] =  prompt(`Ваш любимий жанр фільмів під номером ${i}`);
    }    
}

writeYourGenres();

