const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    ask(question) {
        let variable = null;
        variable = prompt(question,'');
        if (variable === null || variable.length > 50 || variable.length === 0)
            this.ask(question);
        else
            return variable;
    },
    showMyDb() {
        if (this.privat === false)
            console.log(this);
        else
            console.log('DB is private');
    },
    writeYourGenres() {
        for (let i = 0; i < 3; i++){
            this.genres[i] = this.ask(`Ваш любимый жанр под номером #${i + 1}`);
        }
        this.genres.forEach((element, index) => {console.log(`Любимый жанр #${index + 1} - ${element}`)})
    },
    fillDb() {
        for (let i = 0; i < this.count; i++) {
            const movieName = this.ask(`Введите фильм #${i+1} из ${this.count}`);

            this.movies[movieName] = this.ask(`Оцените фильм "${movieName}"`);
        }
    },
    toggleVisibleMyDb () {
        this.privat ? this.privat = false : this.privat = true;
    }
};

personalMovieDB.count = +personalMovieDB.ask('Сколько фильмов вы уже посмотрели?');

personalMovieDB.fillDb();

personalMovieDB.showMyDb();

personalMovieDB.writeYourGenres();
