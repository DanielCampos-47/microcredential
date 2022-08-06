//=================   INDEX  =================

//=================   INDEX HIDE HEADER  " X "   =================
const indexHeader = document.querySelector(`#indexHeader`)
const indexhideHeader = document.querySelector(`#indexhideHeader`)
indexhideHeader.onclick = function () {
    indexHeader.style.display = 'none'
}







//=================   INDEX NAV ICON HOVER   =================













//=================   INDEX OPEN HAMBURGER   =================
const hamburgerIcon = document.querySelector(`#hamburgerIcon`)
const indexiconNav = document.querySelector(`#indexiconNav`)

hamburgerIcon.onclick = function () {
    if (indexiconNav.style.display === 'none') {
        indexiconNav.style.display = 'flex'
    } else {
        indexiconNav.style.display = 'none'
    }
}




//=================   INDEX SLIDE SHOW   =================
const indexSlides = document.querySelectorAll(`#indexSlide`)
let indexSlideindex = 0
indexslideAuto()

function indexslideAuto () {
    let numberindexSlides = indexSlides.length
    if (indexSlideindex >= numberindexSlides) {indexSlideindex = 0}
    if (indexSlideindex < 0) {indexSlideindex = numberindexSlides -1}

    //hiding images, displaying select index
    for (let eachIndex = 0; eachIndex < numberindexSlides; eachIndex++) {
        indexSlides[eachIndex].style.display = `none`
    }
    indexSlides[indexSlideindex].style.display = `block`

    setTimeout(indexslideAuto, 3000) //second * 1000. Keeps calling itself
    indexSlideindex++
}
