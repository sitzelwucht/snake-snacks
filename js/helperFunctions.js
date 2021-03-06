
function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

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
        else if (event.keyCode == 32 || event.key == 'Space') {
            pause == false ? pause = true : pause = false
            if (pause) {
                // timeout to allow pause message to be rendered first
                setTimeout(() => {
                    clearInterval(intervalID)
                }, 50)
                
            }
            else {
                intervalID = setInterval(() => {
                    requestAnimationFrame(draw)
                }, 10)
            }
        }
    })
    
    document.addEventListener('keyup', (event) => {
        isRight = false
        isLeft = false
        isUp = false
        isDown = false
    })
}

// show/hide start screen info
function toggleInfo() {
    if (intro.classList.contains('hidden')) {
        intro.classList.remove('hidden')
        setTimeout(() => {
            intro.classList.remove('fade')
        }, 5);
        iBtn.src = './images/cancel.svg'
    }
    else { 
        iBtn.src = './images/info.svg' 
        intro.classList.add('fade')
        setTimeout(() => {
            intro.classList.add('hidden')
        }, 600);
    }
}

// Fade from screen to another
function transitionScreen() {
    startScreen.classList.add('fade')
    setTimeout(() => {
        startScreen.classList.add('hidden')
    }, 1000)

    game.classList.remove('hidden')
    setTimeout(() => {
        document.querySelector('h1').classList.add('shrink')
        game.classList.remove('fade')
    }, 1100)
}

function endScreen() {
    game.classList.add('fade')
    setTimeout(() => {
        game.classList.add('hidden')
    }, 800);

    setTimeout(() => {
        end.classList.remove('hidden')
    }, 1200);
    end.classList.remove('fade')
}

function focusName() {
    playerName.focus()
}

