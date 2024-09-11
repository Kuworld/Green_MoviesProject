$(function(){
  initMasonry();
});

function initMasonry(){
  $('.news_list_area').imagesLoaded(function(){
      $('.news_list_area').masonry({
          itemSelector: '.main_box',
          columnWidth: 250,
          isFitWidth: true,
          gutter: 26,
          horizontalOrder: true
      });
  });
}