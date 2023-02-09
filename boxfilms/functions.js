function checkIfValid() {
    var  watchedMovie = document.getElementById("filme").value;
    if (watchedMovie.endsWith(".jpg")){
        addMovieOnScreen (watchedMovie);
    }
    else{
            alert("Invalid image adress!")
            console.error ("Invalid image adress");
    }
  
    document.getElementById("filme").value = "";
}



function addMovieOnScreen(filme){
  var listFilm = document.getElementById("listaFilmes");
  var img = document.createElement("img");
  img.src =  filme ;       document.getElementById("listaFilmes").appendChild(img);
   
}
