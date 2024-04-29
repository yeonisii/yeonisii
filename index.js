const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmI1ODQxNjc4MjNmZmQ5MDM0NmZiZDUyOGIxNjM4NyIsInN1YiI6IjY2Mjc3MTFkMTc2YTk0MDE2NjgxODE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.arTHoepvJVDDHMRWP_5nrRKr_JgbtQ-MlNyLMOGtgpE"
  }
};

fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
  .then((response) => response.json())
  .then((data) => {
    let movieCards = "";
    data.results.forEach((movie) => {
      movieCards += `
        <div class="movie-list">
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title} 포스터" />
          <h3>${movie.title}</h3>
          <p>${movie.overview}</p>
          <p>평점: ${movie.vote_average}</p>
        </div>
      `;
    });
    // 생성된 영화 카드를 DOM에 추가
    document.getElementById("movie-list").innerHTML = movieCards;
  })

  .catch((err) => console.error(err));

//영화 카드 클릭하면 alert 창이 뜨게하기
let movieli = "";
