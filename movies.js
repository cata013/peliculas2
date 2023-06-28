let currentPage = 1;
// esta variable se usa para indicar el numero de la pagina

function fetchMovies() {
  // esta funcion busca y extrae las peliculas populares de la Api Movie Data base
    // Busa la data de la API, la url incluye el numero de pagina
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=43bfd17021973293a91038f3a10e0b3c&language=es-ES&page=${currentPage}`)
    .then(response => response.json()) // transforma la respuesta a JSON
    .then(data => {
      const movies = data.results;//extrae la lista de peliculas de la data que se buscó
      let output = '';//Inicializar un string para la salida de html
      // Para cada pelicula en la lista se agrega un string de html a la salida
      movies.forEach(movie => {
    output += `
    <div class="col-md-3">
<div class="card mb-4">
  <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
  <h2 class="titulospeli">${movie.title}</h2>

    <div class="card-body">
      <a href="movieuno.html" class="btn btn-primary">Ver detalle</a>
    </div>
  </div>
</div>
    `;
  });
  // Insertar la salida html a la pagina
  document.getElementById('movies').innerHTML = output;
})};
// Agrega el event listener al boton de "prevpage."  Cuando se hace click disminuye el numero de la pagina y despues extrae las nuevas peliculas a la pagina.
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      fetchMovies();
    }
  });
//Aca sucede lo mismo pero aumenta el numero de la pagina
  document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    fetchMovies();
  });

//llama la funcion cuando el script se carga para mostrar la primer pagina de peliculas
  fetchMovies();




   


