
$(function () {
  const cans = $("section .dots canvas");

  for (let i = 0; i < cans.length; i++) {
    drawCircle.call(cans[i]);
  }

  aniObj.canvas = cans[0];

  setInterval(waitAnimation, aniObj.interval);
});

function waitAnimation(){
  const transitioning = aniObj.transitioning;

  if(aniObj.startAngle >= Math.PI * 2 && !transitioning){
    drawCircle.call(aniObj.canvas);
    const srcCircle = $(aniObj.canvas).parent()[0];
    const id = $(srcCircle).attr("data-next-dot");
    const destCircle = $(id)[0]
    
    circleClick(destCircle);
    return;
  }

  if(transitioning)
    return;

  const context = aniObj.canvas.getContext("2d");
  context.beginPath();
  aniObj.deltaTime = new Date().getTime() - aniObj.initialTime;

  const deltaTime = aniObj.deltaTime;
  const aId = $(aniObj.canvas).parent().attr("id");
  const duration = aId == "dot1" ? aniObj.duration + aniObj.dot1Duration : aniObj.duration;
  aniObj.endAngle = Math.PI * 2 * (deltaTime / duration);

  const position = canvasInfo.position; 
  const radius = canvasInfo.radius + 6;
  const startAngle = aniObj.startAngle + aniObj.angleModifier;
  const endAngle = aniObj.endAngle + aniObj.angleModifier;

  context.arc(position, position, radius, startAngle, endAngle);
  context.strokeStyle = "white";
  context.lineWidth = 2.5;
  context.stroke();

  aniObj.startAngle = aniObj.endAngle;
  
}

const canvasInfo = {
  position: 13,
  radius: 5,
};

function circleClick(obj) {
  const displayOff = isDisplayOff.call(obj);
  if (!displayOff) return;

  if(aniObj.transitioning)
    return;
  aniObj.transitioning = true;

  const srcCircle = getSrcScreen();
  drawCircle.call($(srcCircle).children()[0]);

  switchMainScreen(srcCircle, obj);
  aniObj.canvas = $(obj).children()[0];
}

function switchMainScreen(src, dest){
  const duration = 3000;

  const srcBG = $(src).attr("data-bg");
  const destBG = $(dest).attr("data-bg");
  const remBG = getRemainingBG(srcBG, destBG);
  const srcMS = $(src).attr("data-main-screen");
  const destMS = $(dest).attr("data-main-screen");

  $(destBG).css("z-index", 2);
  $(remBG).css("z-index", 1);

  $(destBG).show();
  $(srcBG).fadeOut(duration, function(){
    $(destBG).fadeIn(1);
    $(remBG).css("z-index", 1);
    $(srcBG).css("z-index", 2);
    $(destBG).css("z-index", 3);
    $(destMS).fadeIn(50, function(){
      aniObj.startAngle = 0;
      aniObj.initialTime = new Date().getTime();

      $(this).removeClass("display-off");
      aniObj.transitioning = false;
    });
  });
  $(srcMS).fadeOut(duration, function(){
    $(this).addClass("display-off");
  });
}

function getRemainingBG(src, dest){
  const bgs = $(".bgs li");

  for(let i = 0; i < bgs.length; i++){
    const className = `.${bgs[i].className}`;
    if(!(className == src || className == dest)){
      return className;
    }
  }
}

function getSrcScreen() {
  const dotList = $("section .dots a");

  for (let i = 0; i < dotList.length; i++) {
    const displayOff = isDisplayOff.call(dotList[i]);
    if(!displayOff) return dotList[i];
  }
}

function isDisplayOff(){
    const className = $(this).attr("data-main-screen");
    const mainScreen = $(className);
    const displayOff = $(mainScreen).hasClass("display-off");
    return displayOff;
}

function drawCircle() {
  const context = this.getContext("2d");

  const size = canvasInfo.position * 2;
  context.clearRect(0, 0, size, size);

  context.beginPath();
  const position = canvasInfo.position;
  const radius = canvasInfo.radius;
  context.arc(position, position, radius, 0, Math.PI * 2);
  context.fillStyle = "white";
  context.fill();
}

