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
    movimientoFantasma1();
    movimientoFantasma2();
    movimientoFantasma3();
    puntosCambiar();
    collisionWithMap();
    prueba();

    if (action.pause === true)
    {
        gameState = State.GAME_STOP;
    }
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

function prueba()
{
    for (let i = 0; i < puntos.length; i++)
    {
        if (puntos[i].isCollisionWithPlayer == true)
        {
            puntos[i].colTile = 0;
            puntos[i].filTile = 16;
        }
    }
}


function playerMovement()
{
    if (action.moveLeft === true)
    {
        sprites[0].xPos -= 3;
        sprites[0].direction = Direction.LEFT;
        sprites[0].colTile = 1;
        sprites[0].filTile = 15;
        sprites[0].speed = 5;
    }
    else if (action.moveRight === true)
    {
        sprites[0].xPos += 3;
        sprites[0].direction = Direction.RIGHT;
        sprites[0].colTile = 1;
        sprites[0].filTile = 14;
    }
    else if (action.moveUp === true)
    {
        sprites[0].yPos -= 3;
        sprites[0].direction = Direction.UP;
        sprites[0].colTile = 1;
        sprites[0].filTile = 13;
    }
    else if (action.moveDown === true)
    {
        sprites[0].yPos += 3;
        sprites[0].direction = Direction.DOWN;
        sprites[0].colTile = 1;
        sprites[0].filTile = 12;
    }
}

function movimientoFantasma1()
{
    let numero;
    
    numero = getRandomInt(4);
    
    if (numero == 0)
    {
        //DOWN
        sprites[1].yPos += 3
        sprites[1].direction = Direction.UP 
        sprites[1].colTile = 0;
        sprites[1].filTile = 0;
    }
    else if (numero == 1)
    {
        //UP
        sprites[1].yPos -= 3
        sprites[1].direction = Direction.DOWN 
        sprites[1].colTile = 0;
        sprites[1].filTile = 1;
        
    }
    else if (numero == 2)
    {
        //RIGHT
        sprites[1].xPos += 3
        sprites[1].direction = Direction.UP 
        sprites[1].colTile = 0;
        sprites[1].filTile = 2;
    }
    else if (numero == 3)
    {
        //LEFT
        sprites[1].xPos -= 3
        sprites[1].direction = Direction.UP 
        sprites[1].colTile = 0;
        sprites[1].filTile = 3;
    }
}

function movimientoFantasma2()
{
    let numero;
    
    numero = getRandomInt(4);
    
    if (numero == 0)
    {
        //DOWN
        sprites[2].yPos += 3
        sprites[2].direction = Direction.UP 
        sprites[2].colTile = 0;
        sprites[2].filTile = 4;
    }
    else if (numero == 1)
    {
        //UP
        sprites[2].yPos -= 3
        sprites[2].direction = Direction.DOWN 
        sprites[2].colTile = 0;
        sprites[2].filTile = 5;
        
    }
    else if (numero == 2)
    {
        //RIGHT
        sprites[2].xPos += 3
        sprites[2].direction = Direction.UP 
        sprites[2].colTile = 0;
        sprites[2].filTile = 6;
    }
    else if (numero == 3)
    {
        //LEFT
        sprites[2].xPos -= 3
        sprites[2].direction = Direction.UP 
        sprites[2].colTile = 0;
        sprites[2].filTile = 7;
    }
}

function movimientoFantasma3()
{
    let numero;
    
    numero = getRandomInt(4);
 
    if (numero == 0)
    {
        //DOWN
        sprites[3].yPos += 3
        sprites[3].direction = Direction.UP 
        sprites[3].colTile = 0;
        sprites[3].filTile = 8;
    }
    else if (numero == 1)
    {
        //UP
        sprites[3].yPos -= 3
        sprites[3].direction = Direction.DOWN 
        sprites[3].colTile = 0;
        sprites[3].filTile = 9;
        
    }
    else if (numero == 2)
    {
        //RIGHT
        sprites[3].xPos += 3
        sprites[3].direction = Direction.UP 
        sprites[3].colTile = 0;
        sprites[3].filTile = 10;
    }
    else if (numero == 3)
    {
        //LEFT
        sprites[3].xPos -= 3
        sprites[3].direction = Direction.UP 
        sprites[3].colTile = 0;
        sprites[3].filTile = 11;
    }
}