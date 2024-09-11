let BOAniObj = null;
$(function () {
  BOAniObj = {
    duration: 190,
    inputBuffer: [],
    size: $("#box-office .bg img").length,
    currentIndex: 0,
    initTime: null,
    maxInputBuffer: 2,
    totalXTravelDis: 492,
    logMod: 13
  };

  setInterval(BOTransEvent, 1);
});

function BOTransEvent() {
  const inputBuffer = BOAniObj.inputBuffer;
  if (inputBuffer.length <= 0) return;

  const deltaTime = new Date().getTime() - BOAniObj.initTime;
  const progress = deltaTime / BOAniObj.duration;

  if(progress >= 1){
    const finalXPos = BOAniObj.totalXTravelDis * -1 * inputBuffer[0].targetIndex;
    console.log(finalXPos);
    $("#box-office .poster-box ul").css("transform", `matrix(1, 0, 0, 1, ${finalXPos}, 0`);
    inputBuffer.shift();
    BOAniObj.initTime = new Date().getTime();

    if(inputBuffer.length >= 1){
      const inputObj = inputBuffer[0];
      BOAniObj.currentIndex = inputObj.targetIndex;
      switchBGs(inputObj);
      switchInfoBox(inputObj);
    }

    return;
  }

  const inputObj = inputBuffer[0];
  const signMod = inputObj.startIndex - inputObj.targetIndex;
  const travelMod = getLogVal(progress, BOAniObj.logMod);
  const totalXTravelDis = BOAniObj.totalXTravelDis
  const startXPos = -1 * inputObj.startIndex * totalXTravelDis;
  const targetXPos = startXPos + totalXTravelDis * travelMod * signMod;

  $("#box-office .poster-box ul").css("transform", `matrix(1, 0, 0, 1, ${targetXPos}, 0`);
}

function boxOfficeArrowEvent(direction) {
  if (!BOAniObj) {
    console.log("none created");
    return;
  }

  const inputBuffer = BOAniObj.inputBuffer;

  if (inputBuffer.length <= 0) {
    const inputObj = getInputObj(BOAniObj.currentIndex, direction);

    if (inputObj) {
      inputBuffer.push(inputObj);
      BOAniObj.initTime = new Date().getTime();
      BOAniObj.currentIndex = inputObj.targetIndex;
      switchBGs(inputObj);
      switchInfoBox(inputObj);
    }
    return;
  }

  if(inputBuffer.length >= BOAniObj.maxInputBuffer)
    return;

  const promisedLastIndex = inputBuffer[inputBuffer.length - 1].targetIndex;
  const inputObj = getInputObj(promisedLastIndex, direction);

  if (inputObj) inputBuffer.push(inputObj);
}

function switchBGs(inputObj) {
  const bgList = $("#box-office .bg img");
  const startBG = $(bgList[inputObj.startIndex]);
  const targetBG = $(bgList[inputObj.targetIndex]);

  bgList.removeClass();

  startBG.addClass("prev");
  targetBG.addClass("on");
}

function switchInfoBox(inputObj) {
  const IBList = $("#box-office .info-box > div");
  const startIB = $(IBList[inputObj.startIndex]);
  const targetIB = $(IBList[inputObj.targetIndex]);

  IBList.removeClass("active").removeClass("prev").removeClass("next");
  startIB.addClass("prev");
  targetIB.addClass("next");
}

function getInputObj(pivotIndex, direction) {
  if (pivotIndex <= 0 && direction == "left") return null;

  if (pivotIndex >= BOAniObj.size - 1 && direction == "right") return null;

  const inputObj = {};
  inputObj.startIndex = pivotIndex;
  inputObj.targetIndex = direction == "left" ? pivotIndex - 1 : pivotIndex + 1;

  return inputObj;
}
