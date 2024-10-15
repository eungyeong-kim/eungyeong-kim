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
            
            // var popupData = [
            //     {id: 'popUp1', content: "hello"},
            //     {id: 'popUp2', content: "hello"},
            //     {id: 'popUp3', content: "hello"},
            // ]
           
            // popupData.forEach(
            //     function(){
            //         $('')
            //     }
            // )    

            var thirdCont = [
                {id: "thirdBox1", title:"Team Project", image:"./profilepage/images/mail.png", alt:"매일유업", boxtitle:"매일유업 RENEWAL", className:"thirdFirst", colorName:"gray", colorName2:"colorBlue", firstH3:"Team" },
                {id: "thirdBox2", title:"Team project", image:"./profilepage/images/logo-light.png", alt:"세탁왕", boxtitle:"세탁왕 RENEWAL", className:"thirdSecond", colorName:"colorBlack", firstH3:"Team"},
                {id: "thirdBox3", title:"Team project", image:"./profilepage/images/heroesshoptlogo.png", alt:"히어로즈샵", boxtitle:"Heroes Shop", className:"thirdThird", colorName:"colorBlue", firstH3:"Personer"},
            ]
            thirdCont.forEach(function(data){
                $('#thirdList').append(`
                    <li id="${data.id}">
                        <div class="thirdBox ${data.className}">
                            <h3><span class="${data.colorName}">${data.firstH3}</span> <span class="${data.colorName2}">Project</span>
                            <div class="fontNeo textWrap">
                                <img src="${data.image}" alt="${data.alt}" />
                                <p>${data.boxtitle}</p>
                                <a href="#none">project page <span class="material-symbols-outlined">attach_file</span></a>
                                <a href="#none">ppt <span class="material-symbols-outlined">attach_file</span></a>
                            </div>
                        </div>
                    </li>`);
       
            })
});