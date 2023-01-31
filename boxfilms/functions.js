function checkIfValid() {
    var  watchedMovie = document.getElementById("filme").value;
    if (watchedMovie.endsWith(".jpg")){
        addMovieOnScreen (watchedMovie);
    }
    else{
            console.error ("Invalid image adress");
    }
  
    document.getElementById("filme").value = "";
}

function addMovieOnScreen(filme){
    var film = "<img src = " + filme + ">";
    var listFilm = document.getElementById("listaFilmes");
    listFilm.innerHTML = listFilm + film;
}