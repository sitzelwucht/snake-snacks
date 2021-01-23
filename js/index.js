
const snake = new Snake(20, 350, 3, 0)
const gorilla = new Obstacle([{ x: 80, y: 20}], 2, 300)
const sloth = new Obstacle([{ x: 100, y: 200}], 1, 75)
const parrot = new Obstacle([{ x: 300, y: 100}], 2.5, 125)
const narwhal = new Obstacle([{ x: 600, y: 400}], 1, 50)

const apple = new FoodItem([{ x: 900, y: 400}], 1, 300)
const blueberry = new FoodItem([{ x: 900, y: 400}], 3, 100)

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
    appleFunction()
    gorillaFunction()
    blueberryFunction()
    slothFunction()
    parrotFunction()
    narwhalFunction()
} 
 
function appleFunction() {
    for (let i = 0; i < apple.coords.length; i++) {
        apple.drawFood(appleImg, apple.coords[i].x, apple.coords[i].y)
        apple.generateFood()
        apple.foodCollision() 
    }
}

function blueberryFunction() {
    for (let i = 0; i < blueberry.coords.length; i++) {
        blueberry.drawFood(blueberryImg, blueberry.coords[i].x, blueberry.coords[i].y)
        blueberry.foodCollision()
        blueberry.generateFood()
    }
}

function gorillaFunction() {
    for (let i = 0; i < gorilla.coords.length; i++) {
        gorilla.drawObstacle(gorillaImg, gorilla.coords[i].x, gorilla.coords[i].y) 
        gorilla.collision()
        gorilla.generateObstacle()
    }
}

function slothFunction() {
    for (let i = 0; i < sloth.coords.length; i++) {
        sloth.drawObstacle(slothImg, sloth.coords[i].x, sloth.coords[i].y)
        sloth.collision()
        sloth.generateObstacle()
    }

}

function parrotFunction() {
    for (let i = 0; i < parrot.coords.length; i++) {
        parrot.drawObstacle(parrotImg, parrot.coords[i].x, parrot.coords[i].y)
        parrot.collision()
        parrot.generateObstacle()
    }
}

function narwhalFunction() {
    for (let i = 0; i < narwhal.coords.length; i++) {
        narwhal.drawObstacle(narwhalImg, narwhal.coords[i].x, narwhal.coords[i].y)
        narwhal.collision()
        narwhal.generateObstacle()
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
