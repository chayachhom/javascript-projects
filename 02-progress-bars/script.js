const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')

let currentProgress = 1

next.addEventListener(('click'), ()=> {
    currentProgress++
    if(currentProgress > circles.length) {
        currentProgress = circles.length
    }
    console.log(currentProgress)
    update()
})

prev.addEventListener(('click'), ()=> {
    currentProgress--
    if(currentProgress > 1) {
        currentProgress = 1
    }
    console.log(currentProgress)
    update()
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentProgress) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
}