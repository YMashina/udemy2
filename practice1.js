const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let ask = (question) => {
    let variable = null;
    variable = prompt(question,'');
    if (variable === null || variable.length > 50)
        return ask(question);
    else
        return variable;
}

personalMovieDB.count = ask('Сколько фильмов вы уже посмотрели?');

for (let i = 0; i < personalMovieDB.count; i++) {
    let movieName = ask(`Введите фильм #${i+1} из ${personalMovieDB.count}`);

    personalMovieDB.movies[movieName] = ask(`Оцените фильм "${movieName}"`);
}
console.log(personalMovieDB);


