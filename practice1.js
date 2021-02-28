const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const ask = (question) => {
    let variable = null;
    variable = prompt(question,'');
    if (variable === null || variable.length > 50)
        return ask(question);
    else
        return variable;
}

personalMovieDB.count = +ask('Сколько фильмов вы уже посмотрели?');

for (let i = 0; i < personalMovieDB.count; i++) {
    const movieName = ask(`Введите фильм #${i+1} из ${personalMovieDB.count}`);

    personalMovieDB.movies[movieName] = ask(`Оцените фильм "${movieName}"`);
}

const showMyDb = () => {
    if (personalMovieDB.privat === false)
        console.log(personalMovieDB);
};

showMyDb();

const writeYourGenres = () => {
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = ask(`Ваш любимый жанр под номером #${i+1}`);
    }
};

writeYourGenres();

showMyDb();