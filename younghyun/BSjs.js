$(document).ready(function(){
            
    ImgPosition();
    //초기화

    $(window).resize(function(){
        ImgPosition();
    });
    //윈도우 크기 변경 = resize 이벤트 발생

    function ImgPosition(){

        if(window.innerWidth <= 1600)
        {
            $("body").css("width", "1600px");
            
            $(".Div2innerBox").css("left", "800px");

            $(".BSmainDiv1_2Imgbox").css("left", "800px");

            $(".BSmainDiv3Imgbox").css("left", "800px");

            $(".BSmainDiv4Big").css("left", "800px");

            $(".BStop").css("left", "1520px");

            $(".BScenterDiv").css("left", "800px");
            
        }
        else
        {
            $("body").css("width", "100%");

            $(".Div2innerBox").css("left", "50%");

            $(".BSmainDiv1_2Imgbox").css("left", "50%");

            $(".BSmainDiv3Imgbox").css("left", "50%");

            $(".BSmainDiv4Big").css("left", "50%");

            $(".BStop").css("left", "95%");

            $(".BScenterDiv").css("left", "50%");
        }

    }
    //윈도우창 내부 가로가 1600px 이하면 고정, 그 이상이면 내용들이 가운데 정렬으로

   
    let line=$("#BSline")[0];
    let context = line.getContext("2d");

    context.beginPath();
    context.moveTo(800, 0);
    context.lineTo(800, 100);
    //윗 중앙
    context.moveTo(350,100);
    context.lineTo(1250,100);
    //중앙 가로
    context.moveTo(350,200);
    context.lineTo(350,100);

    context.moveTo(650,200);
    context.lineTo(650,100);

    context.moveTo(950,200);
    context.lineTo(950,100);

    context.moveTo(1250,200);
    context.lineTo(1250,100);

    context.strokeStyle="black"; 
    context.lineWidth= 2;
    context.stroke();
    //캔버스로 선

    $(".BSpick").click(function(e){
        e.preventDefault();
        var target = $(this).attr("href");
        var targetPosition = $(target).offset().top;

        var windowHeight = $(window).height();
        var scrollPosition = targetPosition - (windowHeight / 2);

        $("html, body").animate({scrollTop: scrollPosition}, 800);
        
    });
    // "pick" 클릭하면 밑으로 스크롤

    $("#BSpick1").click(function(){
        
        let imgArray = document.getElementsByClassName("BSchooseImg");

        for(let i = 0 ; i < imgArray.length; i++)
        {
            let obj = imgArray[i];
            obj.style.zIndex = i;
        }

        imgArray[0].style.zIndex = 6;

    });
    //방성영 "pick" 클릭하면 mv1 포스터로 변환

    $("#BSpick2").click(function(){
        
        let imgArray = document.getElementsByClassName("BSchooseImg");

        for(let i = 0 ; i < imgArray.length; i++)
        {
            let obj = imgArray[i];
            obj.style.zIndex = i;
        }
        
        imgArray[1].style.zIndex = 6;

    });
    //유영현 "pick" 클릭하면 mv2 포스터로 변환

    $("#BSpick3").click(function(){
        
        let imgArray = document.getElementsByClassName("BSchooseImg");

        for(let i = 0 ; i < imgArray.length; i++)
        {
            let obj = imgArray[i];
            obj.style.zIndex = i;
        }
        
        imgArray[2].style.zIndex = 6;

    });
    //한상지 "pick" 클릭하면 mv3 포스터로 변환

    $("#BSpick4").click(function(){
        
        let imgArray = document.getElementsByClassName("BSchooseImg");

        for(let i = 0 ; i < imgArray.length; i++)
        {
            let obj = imgArray[i];
            obj.style.zIndex = i;
        }
        
        imgArray[3].style.zIndex = 6;

    });
    //구인모 "pick" 클릭하면 mv4 포스터로 변환

    $("#BSbutton").click(function(){
        
        let imgArray = document.getElementsByClassName("BSchooseImg");

        for(let i = 0 ; i < imgArray.length; i++)
        {
            let obj = imgArray[i];
            obj.style.zIndex = i;
        }
        
    });
    //'포스터 초기화' 버튼 누르면 포스터 초기화


    $("#BSmv5").click(function(){
        alert("위로 돌아가셔서 'Pick' 해주세요!");
    });
    // ? 이미지 클릭시

    var currentIndex1_2 = 0;
    var images1_2 = $(".BSmainDiv1_2Img");

    $(images1_2[currentIndex1_2]).show(); // 초기 이미지


    function fadeImage1_2() {
        var nextIndex1_2 = (currentIndex1_2 + 1) % images1_2.length;
        $(images1_2[currentIndex1_2]).fadeOut(3000);
        $(images1_2[nextIndex1_2]).fadeIn(3000);
        currentIndex1_2 = nextIndex1_2;
    }
    setInterval(fadeImage1_2, 3000);
    //3초마다 배경 이미지 변환

    var currentIndex = 0;
    var images = $(".BSmainDiv3Img");

    $(images[currentIndex]).show(); // 초기 이미지

    function fadeImage() {
        var nextIndex = (currentIndex + 1) % images.length;
        $(images[currentIndex]).fadeOut(3000);
        $(images[nextIndex]).fadeIn(3000);
        currentIndex = nextIndex;
    }
    setInterval(fadeImage, 3000);
    //3초마다 배경 이미지 변환

    $("#BStopbut").css({
        "animation-name":"movingButt",
        "animation-duration":"2s",
        "animation-timing-function": "ease",
        "animation-iteration-count": "infinite"
    });
    //우하단 TOP 버튼 애니메이션

    $("#BStopbut").click(function(){
        
        $("html, body").animate({scrollTop: 0}, 800);

    });
    //우하단의 top 버튼 누르면 윈도우 제일 위로 이동

});