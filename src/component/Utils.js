export const getMoviesBySearchTerm = async (search) => {
  let apiKey = "8af05759";
  let URL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;
  let response = await fetch(URL);
  let movies;
  if (response.status == 200) {
    movies = await response.json();
    console.log("Movie with name" + search + " is", movies);
  } else {
    throw console.error();
  }
  return movies;
};

export const getMoviesDetailBySearchTerm = async (search) => {
  let apiKey = "8af05759";
  let URL = `http://www.omdbapi.com/?apikey=${apiKey}&t=${search}`;
  let response = await fetch(URL);
  let movies;
  if (response.status == 200) {
    movies = await response.json();
    console.log("Movie with name" + search + " is", movies);
  } else {
    throw console.error();
  }
  return movies;
};
export const getMovieDetailsById = async (id) => {
  let apiKey = "8af05759";
  let URL = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
  let response = await fetch(URL);
  let movies;
  if (response.status == 200) {
    movies = await response.json();
    console.log("Movie with id" + id + " is", movies);
  } else {
    throw console.error();
  }

  return movies;
};

// getMovieDetailsById("tt1285016");
// getMoviesBySearchTerm("Terminator");
