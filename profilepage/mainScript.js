let userCurrent = 0;

const totalSection = document.querySelectorAll('.section').length;

function scrollToSection(sectionIndex){
    const sections = document.querySelectorAll('.section');
    const section = sections[sectionIndex];

    console.log('sectionIndex:', sectionIndex);
    console.log('sections:', sections.length);

    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    })

}

function throttle(func,limit){
    let inThrottle;
    return function(...args){
        if(!inThrottle){
            func.apply(this,args);
            inThrottle=true;
            setTimeout(()=>inThrottle=false,limit)
        }
    }
}

function handleScroll(event){
    event.preventDefault;
    if(event.deltaY>0 && userCurrent < totalSection -1){
        userCurrent++;
        }
    else if(event.deltaY< 0 && userCurrent > 0){
        userCurrent--;
        }
    scrollToSection(userCurrent)
}

window.addEventListener('wheel', throttle(handleScroll,300))