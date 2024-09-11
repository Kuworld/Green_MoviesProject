function menuClickEvent(obj){
  if(carouselIntervalId)
    clearInterval(carouselIntervalId);

  posterCarousel();

  if($(obj).hasClass("active"))
    return;

  const menuList = $(".tabs a");

  for(let i = 0; i < menuList.length; i++){
    if($(menuList[i]).hasClass("active")){
      $(menuList[i]).removeClass("active");
    }
  }
  $(obj).addClass("active");
}

function posterCarousel(){

  $(".poster-list .poster-box ul")
  .css("transform", "matrix(1,0,0,1,0,0")
  .attr("data-went-right", "no");

  const duration = 900;
  const initTime = new Date().getTime();
  const travelDis = 250;

  carouselIntervalId = setInterval(function(){
    console.log("i");
    const deltaTime = new Date().getTime() - initTime;
    const p = deltaTime / duration;
    const progress = getLogVal(p, 50);
    const opacity = p;
    const distance = travelDis - travelDis * progress;

    if(progress >= 1){
      clearInterval(carouselIntervalId);

      $(".poster-list .poster-box li")
        .css("transform" ,`matrix(1,0,0,1,0,0)`)
        .css("opacity", 1);

      return;
    }
    $(".poster-list .poster-box li")
      .css("transform" ,`matrix(1,0,0,1,${distance},0)`)
      .css("opacity", opacity);

  },1);
}

let carouselIntervalId = null;