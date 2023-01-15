"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    ganres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули');  
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули');  
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("переглянуто мало фільмів");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Ви класичний глядач");
        } else if (personalMovieDB.count > 30) {
            console.log("Ви кіноман");
        } else {
            console.log("Виникла поимлка");
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genres =  prompt(`Ваш любимий жанр фільмів під номером ${i}`);

            if (genres === '' || genres == null) {
                console.log('Ви ввели не вірні дані');
                i--;
            } else {
                personalMovieDB.ganres[i - 1] = genres;
            }
        }
        personalMovieDB.ganres.forEach((item, i) => {
            console.log(`Любими жанр ${i + 1} - це ${item}`);
        });   
    }
};