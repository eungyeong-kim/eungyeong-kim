$(document).ready(function() {
    // fullpage.js 초기화
    $('#fullpage').fullpage({
        autoScrolling: true,  // fullpage.js 옵션 설정
        //navigation: true,
        afterRender: function() {
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
                        duration: 600,
                        delay: (el, i) => 70 * (i + 1)
                    }).add({
                        targets: '.TitleAnimation',
                        scaleX: [0, 1],
                        opacity: [0.5, 1],
                        easing: "easeOutExpo",
                        duration: 700,
                        offset: '-=875',
                        delay: (el, i, l) => 80 * (l - i)
                    }).add({
                        targets: '.TitleAnimation',
                        opacity: 0,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 1000
                    });
            } else {
                console.error("Element with class 'TitleAni' not found.");
            }
        }
    });
});
