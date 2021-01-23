
// Add event listeners to arrow keys
function handleKeypress() {
    document.addEventListener('keydown', (event) => {
        if (event.keyCode == 39 || event.key == 'ArrowRight') {
            isRight = true
            isLeft = false
            isUp = false
            isDown = false
        }
        else if (event.keyCode == 37 || event.key == 'ArrowLeft') {
            isRight = false
            isLeft = true
            isUp = false
            isDown = false
        }
        else if (event.keyCode == 38 || event.key == 'ArrowUp') {
            isRight = false
            isLeft = false
            isUp = true
            isDown = false
        }
        else if (event.keyCode == 40 || event.key == 'ArrowDown') {
            isRight = false
            isLeft = false
            isUp = false
            isDown = true
        }
    })
    
    document.addEventListener('keyup', (event) => {
        isRight = false
        isLeft = false
        isUp = false
        isDown = false
    })
}


// Fade from screen to another
function transitionScreen() {
    document.querySelector('#startscreen').classList.add('fade')
    
    setTimeout(() => {
        document.querySelector('#startscreen').classList.add('hidden')
    }, 1000)

    document.querySelector('#game').classList.remove('hidden')
    setTimeout(() => {
        document.querySelector('#game').classList.remove('fade')
    }, 1100)
}


function endScreen() {
    document.querySelector('#game').classList.add('fade')
    setTimeout(() => {
        document.querySelector('#game').classList.add('hidden')
    }, 800);

    setTimeout(() => {
        document.querySelector('#end').classList.remove('hidden')
       
    }, 1200);
    document.querySelector('#end').classList.remove('fade')
}


