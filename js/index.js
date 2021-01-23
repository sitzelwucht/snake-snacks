
// new snake object with 3 health, 0 points
const snake = new Snake(20, 350, 3, 0)
const gorilla = new Obstacle([{ x: 80, y: 20}])
const apple = new FoodItem([{ x: 900, y: 400}])

document.querySelector('#start').addEventListener('click', () => {
    screenFade()
    startGame()
    startObstacles()
    // const drawFirstApple = (() => {
    //     let executed = false;
    //     return () => {
    //         if (!executed) {
    //             executed = true;
    //             startFood()
    //         }
    //     }
    // })()

    // drawFirstApple()
})

document.querySelector('#replay').addEventListener('click', () => {
    screenFade()
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
}


function drawApple() {
    apple.drawFood(appleImg, 240)
}

function drawGorilla() {
    gorilla.drawObstacle(gorillaImg, 200)
}


function startGame() { 
    handleKeypress()
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 10)
    
}

function startFood() {
    foodInterval = setInterval(() => {
        requestAnimationFrame(drawApple)
    }, 10)
}

function startObstacles() {
    obstacleInterval = setInterval(() => {
        requestAnimationFrame(drawGorilla)
    }, 10)
} 

