

function createMovieBox(data) {
    let movieBox = "";
    movieBox += '<div class="main_box" data-year="' + data.date.substr(0, 4) + '">';
    movieBox += '<a href="' + data.site + '" target="_blank">';
    movieBox += '<div class="img_box">';
    movieBox += '<img src="' + data.img + '">';
    movieBox += '</div>';
    movieBox += '<div class="text_box">';
    movieBox += '<div class="box_category" >' + data.title + '</div>';
    movieBox += '<div class="box_title">' + data.content + '</div>';
    movieBox += '<div class="box_date">' + data.date + '</div>';
    movieBox += '</div>';
    movieBox += '</a>';
    movieBox += '</div>';

    return movieBox;

}
//press 초기화면 컨텐츠 생성
function drewDiv() {
    $('.news_list_area').empty();

    for (let i = 0; i < 10; i++) {
        let movieBox = createMovieBox(info[i]);
        $('.news_list_area').append(movieBox);
    }

    $('.now').html(10);
    $('.all').html(info.length);

    $('.news_list_area').imagesLoaded(function(){
        $('.news_list_area').masonry('reloadItems');
        $('.news_list_area').masonry('layout');
    });

    $(document).ready(function () {
        displayMainBoxesRandomly();
    });
};
// 더보기 버튼
function loadInfo() {
    let infoNum = $('.news_list_area .main_box').length; // 현재 표시된 컨텐츠 수
    let maxNum = Math.min(infoNum + 10, info.length); // 새로 로드할 컨텐츠의 최대 수
    if (infoNum >= info.length) {
        alert("더 이상 로드할 컨텐츠가 없습니다.");
        return;
    }
    for (let a = infoNum; a < maxNum; a++) {
        let movieBox = createMovieBox(info[a]);
        $(movieBox).insertAfter($('.news_list_area .main_box').last());
    }

    $('.now').html($('.news_list_area .main_box').length);
    $('.all').html(info.length);
    
    //만소리 레이아웃 재배치 
    $('.news_list_area').imagesLoaded(function(){
        $('.news_list_area').masonry('reloadItems');
        $('.news_list_area').masonry('layout');
    });
    $(document).ready(function () {
        displayMainBoxesRandomly();
    });
};
//로딩gif /컨텐츠 로드 지연
$(function () {
    $('#Btn_more').on('click', function () {
        $('.loading').show();
        setTimeout(function() {
            $('.loading').fadeOut();
        }, 800);
        setTimeout(function(){
            loadInfo();
        },800);
        
    });

});




//연도 카테고리js
$(function(){
    $('.year_slide .year_area a:first').addClass('active')
});
function searchYear(year) {
    $('.year_slide .year_area a').removeClass('active'); // 모든 연도 요소에서 active 클래스 제거
    if (year === '') {
        $('.year_slide .year_area a:first').addClass('active'); // 전체 연도가 선택된 경우 첫 번째 요소에 active 클래스 추가
    } else {
        $('.year_slide .year_area a[data-year="' + year + '"]').addClass('active'); // 선택된 연도에 active 클래스 추가
    }
    
    $('.news_list_area').empty();
    let filteredInfo = info.filter(function (data) {
        return data.date.startsWith(year);
    });

    for (let i = 0; i < Math.min(filteredInfo.length, 10); i++) {
        let movieBox = createMovieBox(filteredInfo[i]);
        $('.news_list_area').append(movieBox);
    }

    $('.now').html(Math.min(filteredInfo.length, 10));
    $('.all').html(filteredInfo.length);

    $('.news_list_area').imagesLoaded(function(){
        $('.news_list_area').masonry('reloadItems');
        $('.news_list_area').masonry('layout');
    });

    // 더보기 버튼의 클릭 이벤트 삭제
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


}

  //연도별 컨텐츠 더보기
function loadMore(filteredInfo) {
    let startIndex = $('.news_list_area .main_box').length; // 이미 로드된 영화 상자의 개수를 구함
    let endIndex = startIndex + 10;
    if (startIndex >= filteredInfo.length) {
        alert("더 이상 로드할 컨텐츠가 없습니다.");
        return;
    }


    for (let b = startIndex; b < Math.min(endIndex, filteredInfo.length); b++) {
        let movieBox = createMovieBox(filteredInfo[b]);
        $('.news_list_area').append(movieBox);
    }

    $('.now').html(Math.min(endIndex, filteredInfo.length)); // 현재 로드된 영화 상자 개수 업데이트
    $('.news_list_area').imagesLoaded(function(){
        $('.news_list_area').masonry('reloadItems');
        $('.news_list_area').masonry('layout');
    });
    displayMainBoxesRandomly();
}

