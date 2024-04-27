const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmI1ODQxNjc4MjNmZmQ5MDM0NmZiZDUyOGIxNjM4NyIsInN1YiI6IjY2Mjc3MTFkMTc2YTk0MDE2NjgxODE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.arTHoepvJVDDHMRWP_5nrRKr_JgbtQ-MlNyLMOGtgpE",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// 영화 리스트 만들어보기
let movieCard = "";

//영화 카드 클릭하면 alert 창이 뜨게하기
let movieli = "";
