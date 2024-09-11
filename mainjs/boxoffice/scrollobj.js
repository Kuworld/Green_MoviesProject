const BOStartLen = 1200;

const BOBGScroll = {
  scrollLen: 900,
  startLen: BOStartLen + 50,
  cb: function(progress){
    const startingPerc = 0.5;
    const remPerc = 0.5;
    const scale = startingPerc + remPerc * progress;

    $("#box-office .bg")
      .css("transform", `matrix(${scale}, 0, 0, ${scale},0,0)`);
  }
}

const BOHeaderScroll = {
  scrollLen: 800,
  startLen: BOStartLen + 50,
  cb: function(progress){
    const opacity = progress;
    const travelDis = 100;
    const travelYPos = travelDis - travelDis * progress;


  $("#box-office h3")
    .css("transform", `matrix(1,0,0,1,0,${travelYPos}`)
    .css("opacity", opacity);

  }
}

const BOInfoBoxScroll = {
  scrollLen: 700,
  startLen: BOStartLen + 200,
  cb: function(progress){
    const opacity = progress;
    const travelDis = 100;
    const travelXPos = travelDis - travelDis * progress;

  $("#box-office .info-box")
    .css("transform", `matrix(1,0,0,1,${travelXPos},0)`)
    .css("opacity" , opacity);
  }
}

const BOPosterBoxScroll = {
  scrollLen: 500,
  startLen: BOStartLen + 300,
  cb: function(progress){
    const opacity = progress;
  
    const travelDis = 100;
    const travelXPos = -1 * travelDis + travelDis * progress;

  $("#box-office .poster-box")
    .css("transform", `matrix(1,0,0,1,${travelXPos},0)`)
    .css("opacity" , opacity);
  }
}

const BOArrowScroll = {
  startLen: BOStartLen + 150,
  scrollLen: 500,
  cb: function(progress){
    const opacity = progress;
  
    const travelDis = 100;
    const travelYPos = travelDis + travelDis * progress * -1;

  $("#box-office .arrow-box")
    .css("transform", `matrix(1,0,0,1,0,${travelYPos})`)
    .css("opacity" , opacity);
  }
}