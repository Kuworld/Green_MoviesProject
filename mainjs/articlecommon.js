$(function () {
  initializeCSS();

  $(window).on("scroll", function () {
    scrollEvent.call(tabScroll);
    scrollEvent.call(detailBtnScroll);
    scrollEvent.call(posterScroll);
    scrollEvent.call(arrowScroll);
    scrollEvent.call(BOBGScroll);
    scrollEvent.call(BOHeaderScroll);
    scrollEvent.call(BOInfoBoxScroll);
    scrollEvent.call(BOPosterBoxScroll);
    scrollEvent.call(BOArrowScroll);
  });
});

function initializeCSS() {
  $("article .tabs").css("opacity" , 0);
  $(".poster-list .tabs")
    .css("opacity", 0);
  $(".poster-list > .detail-btn")
    .css("opacity", 0);
  $(".poster-list .poster-box")
    .css("opacity", 0);
    
  $(".poster-list .l-arrow")
    .css("opacity", 0);
  $(".poster-list .r-arrow")
    .css("opacity", 0);
  
  $("#box-office .bg").css("transform", "matrix(0.5,0,0,0.5,0,0");
  $("#box-office h3")
    .css("transform", "matrix(1,0,0,1,0,100")
    .css("opacity", 0);

  $("#box-office .info-box")
    .css("transform", "matrix(1,0,0,1,100,0)")
    .css("opacity" , 0);

  $("#box-office .poster-box")
    .css("transform", "matrix(1,0,0,1,-100,0)")
    .css("opacity" , 0);


  $("#box-office .arrow-box")
    .css("transform", `matrix(1,0,0,1,0,100)`)
    .css("opacity" , 0);
}
