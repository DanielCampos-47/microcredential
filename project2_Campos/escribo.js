//=================   THANK YOU  =================
const firstName = document.querySelector(`#uFname`)
const lastName = document.querySelector(`#uLname`)
const userMail = document.querySelector(`#uMail`)
const submitForm = document.querySelector(`#uSubmit`)

submitForm.addEventListener(`click`, function () {
    // LOCAL STORAGE STAYS WITHIN BROWSER
    localStorage.setItem(`FN`, firstName.value) //using "name's =" set to the input

    // SESSION STORAGE RESETS WHEN BROWASER IS CLOSED
    localStorage.setItem(`LN`, lastName.value)

    localStorage.setItem(`UM`, userMail.value)

    //   TO CLEAR TEXT BOX IN CASE USER GOES BACK USING BROWSER ARROWS
    firstName.value = ``
    lastName.value = ``
    userMail.value = ``
})







//=================   TO TOP BUTTON  =================
const mybutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 250) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}        



//=================   INDEX HIDE HEADER  " X "   =================
const indexHeader = document.querySelector(`#indexHeader`)
const indexhideHeader = document.querySelector(`#indexhideHeader`)
indexhideHeader.onclick = function () {
    indexHeader.style.display = 'none'
}



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
const indexSlides = document.querySelectorAll(`.indexSlide`)
const buttonLeft = document.querySelector(`#buttonLeft`)
const buttonRight = document.querySelector(`#buttonRight`)


let indexSlideindex = 0
indexslideAuto()

function indexslideAuto () {
    // set number of slides & loop condition for buttons
    let numberindexSlides = indexSlides.length
    if (indexSlideindex >= numberindexSlides) {indexSlideindex = 0}
    if (indexSlideindex < 0) {indexSlideindex = numberindexSlides - 1} //  5 items => last index = 4

    //hiding images, displaying select index
    for (let eachIndex = 0; eachIndex < numberindexSlides; eachIndex++) {
        indexSlides[eachIndex].style.display = `none`
    }
    indexSlides[indexSlideindex].style.display = `block`

    setTimeout(indexslideAuto, 3000) //second * 1000. Keeps calling itself
    indexSlideindex++
}




//      MODALS
//      MODALS
//      MODALS

//   featured items
const indexModal1 = document.querySelector(`#indexModal1`)
const openindexModal1 = document.querySelector(`#openindexModal1`)
const closeindexModal1 = document.querySelector(`#closeindexModal1`)

openindexModal1.addEventListener(`click`, function open1 () {
    indexModal1.style.display = `block`
})
closeindexModal1.addEventListener(`click`, function close1 () {
    indexModal1.style.display = `none`
})


const indexModal2 = document.querySelector(`#indexModal2`)
const openindexModal2 = document.querySelector(`#openindexModal2`)
const closeindexModal2 = document.querySelector(`#closeindexModal2`)

openindexModal2.addEventListener(`click`, function open2 () {
    indexModal2.style.display = `block`
})
closeindexModal2.addEventListener(`click`, function close2 () {
    indexModal2.style.display = `none`
})


const indexModal3 = document.querySelector(`#indexModal3`)
const openindexModal3 = document.querySelector(`#openindexModal3`)
const closeindexModal3 = document.querySelector(`#closeindexModal3`)

openindexModal3.addEventListener(`click`, function open3 () {
    indexModal3.style.display = `block`
})
closeindexModal3.addEventListener(`click`, function close3 () {
    indexModal3.style.display = `none`
})


const indexModal4 = document.querySelector(`#indexModal4`)
const openindexModal4 = document.querySelector(`#openindexModal4`)
const closeindexModal4 = document.querySelector(`#closeindexModal4`)

openindexModal4.addEventListener(`click`, function open4 () {
    indexModal4.style.display = `block`
})
closeindexModal4.addEventListener(`click`, function close4 () {
    indexModal4.style.display = `none`
})


const indexModal5 = document.querySelector(`#indexModal5`)
const openindexModal5 = document.querySelector(`#openindexModal5`)
const closeindexModal5 = document.querySelector(`#closeindexModal5`)

openindexModal5.addEventListener(`click`, function open5 () {
    indexModal5.style.display = `block`
})
closeindexModal5.addEventListener(`click`, function close5 () {
    indexModal5.style.display = `none`
})


const indexModal6 = document.querySelector(`#indexModal6`)
const openindexModal6 = document.querySelector(`#openindexModal6`)
const closeindexModal6 = document.querySelector(`#closeindexModal6`)

openindexModal6.addEventListener(`click`, function open6 () {
    indexModal6.style.display = `block`
})
closeindexModal6.addEventListener(`click`, function close6 () {
    indexModal6.style.display = `none`
})


const indexModal7 = document.querySelector(`#indexModal7`)
const openindexModal7 = document.querySelector(`#openindexModal7`)
const closeindexModal7 = document.querySelector(`#closeindexModal7`)

openindexModal7.addEventListener(`click`, function open7 () {
    indexModal7.style.display = `block`
})
closeindexModal7.addEventListener(`click`, function close7 () {
    indexModal7.style.display = `none`
})


const indexModal8 = document.querySelector(`#indexModal8`)
const openindexModal8 = document.querySelector(`#openindexModal8`)
const closeindexModal8 = document.querySelector(`#closeindexModal8`)

openindexModal8.addEventListener(`click`, function open8 () {
    indexModal8.style.display = `block`
})
closeindexModal8.addEventListener(`click`, function close8 () {
    indexModal8.style.display = `none`
})

