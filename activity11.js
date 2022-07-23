
//   EXAMPLE 14
const sBubble = document.querySelector(`.sBubble`)
const pBubble = document.querySelector(`.pBubble`)
const aBubble = document.querySelector(`.aBubble`)
sBubble.addEventListener(`click`, function (e) {
    e.stopPropagation()
    alert(`SECTION was clicked!`)
})
pBubble.addEventListener(`click`, function (e) {
    e.stopPropagation()
    alert(`PARAGRAPH was clicked!`)
})
aBubble.addEventListener(`click`, function (e) {
    e.stopPropagation()
    alert(`LINK was clicked!`)
})




//   EXAMPLE 13 : preventDefault on a link
const qccURL = document.querySelector(`#qccURL`)
qccURL.addEventListener(`click`, function (e) {
    e.preventDefault()
    alert(`QCC website is off`)
})



//   EXAMPLE 12 : setting toTop to appear after scrolling
const toTop = document.querySelector(`.toTop`)
window.addEventListener(`scroll`, function () {
    let pxTop = window.pageYOffset
    if (pxTop > 80) {
        toTop.style.display = `block`
    } else {
        toTop.style.display = `none`
    }

})



//   EXAMPLE 11
const display9 = document.querySelector(`.display9`)
window.addEventListener(`scroll`, function () {
    let pxTop = window.pageYOffset
    display9.innerHTML = `Browser window is ${pxTop}px away from the top`

})



//   EXAMPLE 10   :   keyboard events -> pressed key ID + ASCII
const inputTxt = document.querySelector(`.inputTxt`)

inputTxt.addEventListener(`keydown`, function (e) {
    alert(`KEYDOWN! Key "${e.key}" pressed! \nThe ASCII code for "${e.key}" is ${e.which}`)
})



//   EXAMPLE 9
const divColor = document.querySelectorAll(`.divColor`)
for (let eachDiv of divColor) {
    eachDiv.addEventListener(`mouseout`, function () {
        eachDiv.style.backgroundColor = changeColor()
    })
}



//   EXAMPLE 7
const colorContainer = document.querySelector(`.colorContainer`)
const btnColor = document.querySelector(`#btnColor`)

btnColor.addEventListener(`click`, function () {
    colorContainer.style.backgroundColor = changeColor()
})

function changeColor () {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    
    return `rgb(${r}, ${g}, ${b})`
}



//   EXAMPLE 6 : addEventListener(`event`, function on event)
const btn6 = document.querySelector(`#btn6`)
btn6.addEventListener(`mouseout`, click1)
btn6.addEventListener('dbclick', click2)  //wont work

function click1 () {
    console.log(`BUTTON 6 = mouseout`)
}
function click2 () {
    alert(`BUTTON 6 was double clicked`)
}



//   EXAMPLE 5
const btn5 = document.querySelector(`#btn5`)
btn5.addEventListener(`click`, function() {
    alert(`BUTTON 5 was clicked`)
})



//   EXAMPLE 4
const title4 = document.querySelector(`.title4`)
title4.onmouseout = function () {
    console.log(`The title was hovered on mouseout event`)
}



//   EXAMPLE 3
const qcclink = document.querySelector(`#qcclink`)
qcclink.onclick = function () {
    console.log(`QCC link was clicked`)
}
qcclink.onmouseover = testing
function testing () {
    console.log(`QCC link was hovered over`)
}



//   EXAMPLE 2
const btn2 = document.querySelector(`#btn2`)
btn2.onclick = function () {
    alert(`Hi there!`)
}

/*ANOTHER WAY TO CREATE THE ONCLCIK EVENT
function clickedBtn () {
    alert(`Hi there!`)
}
btn2.onclick = clickedBtn */
