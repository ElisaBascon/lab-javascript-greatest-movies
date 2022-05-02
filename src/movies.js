const movies = require("./data");

// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//Opcion 1

function getAllDirectors() {
  let moviesDirectors = movies.map(function(movie) {
    return movie.director
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
  let moviesStevenSpielberg = movies.filter((movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  })
  return moviesStevenSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
	let totalScore = moviesArr.reduce((acc, val) => {
	  return acc + val.score;
});
	let average = totalScore / moviesArr.length;
	let decimals = Number(average.toFixed(2));
	  return decimals;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieArr) {
	const dramaMovAvg = movieArr.filter((movie) =>
	movie.genre.includes('Drama')
);
return scoresAverage(dramaMovAvg);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movArr) {
  let year = [...movArr].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title); 
  }
    else {
      return a.year - b.year; }
  });
  return year;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(mArr) {
	let moviesTitles = mArr.map((movie) => movie.title);
	let orderedTitles = moviesTitles.sort((a, b) => a.localeCompare(b));
		if (orderedTitles.length > 20) {
			return orderedTitles.slice(0, 20);
		} else if (orderedTitles.length < 20) {
			return orderedTitles.slice(0, 20);
}
  return orderedTitles;
}  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
