# SNAKE SNACKS Game

![startscreen](https://user-images.githubusercontent.com/61108220/105615426-ce42d800-5dd0-11eb-939f-75a9af0cbd62.png)

## Description

In this game, the player controls a snake character using the 4 arrow keys. The goal is to avoid the appearing enemy creatures and eat snacks, which the player is flying amongst. Player has 3 lives, and upon colliding with an enemy, healthpoint(s) will be deducted depending on the enemy. Correspondingly, for each snack points are awarded depending on the snack. The objective is to get as many points as possible before the health count goes down to 0.
When this occurs, the game ends and a game over screen is shown with 2 different options to proceed.

![gamescreen](https://user-images.githubusercontent.com/61108220/105615434-e74b8900-5dd0-11eb-95d3-fe447e9809fd.png)

## MPV

Basic functionality including: one type of enemy items and food items, possibility to score points and lose game.

## Backlog

- ~~Different types of enemies that move faster or cause different amounts of damage~~
- ~~Different types of food items that restore varying number of health points~~
- Add option to enter your name and save score to leaderboard and save it to localstorage

## Data Sructure

#### Classes:
1. Player
methods: 
- ```drawSnake()```
- ```checkStatus()```

2. Food
methods:
- ```drawFood()```
- ```generateFood()```
- ```foodCollision()```

3. Obstacle
methods:
- ```drawObstacle()```
- ```generateObstacle()```
- ```collision()```


## States & Transitions

- Intro screen
- Game screen
- End screen




