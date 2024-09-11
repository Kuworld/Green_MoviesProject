$(function(){
  $('a.imgLink').click(function(event) {
      event.preventDefault(); 

      var imgSrc = $(this).find('img').attr('src')
      $('#img').attr('src', imgSrc); 
      
      $('.imgLink').removeClass('selectedImage'); 
      $(this).addClass('selectedImage'); 
  });

});
