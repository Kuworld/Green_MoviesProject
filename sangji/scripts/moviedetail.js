var movielinktotal = null;
var facebookid = '';
var instagramid = '';
var twitterid = '';
var youtubeclickid='';
var youtubeid = '';


$(document).ready(function(){
    $(document).on('click', '.openwindow', function(){
        var value = $(this).attr('value'); 
        $('#floatWindow').fadeIn("fast");
        $('#floatwindowclose').fadeIn("slow");
        $('#scrollimage').fadeIn("slow");
        fetchData(value); 

        $('#floatWindow').scrollTop(0);
        return false;
    });

    $(document).on('click', '#floatwindowclose a.close', function(){
        $("#floatWindow, #floatwindowclose, #scrollimage").fadeOut("fast");
        clearData();
        return false;
    });

    function fetchData(value){
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmRjYjI1MTdjYmU1OWY4Y2EyOTNlYjgxZjAzZGJkZiIsInN1YiI6IjY1ZjNiNjc3MjkzODM1MDE2NDI4MTdjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4oYDaWnlcZozuXJCLnYKY0QxGpRQA8FfJ8m9G8QqOPk'
            }
        };

    const urls =[
        `https://api.themoviedb.org/3/movie/${value}?language=ko`,`https://api.themoviedb.org/3/movie/${value}/credits?language=ko`,`https://api.themoviedb.org/3/movie/${value}/images?`,`https://api.themoviedb.org/3/movie/${value}/videos`,`https://api.themoviedb.org/3/movie/${value}/external_ids`
        ];

    const requests = urls.map(url => fetch(url, options).then(response => response.json()));


    Promise.all(requests)
        .then(dataArray => {
        const [movieDetails, movieCredit,moviePoster,movieVideo,movieLink] = dataArray; 

        
        //영화 디테일에서 가져온 정보
        //평점 가져오기 추가하기
        //제목
        const movieTitle = document.createElement('div');
        movieTitle.textContent = movieDetails.title;
        movieTitle.id = "movieTitle";
        document.getElementById("movietitle").appendChild(movieTitle);


        //디테일
        const table = document.createElement('table');

        //감독
        const directors = movieCredit.crew.filter(member => member.job === 'Director');
        const directorName = directors[0].name;

        const directorElement = document.createElement('td');
        directorElement.textContent = directorName;
        
        const row1 = table.insertRow();
        const cell1 = row1.insertCell();
        const cell2 = row1.insertCell();
        cell1.textContent = "감독";
        cell2.appendChild(directorElement);

        //배우
        const movieActors = [];
            for (let i = 0; i < 3; i++) {
                movieActors.push(movieCredit.cast[i].name);
            }
                
        const actors = document.createElement('td')
        actors.textContent = movieActors.join(", ") +" 외";

        const row2 = table.insertRow();
        const cell3 = row2.insertCell();
        const cell4 = row2.insertCell();
        cell3.textContent = "출연";
        cell4.appendChild(actors);

        //개봉일
        const movieReleasedate = document.createElement('td');
        movieReleasedate.textContent = movieDetails.release_date;
        
        const row3 = table.insertRow();
        const cell5 = row3 .insertCell();
        const cell6 = row3.insertCell();
        cell5.textContent = "개봉일";
        cell6.appendChild(movieReleasedate);

        //장르
        const movieGenres = [];
        for (let i = 0; i < movieDetails.genres.length; i++) {
        movieGenres.push(movieDetails.genres[i].name);
        } 
        const genres = document.createElement('td')
        genres.textContent = movieGenres.join(", ");

        const row4 = table.insertRow();
        const cell7 = row4.insertCell();
        const cell8 = row4.insertCell();
        cell7.textContent = "장르";
        cell8.appendChild(genres);
    

        //상영시간
        const movieRunTime = document.createElement('td');
        movieRunTime.textContent = movieDetails.runtime + " 분";
    
        const row5 = table.insertRow();
        const cell9 = row5.insertCell();
        const cell10 = row5.insertCell();
        cell9.textContent = "상영시간";
        cell10.appendChild(movieRunTime);

        //평점
        const movieRank = document.createElement('td');
        movieRank.textContent = movieDetails.vote_average;
    
        const row6 = table.insertRow();
        const cell11 = row6.insertCell();
        const cell12 = row6.insertCell();
        cell11.textContent = "평점";
        cell12.appendChild(movieRank);


        document.getElementById("moviedetailtable").appendChild(table);
            

        //줄거리
        const movieplot = document.createElement('p');
        movieplot.textContent = movieDetails.overview;

        document.getElementById("movieplot").appendChild(movieplot);

        //예고편
        
        const trailer = movieVideo.results.filter(link => link.type === 'Trailer' && link.site === 'YouTube')
        const trailerlink = trailer[0].key

        //const trailevideo = document.createElement('video')
        const trailerVideoLink = 'https://www.youtube.com/embed/' + trailerlink +'?autoplay=1&mute=1';

        const iframeElement = document.createElement("iframe");
        iframeElement.width = "720"; 
        iframeElement.height = "405"; 
        iframeElement.src = trailerVideoLink;
        iframeElement.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"; 
        iframeElement.allowFullscreen = true;    
        
        document.getElementById("movietrailer").appendChild(iframeElement);

        
        //포스터
        const posterlink1 = moviePoster.posters[0].file_path;
        const movieposter_image1 = document.createElement('img');
        movieposter_image1.src = 'https://image.tmdb.org/t/p/w500' + posterlink1;
        $("#img").attr("src",'https://image.tmdb.org/t/p/w500' + posterlink1);
        movieposter_image1.style.height = '100px';
        document.querySelector('#movieposter1 a.imgLink').appendChild(movieposter_image1);
        
        const posterlink2 = moviePoster.posters[1].file_path;
        const movieposter_image2 = document.createElement('img');
        movieposter_image2.src = 'https://image.tmdb.org/t/p/w500' + posterlink2;
        movieposter_image2.style.height = '100px';
        document.querySelector('#movieposter2 a').appendChild(movieposter_image2);
        
        const posterlink3 = moviePoster.posters[2].file_path; 
        const movieposter_image3 = document.createElement('img');
        movieposter_image3.src = 'https://image.tmdb.org/t/p/w500' + posterlink3;
        movieposter_image3.style.height = '100px';
        document.querySelector('#movieposter3 a').appendChild(movieposter_image3);

        //SNS링크


        facebookid = movieLink.facebook_id;
        instagramid = movieLink.instagram_id;
        twitterid = movieLink.twitter_id;

        const youtubelink = movieVideo.results.filter(link => link.type === 'Trailer' && link.site === 'YouTube');
        youtubeclickid = youtubelink[0].key;

        youtubeVideoLink = 'https://www.youtube.com/embed/' + youtubeclickid +'?autoplay=1&mute=1';

        youtubeid = youtubeVideoLink;

        
    });
};

