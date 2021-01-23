
const snake = new Snake(20, 350, 3, 0)
const gorilla = new Obstacle([{ x: 80, y: 20}])
const apple = new FoodItem([{ x: 900, y: 400}])

document.querySelector('#start').addEventListener('click', () => {
    transitionScreen()
    startGame()
})

document.querySelector('#replay').addEventListener('click', () => {
    clearGame()
    transitionScreen()
    startGame()
})

// MAIN DRAW FUNCTION

function draw() {
    ctx.drawImage(bgImg, 0, 0)
    ctx.font = '20px monospace'
    ctx.fillStyle = 'white'
    ctx.fillText('Score: '+ snake.points, 35, 580)
    ctx.fillText('Health:', 780, 580)

    for(let i = 0; i < snake.health; i++) {
        ctx.drawImage(healthImg, 900 + i * 50, 550)
    }

    if (isDown && (snake.y < canvas.height - 60)) {
        snake.y += 3
    }
    if (isUp && (snake.y > 0)) {
        snake.y -= 3
    }
    if (isLeft && (snake.x > 0)) {
        snake.x -= 3
    }
    if (isRight && (snake.x < canvas.width - 60)) {
        snake.x += 3
    }

    snake.drawSnake(snake.x, snake.y)
    snake.checkStatus()
    drawGorilla()
    drawApple()
}


function drawApple() {
    for (let i = 0; i < apple.coords.length; i++) {
        apple.drawFood(appleImg, apple.coords[i].x, apple.coords[i].y)
        apple.collision()
        apple.coords[i].x--

        if (apple.coords[i].x == 175) {
            apple.coords.push({x: canvas.width + 30, y: -Math.floor(Math.random() * 300) + 325})
        }
        if (apple.coords[i].x <= 0) {
            apple.coords.splice(i, 1)
        }
    }
}

function drawGorilla() {
    for (let i = 0; i < gorilla.coords.length; i++) {
        gorilla.drawObstacle(gorillaImg, gorilla.coords[i].x, gorilla.coords[i].y)
        gorilla.collision()
        gorilla.coords[i].x--

        if (gorilla.coords[i].x == 300) {
            gorilla.coords.push({x: canvas.width + 30, y: -Math.floor(Math.random() * 300) + 300}) 
            }
        if (gorilla.coords[i].x <= 0) {
            gorilla.coords.splice(i, 1)
            snake.collided = false

        }
    }
    
}



function startGame() { 
    handleKeypress()
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 10)
}

function gameOver() {
    clearInterval(intervalID)
    document.querySelector('#final-score').innerHTML = snake.points
    endScreen()
}

function clearGame() {
    snake.health = 3
    snake.points = 0
    snake.x = 20
    snake.y = 350
    gorilla.coords = [{ x: 80, y: 20}]
    apple.coords = [{ x: 900, y: 400}]
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    document.querySelector('#end').classList.add('hidden')
}
