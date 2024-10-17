$(document).ready(function(){
    var textWrapper = $('.TitleAni');
            if (textWrapper.length > 0) {
                textWrapper.html(textWrapper.text().replace(/\S/g, "<span class='TitleAnimation'>$&</span>"));

                anime.timeline({loop: true})
                    .add({
                        targets: '.TitleAnimation',
                        scale: [0.3, 1],
                        opacity: [0, 1],
                        translateZ: 0,
                        easing: "easeOutExpo",
                        duration: 900,
                        delay: (el, i) => 110 * (i + 1)
                    }).add({
                        targets: '.TitleAnimation',
                        opacity: 0,
                        duration: 900,
                        easing: "easeOutExpo",
                        delay: 1500
                    });
            } else {
                console.error("Element with class 'TitleAni' not found.");
            }
            var textWrapper = $('.TitleAni2');
            if (textWrapper.length > 0) {
                textWrapper.html(textWrapper.text().replace(/\S/g, "<span class='TitleAnimation2'>$&</span>"));

                anime.timeline({loop: true})
                    .add({
                        targets: '.TitleAnimation2',
                        scale: [0.3, 1],
                        opacity: [0, 1],
                        translateZ: 0,
                        easing: "easeOutExpo",
                        duration: 900,
                        delay: (el, i) => 70 * (i + 1)
                    }).add({
                        targets: '.TitleAnimation2',
                        opacity: 0,
                        duration: 900,
                        easing: "easeOutExpo",
                        delay: 500
                    });
            } else {
                console.error("Element with class 'TitleAni2' not found.");
            };

            const $counters = $('.scroll_on');
            const exposurePercentage = 100;
            const loop = true;

            $(window).on('scroll', function() {
                $counters.each(function() {
                    const $el = $(this);
                    const rect = $el[0].getBoundingClientRect();
                    const winHeight = window.innerHeight;
                    const contentHeight = rect.bottom - rect.top;

                    if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >=(contentHeight * exposurePercentage / 100) ) {
                        $el.addClass('active'); 
                    } 

                    if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                        $el.removeClass('active');
                    }
                    
                });
            }).scroll();
          
            //thirdpage content
            var thirdCont = [
                {id: "thirdBox1", title:"Team Project", image:"./profilepage/images/mail.png", alt:"매일유업", boxtitle:"매일유업 RENEWAL", className:"thirdFirst", colorName:"gray", colorName2:"colorBlue", firstH3:"Team" },
                {id: "thirdBox2", title:"Team project", image:"./profilepage/images/logo-light.png", alt:"세탁왕", boxtitle:"세탁왕 RENEWAL", className:"thirdSecond", colorName:"colorBlack", firstH3:"Team"},
                {id: "thirdBox3", title:"Team project", image:"./profilepage/images/heroesshoptlogo.png", alt:"히어로즈샵", boxtitle:"Heroes Shop", className:"thirdThird", colorName:"colorBlue", firstH3:"Personer"},
            ]

            thirdCont.forEach(function(thirdContData, index){
                $('#thirdList').append(`
                    <li id="${thirdContData.id}" data-index="${index}">
                        <div class="thirdBox ${thirdContData.className}">
                            <h3><span class="${thirdContData.colorName}">${thirdContData.firstH3}</span> <span class="${thirdContData.colorName2}">Project.</span>
                            <div class="fontNeo textWrap">
                                <img src="${thirdContData.image}" alt="${thirdContData.alt}" />
                                <p>${thirdContData.boxtitle}</p>
                                <a href="#none">project page <span class="material-symbols-outlined">attach_file</span></a>
                                <a href="#none">ppt <span class="material-symbols-outlined">attach_file</span></a>
                            </div>
                        </div>
                    </li>`);
       
            })

            //popup
            var popupCont = [
                {id: "popup1", popH3:"매일유업 리뉴얼 프로젝트", popImage:"./profilepage/images/mail.png", popAlt:"매일유업", projectTypeTitle:"About Our Project", popDate:"2024. 06.12 Wed - 2024. 07. 05 Fri", Tools:"Html5, Css3, JavaScript, JQuery", layoutType:"fixed", con1:"1. 메인 페이지 이미지 및 레이아웃 디자인", con2:"2. 메인 페이지 5-6섹션 및 footer 제작", con3:"3. 기업소개, 브랜드, 로그인 페이지 디자인 및 제작", con4:"4. 프로젝트 진행 총괄", pjLink:"#none", ppt:"#none", projectType:"team" },
                {id: "popup2", popH3:"세탁왕 리뉴얼 프로젝트", popImage:"./profilepage/images/logoDark.png", popAlt:"세탁왕", projectTypeTitle:"About Our Project", popDate:"2024. 07.31 Wed - 2024. 08. 14 Wed", Tools:"Vue.js, Vuetify, Firebase", layoutType:"Responsive", con1:"1. 요금표, 공지사항, 자주묻는질문, 사이드바 디자인", con2:"2. 이용내역, 요금표, 공지사항, 자주묻는질문 제작", con3:"3. 프로젝트 진행 총괄", pjLink:"#none", ppt:"#none", projectType:"team" },
                {id: "popup3", popH3:"히어로즈샵 프로젝트", popImagae:"./profilepage/images/heroesShopGray.png", popAlt:"히어로즈샵", projectTypeTitle:"About My Project", popDate:"2024. 09.04 Wed - 2024. 09. 24 Tue", Tools:"React, React BootStrap, FireBase", layoutType:"Responsive", pjLink:"#none", ppt:"#none", projectType:"personal"}
            ]

            
            popupCont.forEach(function(popupContData, index){
                if(popupContData.type==='team'){
                $('body').append(`
                    <div class="popupWidth" id="${popupContData.id}" data-index="${index}">
                        <div class="fontNeo popupContent">
                            <button class="fontNeo modalClose" type="button">X</button>
                                <div class="popupWrap">
                                    <h3>${popupContData.popH3}</h3>
                                    <img src="${popupContData.popImage}" alt="${popupContData.popAlt}" />
                                    <p><span aria-hidden="true">*************</span>${popupContData.projectTypeTitle}<span aria-hidden="true">*************</span></p>
                                    <ul>
                                        <li>Duration: ${popupContData.popDate}</li>
                                        <li>Completion Level: ★★★★☆</li>
                                        <li>Tools: ${popupContData.Tools}</li>
                                        <li>Layout Type: ${popupContData.layoutType}</li>
                                    </ul>
                                    <p class="popupLine" aria-hidden="true">****************************************</p>
                                    <p>CONTRIBUTION</p>
                                    <ul>
                                        <li>${popupContData.con1}</li>
                                        <li>${popupContData.con2}</li>
                                        <li>${popupContData.con3}</li>
                                        <li>${popupContData.con4}</li>
                                    </ul>
                                    <p class="popupLine" aria-hidden="true">****************************************</p>
                                    <p>Link To</p>
                                    <ul>
                                        <li>
                                        <a href="${popupContData.pjLink}">project page<span class="material-symbols-outlined">attach_file</span></a>
                                        </li>
                                        <li>
                                        <a href="${popupContData.ppt}">ppt<span class="material-symbols-outlined">attach_file</span></a>
                                        </li>
                                    </ul>
                                </div>
                        </div>        
                    </div>  
                    `);}
                    else if(popupContData.type === 'personal'){
                        console.log('특수 모달 생성 중:', popupContData.id);
                    $('body').append(`
                        <div class="popupWidth" id="${popupContData.id}" data-index="${index}">
                            <div class="fontNeo popupContent">
                                <button class="fontNeo modalClose" type="button">X</button>
                                    <div class="popupWrap">
                                        <h3>${popupContData.popH3}</h3>
                                        <img src="${popupContData.popImage}" alt="${popupContData.popAlt}" />
                                        <p><span aria-hidden="true">*************</span>${popupContData.projectTypeTitle}<span aria-hidden="true">*************</span></p>
                                        <ul>
                                            <li>Duration: ${popupContData.popDate}</li>
                                            <li>Completion Level: ★★★★☆</li>
                                            <li>Tools: ${popupContData.Tools}</li>
                                            <li>Layout Type: ${popupContData.layoutType}</li>
                                        </ul>
                                        <p class="popupLine">****************************************</p>
                                        <p>"This project was<br/>completely created by EG!"</p>
                                        <p class="popupLine">****************************************</p>
                                        <p>Link To</p>
                                        <ul>
                                            <li>
                                            <a href="${popupContData.pjLink}">project page<span class="material-symbols-outlined">attach_file</span></a>
                                            </li>
                                            <li>
                                            <a href="${popupContData.ppt}">ppt<span class="material-symbols-outlined">attach_file</span></a>
                                            </li>
                                        </ul>
                                    </div>
                            </div>        
                        </div>  
                    `);}
                    })    
                /*
            //open effect
            $('#thirdList').on('click','li',function(){
                var select = $(this).data('index');
                console.log("클릭한 박스의 인덱스 : ", select);
                console.log("모달 데이터 배열 : ", popupCont);
                
                if(select < popupCont.length){
                    var popupId = popupCont[select].id;
                    console.log(popupId)
                    var connect = $(`#${popupId}`);

                    if(connect.length >= 0){
                        connect.fadeIn();
                        $('.popupBackground').fadeIn();
                    }else{
                        console.log('모달이 존재하지 않습니다.')
                    }
                }else{
                        console.log('박스 인덱스가 배열 범위를 벗어났습니다.')
                    }

            });


            //close effect
            $('body').on('click','.modalClose', '.popupBackground', function(){
                $('.popupBackground').fadeOut()
            })*/

            
            
});