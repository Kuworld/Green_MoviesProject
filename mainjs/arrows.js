const arrowAniObj = {
  aniLocked: false,
  xTravelDis: 380,
  intervalId: null,
  duration: 800,
  initTime: 0,
  logMod: 42
};

function arrowEvent(obj) {
  if (arrowAniObj.aniLocked) return;

  const isLArrow = $(obj).hasClass("l-arrow");
  const wentRight = $(".poster-list .poster-box ul").attr("data-went-right");

  if (!isLArrow && wentRight == "no") startArrowGoRight();

  if (isLArrow && wentRight == "yes") startArrowGoLeft();
}

function startArrowGoRight() {
  arrowAniObj.aniLocked = true;
  arrowAniObj.initTime = new Date().getTime();

  arrowAniObj.intervalId = setInterval(function () {
    const deltaTime = new Date().getTime() - arrowAniObj.initTime;
    const duration = arrowAniObj.duration;
    const logMod = arrowAniObj.logMod;
    const progress = getLogVal(deltaTime / duration, logMod);

    if (progress >= 1) {
      clearInterval(arrowAniObj.intervalId);

      $(".poster-list .poster-box ul").css(
        "transform",
        `matrix(1,0,0,1,-${arrowAniObj.xTravelDis},0`
      );

      $(".poster-list .poster-box ul").attr("data-went-right" , "yes");
      arrowAniObj.aniLocked = false;

      return;
    }

    const travelDis = progress * arrowAniObj.xTravelDis * - 1;
    $(".poster-list .poster-box ul").css("transform", `matrix(1,0,0,1,${travelDis},0`);
  }, 1);
}

function startArrowGoLeft() {
  arrowAniObj.aniLocked = true;
  arrowAniObj.initTime = new Date().getTime();

  arrowAniObj.intervalId = setInterval(function () {
    const deltaTime = new Date().getTime() - arrowAniObj.initTime;
    const duration = arrowAniObj.duration;
    const logMod = arrowAniObj.logMod;
    const progress = getLogVal(deltaTime / duration, logMod);

    if (progress >= 1) {
      clearInterval(arrowAniObj.intervalId);

      $(".poster-list .poster-box ul").css(
        "transform",
        `matrix(1,0,0,1,0,0)`
      );

      $(".poster-list .poster-box ul").attr("data-went-right" , "no");
      arrowAniObj.aniLocked = false;
      return;
    }

    const currentXDis = arrowAniObj.xTravelDis * - 1;
    const travelDis = currentXDis + progress * arrowAniObj.xTravelDis;
    $(".poster-list .poster-box ul").css("transform", `matrix(1,0,0,1,${travelDis},0`);
  }, 1);
}
