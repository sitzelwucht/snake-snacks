
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

//TODO
// Fade from screen to another
function screenFade() {
    document.querySelector('#startscreen').classList.add('fade')
    document.querySelector('#end').classList.add('fade')

    setTimeout(() => {
        document.querySelector('#startscreen').classList.add('hidden')
        document.querySelector('#end').classList.add('hidden')
    }, 1000);

    document.querySelector('#game').classList.remove('hidden')
    setTimeout(() => {
        document.querySelector('#game').classList.remove('fade')
    }, 1100);
}

