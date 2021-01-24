window.onload = () => {
    intro.classList.add('hidden')
    iBtn.addEventListener('click', () => {
        toggleInfo()
    })
}

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

    // render health symbols
    for(let i = 0; i < snake.health; i++) {
        ctx.drawImage(healthImg, 900 + i * 50, 550) 
    }
    // draw and move snake
    snake.drawSnake(snake.x, snake.y)
    // snake.checkStatus() 
    snake.checkStatus()
    // generate and render items
    drawAllObstacles() 
}

// Loop through all items and run their methods
function drawAllObstacles() {
    for (let i = 0; i < obstacleArr.length; i++) {
        for (let j = 0; j < obstacleArr[i].coords.length; j++) {
            obstacleArr[i].drawObstacle(obstacleArr[i].img, obstacleArr[i].coords[j].x, obstacleArr[i].coords[j].y)
            obstacleArr[i].collision()
            obstacleArr[i].generateObstacle() 
        }
    } 
   for (let i = 0; i < foodArr.length; i++) {
       for(let j = 0; j < foodArr[i].coords.length; j++) {
           foodArr[i].drawFood(foodArr[i].img, foodArr[i].coords[j].x, foodArr[i].coords[j].y)
           foodArr[i].foodCollision()
           foodArr[i].generateFood()
       }
   }
   for (let i = 0; i < monkey.coords.length; i++) {
        monkey.drawMonkey(monkey.coords[i].x, monkey.coords[i].y)
        monkey.monkeyCollision()
        monkey.generateMonkey()
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
    gorilla.coords = [{ x: 180, y: 120 }]
    apple.coords = [{ x: 750, y: 390 }]
    blueberry.coords = [{ x: 900, y: 400 }]
    parrot.coords = [{ x: 300, y: 100 }]
    narwhal.coords = [{ x: 550, y: 400 }]
    dog.coords = [{ x: 700, y: 400 }]
    sloth.coords = [{ x: 100, y: 200 }]
    monkey.coords = [{ x: 780, y: 150 }]
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    document.querySelector('#end').classList.add('hidden')
}
