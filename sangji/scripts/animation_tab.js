function animationHTML() {
  var totalarea = document.getElementById("total_tab");
  totalarea.style.display = 'none';

  var movietabarea = document.getElementById("movie_tab");
  movietabarea.innerHTML = '';

  var animationtabarea = document.getElementById("animation_tab");
  animationtabarea.innerHTML = '';

  var top10tabarea = document.getElementById("top10_tab");
  top10tabarea.innerHTML = '';
  
  var alltabarea = document.getElementById("all_tab");
  alltabarea.innerHTML = '';
  
  var nowshowingtabarea = document.getElementById("nowshowing");
  nowshowingtabarea.innerHTML = '';

  var ul = document.createElement("ul");
  var posters = document.querySelectorAll('.poster[data-category="animation"]');

  for (var i = 0; i < posters.length; i++) {
    var li = document.createElement("li");
    li.innerHTML += posters[i].outerHTML;
    ul.appendChild(li);
}

  animationtabarea.appendChild(ul);
  var lis = ul.querySelectorAll("li");

  for (var j = 0; j < lis.length; j++) {
    if (j < 12) {
        lis[j].style.cssText = "display:inline-block; opacity:0;"; 
        fadeInItem(lis[j], j);
    } else {
        lis[j].style.display = "none"; 
    }
  }

  function fadeInItem(item, index) {
    setTimeout(function() {
        item.style.opacity = 1;
        item.classList.add("fadeInDown");
    }, index * 200); 
  }

  var moreButton = document.createElement("button");
  moreButton.id = "moreBtn"
  moreButton.innerHTML = "더보기";
  animationtabarea.appendChild(moreButton); 
  
  var listcount = document.createElement("div");
  var allcount = document.createElement("span");
  allcount.innerHTML = ' / ' + lis.length;

  listcount.id = "list_count";
  

  var nowcount = document.createElement("span");
  if(lis.length < 12) {
    nowcount.innerHTML = lis.length;
  } else {
    nowcount.innerHTML = 12;
  }
  
  moreButton.addEventListener("click", function() { 
    var moreshow = 0;
  
    for (var i = 0; i < lis.length; i++) {
     if (lis[i].style.display !== "none") {
        moreshow++;
      }
     }
  
      for (var j = moreshow; j < moreshow + 12 && j < lis.length; j++) {
          lis[j].style.cssText = "display:inline-block; opacity:0;"; 
        fadeInItem(lis[j], j%12);
        if (moreshow + 12 <lis.length) {
          nowcount.innerHTML = 12 + moreshow;
        }
        else{
          nowcount.innerHTML = lis.length;
        }
      }


      if (moreshow === lis.length) {
        moreButton.style.display = "none";
        alert("목록이 없습니다.");
      }

      
  });

  listcount.appendChild(nowcount);
  listcount.appendChild(allcount);
  animationtabarea.appendChild(listcount);

  var alltabimage = document.getElementById("alltabimg");
  alltabimage.style.opacity = "0";

  var nowshowingtabimage = document.getElementById("nowshowingtabimg");
  nowshowingtabimage.style.opacity = "0";

  var movietabimage = document.getElementById("movietabimg");
  movietabimage.style.opacity = "0";

  var animationtabimage = document.getElementById("animationtabimg");
  animationtabimage.style.opacity = "1";

  var top10tabimage = document.getElementById("top10tabimg");
  top10tabimage.style.opacity = "0";

}