function expandToCinemaView(obj){


  const key = $(obj).attr("data-key");
  $(".pop-up").addClass("darken-background");
  $(".cinema-box").addClass("expand-cinema");
  $(".cinema-box .close").addClass("showClose");
  $(".cinema-box iframe").attr("src", `https://www.youtube.com/embed/${key}?`);
  $(".cinema-box iframe").addClass("video");

}

function closeCinemaBox(){
  console.log("close");
  $(".cinema-box").removeClass("expand-cinema");
  $(".cinema-box .close").removeClass("showClose");
  $(".cinema-box iframe").attr("src", "");
  $(".cinema-box iframe").removeClass("video");
  $(".pop-up").removeClass("darken-background");
}