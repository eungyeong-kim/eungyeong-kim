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
            
                    // 요소가 화면에 노출되었을 때
                    if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100)) {
                        $el.addClass('active'); // active 클래스 추가
                    } 
                    // loop가 true이고 요소가 화면에서 벗어났을 때
                    if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                        $el.removeClass('active'); // active 클래스 제거
                    }
                });
            });
})
