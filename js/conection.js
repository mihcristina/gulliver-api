function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function preencheDiv(filme) {

}

function fillPopularMovies() {
    let domain = "api.themoviedb.org"
    let apikey = "752c11849747ed228980d57c056e8d7a"
    let target = `https://${domain}/3/movie/popular?api_key=${apikey}&language=pt-BR`

    let father = document.getElementById("filmes")

    fetch(target)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(json) {
            return json.results
        })
        .then(function(movies) {
            movies.forEach(element => {
                let baseUrl = "https://image.tmdb.org/t/p/w500/"
                let imagem  = document.createElement("img")

                imagem.src = `${baseUrl}${element.poster_path}`
                imagem.classList.add("imagemFilme")

                father.appendChild(imagem)
            });
        })
}