// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director == director);
  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  director = array.filter((movie) => movie.director == director);
  let result = director.reduce((a, b) => a + b.score, 0) / director.length;
  return Number(result.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let orderedMovies = array.sort();
  let onlyTitle = orderedMovies.map((movie) => movie.title);
  let orderedOnlyTitle = onlyTitle.sort();
  return orderedOnlyTitle.splice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let newArr = array.filter((x) => x);
  let orderedByYear = newArr.sort((a, b) => {
    let result = a.year - b.year;

    if (result !== 0) return result;

    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(orderedByYear);
  return orderedByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  genre = array.filter((movie) => movie.genre == genre && movie.score !== '');
  let result = genre.reduce((a, b) => a + b.score, 0) / genre.length;
  return Number(result.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  //let duration = [...movies];
  let duration = movies.slice();

  let hour = duration.map(
    (a) => parseInt(a.duration.substring(0, 2)) * 60 || 0
  );
  let min = duration.map((b) => parseInt(b.duration.substring(2, 6)) || 0);
  let moviesInMin = hour.map((item, i) => item + min[i]);
  duration.map((before, after) => {
    before.duration = moviesInMin[after];
  });
  final = duration.slice(0);
 //final = duration.map(a=>{return{...a}})
  //let final = duration.map(a=>Object.assign({},a))
 //final = [...duration];
  console.log(duration);
  console.log(final);
  //hay que hacer que result imprima lo q imprime duration

  return final;
}
//ver como imprimir el array de peliculas substituyendo

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let movieYear = array.filter((array) => array.year == year).sort();
  movieYear.sort(function (item, i) {
    return i.score - item.score;
  });
  let result = [...movieYear];
  return result.slice(0, 1);

  // let bestFilm = yearFilm.slice(0, 1);
  // return bestFilm;
  //  director = array.filter((movie) => movie.director == director);
  //let result = director.reduce((a, b) => a + b.score, 0) / director.length;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
