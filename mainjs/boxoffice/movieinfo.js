
$(function () {
  setTimeout(init, 800);
});

function init(){
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmRjYjI1MTdjYmU1OWY4Y2EyOTNlYjgxZjAzZGJkZiIsInN1YiI6IjY1ZjNiNjc3MjkzODM1MDE2NDI4MTdjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4oYDaWnlcZozuXJCLnYKY0QxGpRQA8FfJ8m9G8QqOPk",
    },
  };

  const apiKey = `2c5d6482ac3784c26f19b4c58bfe23a7`;

  const movieIDs = [
    "693134",
    "76341",
    "976573",
    "6977",
    "155",
    "299536",
    "361743",
    "601796-1",
    "783110",
    "19995"
  ];

  const requests = [];

  for (let i = 0; i < movieIDs.length; i++) {
    const movie = fetch(
      `https://api.themoviedb.org/3/movie/${movieIDs[i]}?language=ko`,
      options
    ).then((res) => res.json());

    const trailer = fetch(
      `https://api.themoviedb.org/3/movie/${movieIDs[i]}/videos?`,
      options
    ).then((res) => res.json());

    requests.push(movie);
    requests.push(trailer);
  }

  const movieNum = movieIDs.length;

  for (let i = 0; i < movieNum - 2; i++)
    $("#box-office .info-box > :nth-child(2)")
      .clone()
      .appendTo("#box-office .info-box");

  Promise.all(requests).then((data) => {
    const dataArr = [];

    for (let i = 0; i < data.length; i += 2) {
      const dataObj = {};
      dataObj.movInfo = data[i];
      dataObj.trailer = data[i + 1];
      dataObj.tagStr = `#box-office .info-box > :nth-child(${i / 2 + 1})`;
      dataArr.push(dataObj);
    }

    console.log("all done");
    console.log(dataArr);

    dataArr.forEach((d) => {
      renderMovies(d);
    });
  });
}

function renderMovies(data) {
  console.log(data);
  const info = data.movInfo;
  const tag = data.tagStr;
  const trailer = data.trailer;

  $(`${tag} .title`).html(info.title);

  let typeStr = "";
  let key = "";

  try {
    const genre1 = info.genres[0].name ? info.genres[0].name : "";
    const genre2 = info.genres[1].name ? info.genres[1].name : "";

    typeStr = `${genre1}
      <span class='vl'> | </span>
      ${genre2} 
      <span class='vl'> | </span>
      ${info.release_date}
      `;

    key = trailer.results.filter(
      (link) => link.type === "Trailer" && link.site === "YouTube"
    )[0].key;
    console.log(key);
  } catch (error) {}
  $(`${tag} .type`).html(typeStr);
  $(`${tag} .desc`).html(info.overview);

  $(`${tag} .btn a`).attr("value" , info.id);

  const imgPath = info.poster_path;
  const imgStr = `<li style="background: url(https://image.tmdb.org/t/p/w500/${imgPath}) 
  center center no-repeat; background-size: cover;" onclick="expandToCinemaView(this)"
  data-key = "${key}"
  >
    <div>
      <p> <img class="arrow" src="./assets/img/arrowup.png" height=30 width=30> </p> 
      <p class="click-here"> 여기를 클릭하시오 </p>
    </div>
  </li> 
  `;

  $("#box-office .poster-box ul").append(imgStr);
}


