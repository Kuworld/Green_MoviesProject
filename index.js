
const aniObj = {
    duration: 3900,
    dot1Duration: 1600,
    interval: 10,
    startAngle: 0,
    endAngle: 0,
    canvas: null,
    initialTime: 0,
    deltaTime: 0,
    angleModifier: 1.5 * Math.PI,
    transitioning: true
};

$(function () {

  const interval = 2000;
  $(".main-screen-1").fadeIn(1000, function(){
    $(this).removeClass("display-off");
    aniObj.transitioning = false;
    aniObj.initialTime = new Date().getTime();
  });

});

function showSocialBar(){
  $(".social-media .bar").addClass("showBar");
}
