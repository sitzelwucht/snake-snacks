# SNAKE SNACKS GAME

![start](https://user-images.githubusercontent.com/61108220/105633264-d7c35300-5e57-11eb-85ef-48e5ad117293.png)

## Description

The goal of this game is to avoid the various appearing enemy creatures and grab snacks, which the player is flying amongst.

#### How to play ####

The player controls a snake character using the 4 arrow keys of the keyboard. Player initially has 3 lives, and upon colliding with an obstacle, 1-3 healthpoint(s) will be deducted depending on the obstacle (the obstacle type **monkey** can cause any one of 4 random events to happen to the player: reduce or add health, reduce or add points).

Correspondingly, for each snack, points are awarded depending on the snack. The objective is to get as many points as possible before the health count goes down to 0.
When this occurs, the game ends and a gameover screen is shown with 2 different options to proceed.

![gamescreen](https://user-images.githubusercontent.com/61108220/105615434-e74b8900-5dd0-11eb-95d3-fe447e9809fd.png)

## MPV

Basic functionality including: one type of enemy items and food items, possibility to score points and lose game.

## Backlog

- ~~Different types of enemies that move faster or cause different amounts of damage~~
- ~~Different types of food items that restore varying number of health points~~
- Add option to enter your name and save score to leaderboard and save it to localstorage
- Add boss enemy when a certain score is reached during the game

## Data Sructure

#### Classes:
1. Snake (Player)
- ```drawSnake()```
- ```checkStatus()```
- ```dropSnake()```

2. Food
- ```drawFood()```
- ```generateFood()```
- ```foodCollision()```

3. Obstacle
- ```drawObstacle()```
- ```generateObstacle()```
- ```collision()```

4. Monkey
- ```drawMonkey()```
- ```generateMonkey()```
- ```monkeyCollision()```


## States & Transitions

- Intro screen
- Game screen
- End screen




