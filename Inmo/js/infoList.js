
let info = [
    /*----------------------------2024 뉴스  시작-------------------------------*/
    
    { site: 'https://sports.donga.com/article/all/20240328/124201328/2', img: 'https://dimg.donga.com/wps/SPORTS/IMAGE/2024/03/28/124201317.2.jpg', title: "Green Movies", content: " ‘퓨리오사: 매드맥스 사가’, 칸 영화제 초청…전편 이은 쾌거", date: '2024.03.28' },

    { site: 'https://news.tf.co.kr/read/entertain/2085823.htm', img: 'https://images.khan.co.kr/article/2024/03/27/news-p.v1.20240326.47031fa642dc41e48cb9df3c63a0bd2c_P1.jpg', title: "Green Movies", content: " ‘범죄도시4’ 시리즈 중 제일 재밌다고? <br> 괴물형사 ‘마석도’, 더 묵직해졌다", date: '2024.03.27' },

    { site: 'https://sports.khan.co.kr/entertainment/sk_index.html?art_id=202403270000003&sec_id=540401&pt=nv', img: 'http://img.tf.co.kr/article/home/2024/03/26/202494571711415961.jpg', title: "Green Movies", content: "천만 돌파 '파묘', 33일 연속 박스오피스 1위<br>", date: '2024.03.26' },
    
    { site: 'https://star.ytn.co.kr/_sn/0117_202403261430022845', img: 'https://image.ytn.co.kr/general/jpg/2024/0326/202403261430022845_t.jpg', title: "Green Movies", content: "'쿵푸팬더'도 꺾은 '파묘', 베트남서도 흥행 신드롬<br>국내에서 천만 관객을 돌파하며 흥행 독주를 이어가고 있는 영화 '파묘'가 베트남에서도 신드롬급 돌풍을 일으키고 있다.", date: '2024.03.26' },
    
    { site: 'https://www.maxmovie.com/news/437116', img: 'https://d3ihz389yobwks.cloudfront.net/1711007016608E12WM.jpg', title: "Green Movies", content: "'78세 거장' 조지 밀러 감독 '퓨리오사'로 또 역사 쓸까 <br> '매드맥스:분노의 도로' 잇는 프리퀄, 5월 개봉 <br>안야 테일러 조이 주연 새로운 액션의 세계 ", date: '2024.03.25' },

    { site: 'https://www.yna.co.kr/view/AKR20240323023900005?input=1195m', img: 'https://img9.yna.co.kr/photo/cms/2024/01/20/25/PCM20240120000025005_P4.jpg', title: "Green Movies", content: "'파묘' 1천만 관객 돌파…올해 첫 천만 영화 탄생<br>역대 32번째·한국 영화 23번째…오컬트 장르 첫 사례", date: '2024.03.24' },

    { site: 'https://news.tf.co.kr/read/entertain/2084870.htm', img: 'http://img.tf.co.kr/article/home/2024/03/21/202486221711008645.jpg', title: "Green Movies", content: "'듄: 파트2', 전편 흥행 기록 넘었다…165만 돌파", date: '2024.03.22' },

    { site: 'https://tvreport.co.kr/movie/article/798979/#google_vignette', img: 'https://img.tvreportcdn.de/cms-content/uploads/2024/03/22/a7597e30-d47a-457c-9113-a0faf2a68d27.jpg', title: "Green Movies", content: "‘그대들은 어떻게 살 것인가’, 이제 넷플릭스에서도 볼 수 있다 (+날짜)", date: '2024.03.22' },

    { site: 'https://sports.khan.co.kr/entertainment/sk_index.html?art_id=202403211525003&sec_id=540101&pt=nv', img: 'https://images.khan.co.kr/article/2024/03/21/news-p.v1.20240321.b73abcf9de8a4d79b793a3b4c851a90a_P1.jpg', title: "Green Movies", content: "‘듄2’ 전편 뛰어넘었다 <br>영화 ‘듄2’가 전편 ‘듄’ 최종 관객수를 넘어섰다.", date: '2024.03.21' },

    { site: 'https://tenasia.hankyung.com/article/2024032161364', img: 'https://img.hankyung.com/photo/202403/BF.36189694.1.jpg', title: "Green Movies", content: "전 세계 유튜버 구독자 수 1위, '쿵푸팬더4' 출격", date: '2024.03.21' },

    { site: 'https://www.newsis.com/view/?id=NISX20240320_0002667651&cID=10601&pID=10600', img: 'https://image.newsis.com/2024/03/20/NISI20240320_0001505829_web.jpg?rnd=20240320105108', title: "Green Movies", content: "'쿵푸팬더4' 새 모험 시작…내달 10일 개봉", date: '2024.03.20' },
    
    { site: 'https://www.edaily.co.kr/news/read?newsId=01125046638825288&mediaCodeNo=258', img: 'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2024/03/PS24032000017.jpg', title: "Green Movies", content: "'범죄도시4' 대체불가 캐릭터 액션…다 쓸어버릴 4人4色 케미", date: '2024.03.20' },

    { site: 'https://enews.imbc.com/News/RetrieveNewsInfo/412257', img: 'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2024/03/20/d81c4475-a9d0-4748-b396-02af2ebbb8d9.jpg', title: "Green Movies", content: "'위시', 디즈니+서 황홀한 여정 다시 시작…4월 3일 공개<br>디즈니 100주년 기념작 '위시'가 공개된다. 이와 함께 아샤의 용기 있는 여정을 담아낸 특별 포스터를 공개해 눈길을 끈다.", date: '2024.03.20' },
    
    { site: 'https://www.hankookilbo.com/News/Read/A2024031515080001406?did=NA', img: 'https://newsimg-hams.hankookilbo.com/2024/03/15/0e535d70-d941-4e2f-ba09-c8d6cc7b1d53.jpg', title: "Green Movies", content: "'듄2'와 '웡카'의 흥행 시너지<br> 배우 티모시 샬라메의 두 작품이 극장가에서 존재감을 드러내고 있다. '듄: 파트2'와 '웡카'다. 티모시 샬라메가 이끈 이 영화들은 흥행 시너지를 발휘하며 서로를 밀고 끄는 중이다.", date: '2024.03.17' },

    { site: 'https://www.tvdaily.co.kr/read.php3?aid=17101235741703453017#google_vignette', img: 'https://www.tvdaily.co.kr/upimages/gisaimg/202403/1710123574_1703453.jpg', title: "Green Movies", content: "다시 돌아온 범죄도시4<br> 영화 '범죄도시4' 제작보고회", date: '2024.03.11' },

    { site: 'https://www.tvdaily.co.kr/read.php3?aid=17091791521702482008', img: 'https://www.tvdaily.co.kr/upimages/gisaimg/202402/1709179152_1702482.jpg', title: "Green Movies", content: "'더 퍼스트 슬램덩크', 개봉 1년 만에 VOD 서비스 오픈", date: '2024.02.29' },

    { site: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12167115', img: 'https://photo.jtbc.co.kr/news/jam_photo/202402/26/42677bef-1da5-4bb6-a9cd-3f93d67b03ef.jpg', title: "Green Movies", content: "역시 티모시 샬라메…'웡카' 올해 첫 300만 돌파", date: '2024.02.26' },

    { site: 'https://www.digitaltoday.co.kr/news/articleView.html?idxno=506720', img: 'https://cdn.digitaltoday.co.kr/news/photo/202402/506720_471837_3036.png', title: "Green Movies", content: "'아쿠아맨과 로스트 킹덤', 맥스 독점 공개…2월 27일부터", date: '2024.02.21' },

    { site: 'https://www.slist.kr/news/articleView.html?idxno=526453', img: 'images/wish.jpg', title: "Green Movies", content: "홈초이스, 디즈니 100주년 기념영화 '위시' VOD서비스<br>디즈니 100주년 기념영화 '위시'가 극장에 이어 오늘(17일) 안방극장에서 관객들을 만난다.", date: '2024.02.17' },

    { site: 'https://www.topstarnews.net/news/articleView.html?idxno=15456320', img: 'https://cdn.topstarnews.net/news/photo/202402/15456320_1250407_719.jpg', title: "Green Movies", content: "영화 '외계+인 2부', VOD 서비스 시작…손익분기점·관객수 관심<br>14일 영화 '외계+인 2부'는 극장 동시 IPTV 및 디지털케이블 TV VOD 서비스를 시작했다.", date: '2024.02.14' },

    { site: 'https://gamefocus.co.kr/detail.php?number=148677', img: 'https://gamefocus.co.kr/wys2/file_attach/2024/01/17/1705451369_72951.jpg', title: "Green Movies", content: "'아쿠아맨과 로스트 킹덤' 홈초이스 통해 안방극장 입성", date: '2024.01.17' },

    { site: 'https://www.slist.kr/news/articleView.html?idxno=515747', img: 'images/그대들.png', title: "Green Movies", content: "'그대들은 어떻게 살 것인가',<br>골든글로브 장편 애니메이션 부문 작품상", date: '2024.01.08' },

    { site: 'https://www.topstarnews.net/news/articleView.html?idxno=15442419', img: 'https://cdn.topstarnews.net/news/photo/202401/15442419_1226807_959.jpg', title: "Green Movies", content: "디즈니 '위시', 개봉 당일 박스오피스 1위…43일만 외국 영화 정상 차지 [씨네T]", date: '2024.01.04' },
    /*---------------2024 뉴스 끝------------*/

    /*---------------2023 뉴스 시작------------*/

    { site: 'https://www.mbn.co.kr/news/culture/4990263', img: 'https://img.mbn.co.kr/filewww/news/other/2023/12/28/012182102121.jpg', title: "Green Movies", content: "[Movie] 5년 만에 돌아온 아쿠아맨<br> 아쿠아맨이 돌아왔다. <아쿠아맨과 로스트 킹덤>은 국내에서 개봉한 DC 히어로물 영화 중 누적관객수에서 최고 흥행작으로 기록됐던 <아쿠아맨>(2018)의 예매 기록을 뛰어 넘었다. ", date: '2023.12.28' },
    
    { site: 'https://www.yna.co.kr/view/AKR20231227053000005?input=1195m', img: 'https://img1.yna.co.kr/etc/inner/KR/2023/12/27/AKR20231227053000005_01_i_P4.jpg', title: "Green Movies", content: "개봉 1주년 '슬램덩크' 열풍 다시 한번…상영관 확대", date: '2023.12.27' },

    { site: 'http://www.heraldpop.com/view.php?ud=202312251843306779469_1&pos=naver', img: 'http://res.heraldm.com/phpwas/restmb_allidxmake.php?idx=5&simg=202312251843306779469_20231225184611_01.jpg', title: "Green Movies", content: "'아쿠아맨과 로스트 킹덤' 53개국 1위..전세계 수익 1억770만 달러 돌파(공식) ", date: '2023.12.25' },

    { site: 'https://sports.donga.com/article/all/20231219/122699613/3', img: 'https://dimg.donga.com/wps/SPORTS/IMAGE/2023/12/19/122692846.2.jpg', title: "Green Movies", content: "‘1년째 최장기 상영중’…‘슬램덩크’ 장기 흥행의 의미<br> 팬들 성원에 재상영…350일 돌파 <br>역대 최장 내년 1월 4일엔 ‘상영 1주년’ 이벤트 예정도", date: '2023.12.20' },

    { site: 'https://sports.khan.co.kr/entertainment/sk_index.html?art_id=202312140907003&sec_id=540401&pt=nv', img: 'https://images.khan.co.kr/article/2023/12/14/news-p.v1.20231214.d261114564f34173b09cd8be867999ae_P1.jpg', title: "Green Movies", content: "‘시민덕희’ 내년 1월24일 개봉 확정", date: '2023.12.14' },
    
    { site: 'https://tvreport.co.kr/movie/article/777328/#google_vignette', img: 'https://img.tvreportcdn.de/cms-content/uploads/2023/12/12/eab05746-5f68-4de0-bcbc-42f094d29f37.jpg', title: "Green Movies", content: "‘퓨리오사: 매드 맥스 사가’, 크리스 헴스워스도 극찬…포스터마저 화려", date: '2023.12.12' },

    { site: 'https://www.yna.co.kr/view/PYH20231207192500005?input=1196m', img: 'images/덕희.jpg', title: "Green Movies", content: "영화 '시민덕희' 제작보고회 <br> 7일 서울 광진구 롯데시네마 건대입구에서 열린 영화 '시민덕희' 제작보고회에서 출연자들이 기념 촬영하고 있다.", date: '2023.12.05' },
    
    { site: 'https://www.news1.kr/articles/5210894', img: 'https://image.news1.kr/system/photos/2023/10/26/6288793/article.jpg', title: "Green Movies", content: "모든 비밀 밝혀진다…'외계+인' 2부 2024년 1월 개봉 확정", date: '2023.10.26' },

    { site: 'https://www.edaily.co.kr/news/read?newsId=01233286635774888&mediaCodeNo=258', img: 'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2023/10/PS23102000081.jpg', title: "Green Movies", content: "미야자키 하야오 신작, 예매량 10만 돌파…극장가 흥행 돌풍 예고", date: '2023.10.20' },
    
    { site: 'https://www.edaily.co.kr/news/read?newsId=01374326635744056&mediaCodeNo=258', img: 'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2023/09/PS23092600161.jpg', title: "Green Movies", content: "여름 최고 흥행작 '밀수', 오늘(26일)부터 IPTV·VOD 시작", date: '2023.09.26' },
    
    { site: 'http://www.financialreview.co.kr/news/articleView.html?idxno=25638', img: 'http://www.financialreview.co.kr/news/photo/202309/25638_30107_501.png', title: "Green Movies", content: "흥행 돌풍 ‘밀수' 케이블TV VOD로 만난다...21일 사전예약 시작", date: '2023.09.20' },

    { site: 'https://news.mtn.co.kr/news-detail/2023081610195976187', img: 'https://menu.mtn.co.kr/upload/article/2023/08/16/2023081610195976187_00_650.jpg', title: "Green Movies", content: "'밀수' 입소문 타고 456만 관객 돌파…'범죄도시3' 잇는 흥행세", date: '2023.08.16' },

    { site: 'https://www.ikoreanspirit.com/news/articleView.html?idxno=72885', img: 'https://cdn.ikoreanspirit.com/news/photo/202307/72885_76613_252.jpg', title: "Green Movies", content: "원작 산왕전 그날의 감동을 느껴라! ‘더 퍼스트 슬램덩크’ 전국 동시 상영", date: '2023.07.31' },
    
    { site: 'https://sports.donga.com/article/all/20230702/120041513/3', img: 'https://dimg.donga.com/wps/SPORTS/IMAGE/2023/07/02/120041532.2.jpg', title: "Green Movies", content: "‘범죄도시3’ 천만 돌파, 마동석 ‘5000만 배우’ 등극 <br> 영화 ‘범죄도시3’ 1000만 클럽…‘범죄도시2’ 이어 쌍천만", date: '2023.07.03' },
    
    { site: 'https://www.spotvnews.co.kr/news/articleView.html?idxno=621505#google_vignette', img: 'https://cdn.spotvnews.co.kr/news/photo/202307/621505_879505_4923.jpg', title: "Green Movies", content: "'외계+인' 2부, 올해 안에 보나…CGV 4분기 개봉 예정작 포함", date: '2023.07.02' },

    { site: 'https://www.mediapen.com/news/view/825812', img: 'https://image.mediapen.com/news/202306/news_825812_1686123331_m.jpg', title: "Green Movies", content: "'아바타: 물의 길' 디즈니+ 공개…<br>디즈니+가 전 세계적인 흥행 신드롬을 일으킨 '아바타: 물의 길'을 바로 오늘(7일) 오후 4시에 공개했다.", date: '2023.06.07' },

    { site: 'https://kstar.kbs.co.kr/list_view.html?idx=265064', img: 'https://entertainimg.kbsmedia.co.kr/cms/uploads/BBSIMAGE_20230531080548_310d097dd419a919b372163486f66707.jpg', title: "Green Movies", content: "'아바타:물의 길' 6월 7일 디즈니플러스 공개 <br> 제임스 카메론 감독의 <아바타:물의 길>이 6월 7일 디즈니+에서 스트리밍 서비스를 시작한다.", date: '2023.05.31' },
    
    { site: 'https://www.osen.co.kr/article/G1112113484', img: 'https://file.osen.co.kr/article/2023/05/28/202305280736778158_647288753a45b.jpg', title: "Green Movies", content: "'범죄도시3' 개봉 전 프리미어 상영부터 2위…기대작 맞네 [美친 box]", date: '2023.05.28' },
    
    { site: 'https://www.starnewskorea.com/stview.php?no=2023042116555378947', img: 'https://thumb.mtstarnews.com/06/2023/04/2023042116555378947_1.jpg', title: "Green Movies", content: "'더 퍼스트 슬램덩크', 韓 이어 中도 대박..개봉 하루만 183억 수익", date: '2023.04.21' },
    
    { site: 'https://www.seoul.co.kr/news/2023/03/29/20230329500007', img: 'https://img.seoul.co.kr/img/upload/2023/03/29/SSC_20230329073504_O2.jpg', title: "Green Movies", content: "‘더 퍼스트 슬램덩크’ IMAX로 보자 예매 열기", date: '2023.03.29' },
    
    { site: 'https://sports.chosun.com/entertainment/2023-02-22/202302220100160370021391?t=n1', img: 'https://sports.chosun.com/news/html/2023/02/22/2023022201001603700213911.jpg', title: "Green Movies", content: "[공식] 334만명 돌파 '더 퍼스트 슬램덩크', 日애니 역대 흥행 2위 기록→앵콜 상영회 개최", date: '2023.02.22' },
    
    { site: 'https://www.sisaweek.com/news/articleView.html?idxno=202670', img: 'https://cdn.sisaweek.com/news/photo/202302/202670_203182_5723.jpg', title: "Green Movies", content: "[박스오피스] ‘하울’ 넘은 ‘더 퍼스트 슬램덩크’, 역대 1위 노린다", date: '2023.02.13' },
    /*--------2023 뉴스 끝---------------------------*/

    /*--------2022 뉴스 시작-------------------------*/
    { site: 'https://www.newsis.com/view/?id=NISX20221228_0002138729&cID=10601&pID=10600', img: 'https://image.newsis.com/2022/12/28/NISI20221228_0001163428_web.jpg?rnd=20221228074012', title: "Green Movies", content: "'아바타:물의 길' 개봉 2주만에 600만명↑…올해 5번째", date: '2022.12.28' },
    
    { site: 'https://www.kmib.co.kr/article/view.asp?arcid=0017805924&code=61171811&cp=nv', img: 'https://image.kmib.co.kr/online_image/2022/1227/2022122615205147325_1672035651_0017805924.jpg', title: "Green Movies", content: "흥행돌풍 ‘아바타2’, 한국인 아티스트 손에서 완성됐다", date: '2022.12.27' },
    
    { site: 'https://www.mk.co.kr/news/culture/10581025', img: 'https://wimg.mk.co.kr/news/cms/202212/26/news-p.v1.20221225.1050a1bb241a4ad9bea4782f208ee58c_P1.jpg', title: "Green Movies", content: "극장가 휩쓴 ‘아바타2’, 전작보다 빠른 500만 돌파", date: '2022.12.25' },
    
    { site: 'https://www.stoo.com/article.php?aid=83117538476', img: 'https://img.stoo.com/upimages/gisaimg/202210/11831175.jpg', title: "Green Movies", content: "'범죄도시2', 19일부터 디즈니+에서 만난다", date: '2022.10.11' },
    
    { site: 'https://www.fnnews.com/news/202208311520244596', img: 'https://image.fnnews.com/resource/media/image/2022/08/31/202208311427055645_l.jpg', title: "Green Movies", content: "톰 크루즈 '탑건:매버릭' 800만 돌파", date: '2022.08.31' },
    
    { site: 'http://www.stoo.com/article.php?aid=82196190068', img: 'https://img.stoo.com/upimages/gisaimg/202208/24821961.jpg', title: "Green Movies", content: "'외계+인' 1부 VOD, 23일 안방극장 상륙…미공개 쿠키 포함", date: '2022.08.23' },

    { site: 'https://star.ytn.co.kr/_sn/0117_202208171000509640', img: 'https://image.ytn.co.kr/general/jpg/2022/0817/202208171000509640_d.jpg', title: "Green Movies", content: "‘탑건: 매버릭’, 17일(오늘) 세계 최초 韓 VOD 서비스", date: '2022.08.17' },
    
    { site: 'https://www.ggilbo.com/news/articleView.html?idxno=925054', img: 'https://cdn.ggilbo.com/news/photo/202207/925054_757027_3814.jpg', title: "Green Movies", content: "외계인 1부 100만 넘었다...쿠키영상은?", date: '2022.07.27' },

    { site: 'https://www.slist.kr/news/articleView.html?idxno=370818', img: 'images/범도.png', title: "Green Movies", content: "'범죄도시2' VOD서비스 하루만 2만 시청...구매시청 이벤트", date: '2022.7.21' },
    
    { site: 'https://vop.co.kr/A00001616303.html', img: 'https://archivenew.vop.co.kr/images/1af01a5f49044b6d7fa3b43a36520dad/2022-07/1657773914_2Wthy1TS_5973.jpg', title: "Green Movies", content: "[리뷰]외계인과 도사의 묘한 콜라보...‘외계+인’이 선사한 신세계", date: '2022.7.14' },

    { site: 'https://star.fnnews.com/article/202207131935069832', img: 'https://image.fnnews.com/resource/media/image/2022/07/13/202207131935353456_l.jpg', title: "Green Movies", content: "외계인 1부, '침략자 외계인과 그들을 방어하는 주역들'", date: '2022.7.13' },

    { site: 'https://www.mk.co.kr/news/movies/10367628', img: 'https://wimg.mk.co.kr/meet/neds/2022/06/image_readtop_2022_567559_16564600415090582.jpg', title: "Green Movies", content: "톰 크루즈 `탑건: 매버릭` 7일 연속 1위…200만 눈앞[MK박스오피스]", date: '2022.6.29' },
    
    { site: 'https://www.esquirekorea.co.kr/article/67453', img: 'https://image.jtbcplus.kr/data/contents/jam_photo/202206/24/cea4f2ef-322b-4dda-aabd-87aafcfec9a8.jpg', title: "Green Movies", content: "영화 <듄2> 새로운 라인업으로 등장한 배우 레아 세이두 2023년 10월 20일 극장 개봉할 예정이다.", date: '2022.6.24' },

    { site: 'https://www.news1.kr/articles/?4697467', img: 'https://image.news1.kr/system/photos/2022/5/13/5369393/article.jpg', title: "Green Movies", content: "범죄도시2', 오늘(31일) 전편 성적 688만↑ 뛰어넘는다", date: '2022.05.31' },
    
    { site: 'https://www.fnnews.com/news/202205030943281608', img: 'https://image.fnnews.com/resource/media/image/2022/05/03/202205030843348720_l.jpg', title: "Green Movies", content: "흥행감독 최동훈, 올 여름 귀환 ‘외계인’1부", date: '2022.05.03' },
    /*-----------2022 뉴스 끝-------------------*/ 
    
    /*-----------2021 뉴스 시작-------------------*/ 
    
    { site: 'https://www.news1.kr/articles/?4540057', img: 'https://image.news1.kr/system/photos/2021/12/18/5126566/article.jpg', title: "Green Movies", content: "'스파이더맨' 16일 연속 1위…누적관객 536만↑ ", date: '2021.12.31' },
    
    { site: 'https://view.asiae.co.kr/article/2021120718065816378', img: 'https://cphoto.asiae.co.kr/listimglink/1/2021102715270285207_1635316022.jpg', title: "Green Movies", content: "SF 영화 '듄' 150만 돌파 <br> 7일 영화진흥위원회 영화관입장권 통합전산망에 따르면 '듄'(감독 드니 빌뇌브)은 누적 관객수 150만194명을 기록했다.", date: '2021.12.07' },
    
    { site: 'https://www.starnewskorea.com/stview.php?no=2021111109124850499', img: 'https://thumb.mtstarnews.com/06/2021/11/2021111109124850499_1.jpg', title: "Green Movies", content: "'듄' 11월17일부터 IMAX 재상영..장기 흥행 예고", date: '2021.11.11' },
    
    { site: 'https://www.mhns.co.kr/news/articleView.html?idxno=514665', img: 'https://cdn.mhns.co.kr/news/photo/202110/514665_622634_5111.jpg', title: "Green Movies", content: "영화 '듄' 에피소드 공개···'오스카 아이삭의 수염, 조슈 브롤린의 머리카락으로 만든 것'", date: '2021.10.29' },
    
    { site: 'https://www.mk.co.kr/economy/view/2021/1020143', img: 'https://file.mk.co.kr/meet/neds/2021/10/image_readtop_2021_1020143_16353824334828909.jpg', title: "Green Movies", content: "듄 …SF 소설의 전설을 드디어 스크린에서", date: '2021.10.28' },
    
    { site: 'https://www.nocutnews.co.kr/news/5642882', img: 'https://file2.nocutnews.co.kr/newsroom/image/2021/10/20/202110201840246275_0.jpg', title: "Green Movies", content: "'듄' 오랜 목마름에 종지부 찍은 SF 전설 서막", date: '2021.10.21' },
    
    { site: 'https://www.maxmovie.com/news/432211', img: 'https://d3ihz389yobwks.cloudfront.net/1629852193525KaBzX.jpg', title: "Green Movies", content: "드니 빌뇌브 감독X티모시 샬라메 ‘듄’ 10월 개봉 확정", date: '2021.08.25' },
    
    { site: 'https://www.segye.com/newsView/20210531508962?OutUrl=naver', img: 'https://img.segye.com/content/image/2021/06/07/20210607517481.jpg', title: "Green Movies", content: "‘스파이더맨: 노 웨이 홈’, 역대 스파이더맨 빌런도 재등장?", date: '2021.05.31' },

    { site: 'https://www.wikitree.co.kr/articles/640659', img: 'https://cdnweb01.wikitree.co.kr/webdata/editor/202104/20/img_20210420152025_f52b32bc.webp', title: "Green Movies", content: "'캐스팅 진짜 미쳤다' 마블 '스파이더맨3'…엄청난 '스포' 예고됐다", date: '2021.04.21' },

    { site: 'https://www.mydaily.co.kr/page/view/2021022508477308096', img: 'https://www.mydaily.co.kr/photos/2021/02/25/2021022508477380961_l.jpg', title: "Green Movies", content: "‘스파이더맨:노웨이홈’ 제목 최종 확정, 12월 17일 극장 개봉[공식]", date: '2021.02.25' },
    /*---------20221뉴스 끝-------*/
    /*---------20220뉴스 시작-------*/
    { site: 'https://www.artinsight.co.kr/news/view.php?no=47284', img: 'https://www.artinsight.co.kr/data/tmp/2004/20200415123348_pypvevry.jpg', title: "Green Movies", content: "[Opinion] 100만엔이 모이면 떠나요 : 백만엔걸 스즈코 [영화]", date: '2020.04.16' },
    /*---------20220뉴스 끝-------*/
    /*---------2019뉴스 시작-------*/
    { site: 'https://sports.khan.co.kr/entertainment/sk_index.html?art_id=201907011005003&sec_id=540401&pt=nv', img: 'https://images.khan.co.kr/article/2019/07/01/l_2019070102000034600003431.jpg', title: "Green Movies", content: "[인터뷰] ‘기생충’ 신스틸러 박명훈, 봉준호에 푹 빠진 이유", date: '2019.07.01' },

    { site: 'http://withinnews.co.kr/news/view.html?section=169&category=170&item=&no=18960', img: 'http://withinnews.co.kr/PEG/15598078756761.jpg', title: "Green Movies", content: "백만엔걸 스즈코, 떠돌이 숙녀의 인생 일기", date: '2019.06.06' },
    
    { site: 'https://www.asiatoday.co.kr/view.php?key=20190531002340183', img: 'https://img.asiatoday.co.kr/file/2019y/05m/31d/20190531002340183_1559314100_1.jpg?1559314100', title: "Green Movies", content: "영화 ‘기생충’ 최우식, 송강호·이선균·조여정·박소담과 황금종려상 트로피 인증 ‘포스터 패러디’", date: '2019.06.01' },

    { site: 'http://www.heraldpop.com/view.php?ud=201905010827381687122_1&pos=naver', img: 'http://res.heraldm.com/phpwas/restmb_allidxmake.php?idx=5&simg=201905010827381687122_20190501084217_01.jpg', title: "Green Movies", content: "'기생충' 송강호→이선균, 개성 담은 8人8色 캐릭터 포스터 공개", date: '2019.05.01' },

    { site: 'https://www.starnewskorea.com/stview.php?no=2019040313425433986', img: 'https://thumb.mtstarnews.com/06/2019/04/2019040313425433986_1.jpg', title: "Green Movies", content: "봉준호 '기생충' 15세 관람가..5월 개봉 예정", date: '2019.04.03' },

    { site: 'https://www.yna.co.kr/view/AKR20190323035900005?input=1195m', img: 'https://img6.yna.co.kr/etc/inner/KR/2019/03/23/AKR20190323035900005_01_i_P4.jpg', title: "Green Movies", content: "봉준호 '기생충' 등 한국영화 올해 칸영화제 입성할까", date: '2019.03.24' },
    
    { site: 'https://sports.donga.com/3/all/20190211/94050727/1', img: 'https://dimg.donga.com/wps/SPORTS/IMAGE/2019/02/11/94050690.1.jpg', title: "Green Movies", content: "‘그린북’ 마허샬라 알리, 72회 영국아카데미 시상식 남우조연상 수상", date: '2019.02.11' },

    { site: 'http://www.ilemonde.com/news/articleView.html?idxno=10219', img: 'http://www.ilemonde.com/news/photo/201901/10219_20418_5116.jpg', title: "Green Movies", content: " <그린북>―전복된 위치, 변화하는 시선", date: '2019.01.31' },






    
]
/*듄, 듄 파트2, 파묘, 위시, 웡카, 나의 소녀시대, 탑건 매버릭, 범죄도시, 외계인1부, 외계인2부, 더 퍼스트 슬램덩크, 너의 이름은, 밀수, 아쿠아맨과 로스트 킹덤, 쿵푸팬더3, 쿵푸팬더4, 아바타, 아바타 물의길, 어바웃 타임, 백만엔걸 스즈코, 토이스토리, 스파이더맨: 노 웨이 홈, 기생충, 센과 치히로의 행방불명, 그린북, 그대들은 어떻게 살 것인가, 인사이드 아웃, 인사이드 아웃2, 김종욱 찾기, 시민덕희 */