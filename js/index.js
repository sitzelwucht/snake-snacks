window.onload = () => {
    intro.classList.add('hidden')
    handleKeypress()
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

document.querySelector('#submit-score').addEventListener('click', (e) => {
    e.preventDefault()
    submitScore()
})
// MAIN DRAW FUNCTION

function draw() {
    ctx.drawImage(bgImg, 0, 0)
    ctx.font = '20px monospace'
    ctx.fillStyle = 'white'
    ctx.fillText('Score: '+ snake.points, 35, 580)
    ctx.fillText('Health:', 800, 580)

    // render health symbols
    for(let i = 0; i < snake.health; i++) {
        ctx.drawImage(healthImg, 900 + i * 35, 550) 
    }
    snake.drawSnake(snake.x, snake.y)
    snake.checkStatus()
    drawAllObstacles()

    if (pause) {
        ctx.font = '60px monospace'
        ctx.fillStyle = 'white'
        ctx.fillText('P A U S E D', (canvas.width / 2) - 200, canvas.height / 2)
        ctx.font = '30px monospace'
        ctx.fillStyle = 'white'
        ctx.fillText('press space to resume', (canvas.width / 2) - 190, (canvas.height / 2) + 75)
    }
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
        intervalID = setInterval(() => {
            requestAnimationFrame(draw)
        }, 10)
}

function gameOver() {
    clearInterval(intervalID)
    if(snake.points < 0) {
         score.style.color = 'rgb(127, 179, 214)'
    }
    else {
        score.style.color = 'rgb(153, 224, 125)'
    }
    score.innerHTML = snake.points
    endScreen()
}

function clearGame() {
    snake.health = 3
    snake.points = 0
    snake.x = 10
    snake.y = 350
    gorilla.coords = [{ x: 180, y: 120 }]
    parrot.coords = [{ x: 300, y: 100 }]
    narwhal.coords = [{ x: 550, y: 400 }]
    dog.coords = [{ x: 700, y: 400 }]
    sloth.coords = [{ x: 100, y: 200 }]
    monkey.coords = [{ x: 780, y: 150 }]
    apple.coords = [{ x: 750, y: 390 }]
    blueberry.coords = [{ x: 900, y: 400 }]
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    document.querySelector('form').classList.remove('hidden')
    scoreList.classList.add('hidden')
    document.querySelector('#end').classList.add('hidden') 
}

function submitScore() {
    let name = document.querySelector('#name')
    let scoreItem = {
        name: name.value,
        score: snake.points
    }
    storageArr.push(scoreItem)
    localStorage.setItem('scoreboard', JSON.stringify(storageArr))
    name.value = ''
    displayScores()
}

function displayScores() {
    document.querySelector('form').classList.add('hidden')
    let sorted = storageArr.sort((a, b) => {
        if (a.score < b.score) return 1
        else if (a.score > b.score)
        return -1
        else return 0
    })

    let sorted10 = sorted.length > 10 ? sorted.splice(0, 10) : sorted

     sorted10.forEach(item => {
        let li = document.createElement('li')
        li.innerHTML = `${item.name}: ${item.score}`
        scoreList.appendChild(li)
    })
    scoreList.classList.remove('hidden')
}