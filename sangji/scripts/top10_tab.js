function top10HTML() {
  var totalarea = document.getElementById("total_tab");
  totalarea.style.display = 'none';

  var alltabarea = document.getElementById("all_tab");
  alltabarea.innerHTML = '';
  
  var movietabarea = document.getElementById("movie_tab");
  movietabarea.innerHTML = '';

  var animationtabarea = document.getElementById("animation_tab");
  animationtabarea.innerHTML = '';

  var top10tabarea = document.getElementById("top10_tab");
  top10tabarea.innerHTML = '';

  var nowshowingtabarea = document.getElementById("nowshowing");
  nowshowingtabarea.innerHTML = '';

  var ul = document.createElement("ul");
  var posters = document.querySelectorAll('#top10');
  posters.forEach(function(poster,index) {
    var li = document.createElement("li");
    li.innerHTML = poster.outerHTML; 
    li.style.cssText = 'display : inline-block; width : 200px; margin : 20px; opacity : 0';

    setTimeout(function(){
      li.style.opacity = 1;
      li.classList.add("fadeInDown");
    }, index*200);

    ul.appendChild(li); 
});

top10tabarea.appendChild(ul);

var alltabimage = document.getElementById("alltabimg");
  alltabimage.style.opacity = "0";

  var nowshowingtabimage = document.getElementById("nowshowingtabimg");
  nowshowingtabimage.style.opacity = "0";

  var movietabimage = document.getElementById("movietabimg");
  movietabimage.style.opacity = "0";

  var animationtabimage = document.getElementById("animationtabimg");
  animationtabimage.style.opacity = "0";

  var top10tabimage = document.getElementById("top10tabimg");
  top10tabimage.style.opacity = "1";
 
}


