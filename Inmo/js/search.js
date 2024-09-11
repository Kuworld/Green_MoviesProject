$(document).ready(function () {
    $('.btn_search').on('click', function () {
        performSearch();
    });

    $('.searchInput').on('keyup', function (e) {
        if (e.keyCode === 13) { // Enter 키를 누르면 검색 수행
            performSearch();
        }
    });
});

function performSearch() {
    let searchTerm = $('.searchInput').val().toLowerCase();
    let filteredInfo = info.filter(function (item) {
        return item.content.toLowerCase().includes(searchTerm);
    });
    $('.news_list_area'). empty();

    for (let i = 0; i < filteredInfo.length; i++) {
        let movieBox = createMovieBox(filteredInfo[i]);
        $('.news_list_area').append(movieBox);
    }
    $('.now').html(filteredInfo.length);
    $('.all').html(info.length);
    $('.news_list_area').imagesLoaded(function(){
        $('.news_list_area').masonry('reloadItems');
        $('.news_list_area').masonry('layout');
    });
    
    $('#Btn_more').off('click');
    $('#Btn_more').on('click', function () {
        $('.loading').show();
        setTimeout(function() {
            $('.loading').fadeOut();
        }, 800);
        setTimeout(function(){
            loadMore(filteredInfo);
        },800);
        
        
    });
    displayMainBoxesRandomly();
};

