function update()
{
    //Change what the game is doing based on the game state
    switch(gameState)
    {
        case State.GAME_LOAD:
            console.log("Loading assets...");
            break;

        case State.GAME_START:
            gameStart();
            break;

        case State.GAME_PLAY:
            gamePlay();
            
            collision();
            break;

        case State.GAME_STOP:
            gameStop();
            break;

        case State.GAME_OVER:
            gameOver();
            break;
    }   
}

function gameStart()
{
    if (action.enter === true)
    {
        gameState = State.GAME_PLAY;
    }
}

function gamePlay()
{
    playerMovement();
    //Collision.js
    calculateCollisionWithBorders();
}

function gameStop()
{
    if (action.resume === true)
    {
        gameState = State.GAME_PLAY;
    }
}

function gameOver()
{
    if (action.jump === true)
    {
        gameState = State.GAME_START;
    }
}


function playerMovement()
{
    if (action.moveLeft === true)
    {
        sprites[0].xPos--;
        sprites[0].direction = Direction.LEFT;
        sprites[0].colTile = 1;
        sprites[0].filTile = 15;
    }
    else if (action.moveRight === true)
    {
        sprites[0].xPos++;
        sprites[0].direction = Direction.RIGHT;
        sprites[0].colTile = 1;
        sprites[0].filTile = 14;
    }
    else if (action.moveUp === true)
    {
        sprites[0].yPos--;
        sprites[0].direction = Direction.UP;
        sprites[0].colTile = 1;
        sprites[0].filTile = 13;
    }
    else if (action.moveDown === true)
    {
        sprites[0].yPos++;
        sprites[0].direction = Direction.DOWN;
        sprites[0].colTile = 1;
        sprites[0].filTile = 12;
    }
}