document.getElementById("youtube").addEventListener('click',function(){
    if (youtubeclickid == null) {
        alert("링크가 없습니다.");
    } else {
        window.open(youtubeVideoLink, '_blank');
    }
});


document.getElementById("facebook").addEventListener('click', function() {
    if (facebookid == null) {
        alert("링크가 없습니다.");
    } else {
        const facebookLink = 'https://www.facebook.com/' + facebookid;
        window.open(facebookLink, '_blank');
    }
});

document.getElementById("instagram").addEventListener('click', function() {
    if (instagramid == null) {
        alert("링크가 없습니다.");
    } else {
        const instagramLink = 'https://www.instagram.com/' + instagramid;
        window.open(instagramLink, '_blank');
    }
});

document.getElementById("twitter").addEventListener('click', function() {
    if (twitterid == null) {
        alert("링크가 없습니다.");
    } else {
        const twitterLink = 'https://www.twitter.com/' + twitterid;
        window.open(twitterLink, '_blank');
    }
});

function clearData() {
    $('#movieTitle').remove(); 
    $('#moviedetailtable').empty();
    $('#movieplot').empty();
    $('#movietrailer').empty();
    $('#movieposter1 a').empty(); 
    $('#movieposter2 a').empty();
    $('#movieposter3 a').empty();
    $('#youtube').empty();
};

});