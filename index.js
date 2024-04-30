const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmI1ODQxNjc4MjNmZmQ5MDM0NmZiZDUyOGIxNjM4NyIsInN1YiI6IjY2Mjc3MTFkMTc2YTk0MDE2NjgxODE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.arTHoepvJVDDHMRWP_5nrRKr_JgbtQ-MlNyLMOGtgpE"
  }
};
// 영화 리스트 불러오기

fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
  .then((response) => response.json())
  .then((data) => {
    let movieCards = "";
    data.results.forEach((movie) => {
      movieCards += `
        <div class="movie-list" data-movie-id="${movie.id}">
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title} 포스터" />
          <h3>${movie.title}</h3>
          <p>${movie.overview}</p>
          <p>평점: ${movie.vote_average}</p>
        </div>
      `;
    });
    // 생성된 영화 카드를 DOM에 추가
    document.getElementById("movie-list").innerHTML = movieCards;

    // 각 영화 카드에 클릭 이벤트 추가
    let movieLists = document.querySelectorAll(".movie-list");
    movieLists.forEach((movie) => {
      movie.addEventListener("click", function () {
        // 영화 id 함수 추가
        const movieId = movie.dataset.movieId;
        alert(`영화 id : ${movieId}`);
      });
    });
  })

  .catch((err) => console.error(err));

// #movie-list css를 적용하는 방법
if (document.getElementsByTagName("head") != null) {
  document
    .getElementsByTagName("head")[0]
    .insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="./style.css"> />');
}
// 출처: https://jake-seo-dev.tistory.com/110 [제이크서 위키 블로그:티스토리]
