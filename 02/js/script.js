/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
//1
const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');
//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//3
// const question1 = prompt ('Один из последних просмотренных фильмов?', '');
// const question2 = prompt ('На сколько оцените его?', '');
// const question3 = prompt ('Один из последних просмотренных фильмов?', '');
// const question4 = prompt ('На сколько оцените его?', '');

// personalMovieDB.movies[question1]=question2;
// personalMovieDB.movies[question3]=question4;

// console.log(personalMovieDB);

//  Задание на урок:

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять
// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
// 4) Потренироваться и переписать цикл еще двумя способами




//1, 4-1
// for (let i=0; i<2; i++) {
//     const question1 = prompt ('Один из последних просмотренных фильмов?', '');
//     const question2 = prompt('На сколько оцените его?', '');
//     //2
//     if (question1 != null && question2 != null && question1 != '' && question2 != '' && question2.length < 50) {
//         personalMovieDB.movies[question1] = question2;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// 4-1
// let i = 0;
// while (i < 2) {
//     const question1 = prompt('Один из последних просмотренных фильмов?', '');
//     const question2 = prompt('На сколько оцените его?', '');
//     if (question1 != null && question2 != null && question1 != '' && question2 != '' && question2.length < 50) {
//         personalMovieDB.movies[question1] = question2;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//         i--;
//     }
// }


let i = 0;
do { 
    const question1 = prompt('Один из последних просмотренных фильмов?', '');
    const question2 = prompt('На сколько оцените его?', '');
    if (question1 != null && question2 != null && question1 != '' && question2 != '' && question2.length < 50) {
        personalMovieDB.movies[question1] = question2;
        console.log('done');
        i++;
    } else {
        console.log('error');
        i--;
    }
}
while (i<2);

console.log(personalMovieDB);

//3
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы классический зритель");
} else { 
    console.log("Error");
}

//4



