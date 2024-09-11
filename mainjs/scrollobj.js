
const tabScroll = {
  scrollLen: 200,
  startLen: 300,
  cb: function (progress) {
    const travelYPos = 300;
    const opacity = progress;
    const deltaDis = getLogVal(progress, 20) * travelYPos;
    const distance = travelYPos - deltaDis;

    $("article .tabs")
      .css("opacity", opacity)
      .css("transform", `translate(0, ${distance}px)`);
  },
};

const detailBtnScroll = {
  startLen: 390,
  scrollLen: 350,
  cb: function (progress) {
    const travelYPos = 200;
    const opacity = progress;
    const deltaDis = progress * travelYPos;
    const distance = travelYPos - deltaDis;

    $(".poster-list > .detail-btn")
      .css("opacity", opacity)
      .css("transform", `translate(0, ${distance}px)`);
  },
};

const posterScroll = {
  scrollLen: 350,
  startLen: 450,
  cb: function (progress) {
    const travelYPos = 400;
    const opacity = progress;
    const deltaDis = getLogVal(progress, 30) * travelYPos;
    const distance = travelYPos - deltaDis;

    $(".poster-list .poster-box")
      .css("opacity", opacity)
      .css("transform", `translate(0, ${distance}px)`);

  }
};

const arrowScroll = {
  scrollLen: 580,
  startLen: 220,
  cb: function (progress) {
    const travelXPos = 200;
    const opacity = getLogVal(progress, 20);
    const deltaDis = getLogVal(progress, 20) * travelXPos;
    const distance = travelXPos - deltaDis;

    $(".poster-list .l-arrow")
    .css("transform" , `translate(${distance}px, 0)`)
    .css("opacity", opacity);

    $(".poster-list .r-arrow")
    .css("transform" , `translate(-${distance}px, 0)`)
    .css("opacity", opacity);
  }
};
