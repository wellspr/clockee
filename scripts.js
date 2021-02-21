let analogClock = document.querySelector(".analogclock")

let pinPoint = document.createElement("div")
pinPoint.classList.add("pinpoint")
analogClock.appendChild(pinPoint)

let hoursHand = document.createElement("div")
hoursHand.classList.add("hours-hand")
analogClock.appendChild(hoursHand)

let minutesHand = document.createElement("div")
minutesHand.classList.add("minutes-hand")
analogClock.appendChild(minutesHand)

let secondsHand = document.createElement("div")
secondsHand.classList.add("seconds-hand")
analogClock.appendChild(secondsHand)


let digiClock = document.querySelector("div.digiclock")

let spanNode = document.createElement("span")
spanNode.classList.add("display")
digiClock.appendChild(spanNode)

const offSet = 90

setInterval(() => {

    let d = new Date()
    let seconds = d.getSeconds()
    let minutes = d.getMinutes()
    let hours = d.getHours()

    let secondHandAngle = `${6 * seconds + offSet}deg`
    secondsHand.style.transform = `rotate(${secondHandAngle})`

    let minutesHandAngle = `${(6 * minutes) + (seconds / 10) + offSet}deg`
    minutesHand.style.transform = `rotate(${minutesHandAngle})`

    let hourAngle = (30 * hours) + (minutes / 2) + (seconds / 120)
    let hoursHandAngle = `${ hourAngle + offSet}deg`
    hoursHand.style.transform = `rotate(${hoursHandAngle})`

    let display = ""
    if (minutes < 10) {
        display = `${hours}:0${minutes}`
    } else {
        display = `${hours}:${minutes}`
    }

    document.querySelector(".display").innerText = display


}, 1000)


let hourMarks = []
let pi = Math.PI

for (i=0; i<12; i++) {

let angle = (2 * pi / 12) * i

hourMarks.push(document.createElement("div"))
analogClock.appendChild(hourMarks[i])
hourMarks[`${i}`].classList.add(`hours-mark`)
hourMarks[`${i}`].classList.add(`${i}`)

let x = 230 * Math.cos(angle - pi / 2)
let y = 230 * Math.sin(angle - pi / 2)
hourMarks[`${i}`].style.transform = `translate(${x}px, ${y}px)`

}

let minutesMarks = []
for (i=0; i<60; i++) {

    let angle = (2 * pi / 60) * i
    
    minutesMarks.push(document.createElement("div"))
    analogClock.appendChild(minutesMarks[i])
    minutesMarks[`${i}`].classList.add(`minutes-mark`)
    minutesMarks[`${i}`].classList.add(`${i}`)
    
    let x = 230 * Math.cos(angle - pi / 2)
    let y = 230 * Math.sin(angle - pi / 2)
    minutesMarks[`${i}`].style.transform = `translate(${x}px, ${y}px)`
    
    }


