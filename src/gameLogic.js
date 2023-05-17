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
    console.log(sounds[0]);
    movimientoSprites();
    calculateCollision();
    vueltaFruta();
    vueltaPuntos();
    vidasDown();

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

function vueltaPuntos()
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

function vidasDown()
{
    for (let i = 1; i <= 3; i++)
    {
        if (sprites[i].isCollisionWithPlayer == true)
        {
            vidas = vidas - 1;
        }
    }
}

function vueltaFruta()
{
    for (let i = 4; i <= 5; i++)
    {
        if (sprites[i].isCollisionWithPlayer == true)
        {
            sprites[i].colTile = 0;
            sprites[i].filTile = 16;
        }
    }
}

function movimientoSprites()
{
    const player = sprites[Type.PLAYER];

    if (action.moveLeft === true)
    {
        player.xPos -= 3;
        player.direction = Direction.LEFT;
        player.colTile = 1;
        player.filTile = 15;
        player.speed = 5;
    }
    else if (action.moveRight === true)
    {
        player.xPos += 3;
        player.direction = Direction.RIGHT;
        player.colTile = 1;
        player.filTile = 14;
    }
    else if (action.moveUp === true)
    {
        player.yPos -= 3;
        player.direction = Direction.UP;
        player.colTile = 1;
        player.filTile = 13;
    }
    else if (action.moveDown === true)
    {
        player.yPos += 3;
        player.direction = Direction.DOWN;
        player.colTile = 1;
        player.filTile = 12;
    }

    let numero;
    const fantasma1 = sprites[1];
    
    numero = getRandomInt(4);
    
    if (numero == 0)
    {
        //DOWN
        fantasma1.yPos += 3
        fantasma1.direction = Direction.UP 
        fantasma1.colTile = 0;
        fantasma1.filTile = 0;
    }
    else if (numero == 1)
    {
        //UP
        fantasma1.yPos -= 3
        fantasma1.direction = Direction.DOWN 
        fantasma1.colTile = 0;
        fantasma1.filTile = 1;
        
    }
    else if (numero == 2)
    {
        //RIGHT
        fantasma1.xPos += 3
        fantasma1.direction = Direction.UP 
        fantasma1.colTile = 0;
        fantasma1.filTile = 2;
    }
    else if (numero == 3)
    {
        //LEFT
        fantasma1.xPos -= 3
        fantasma1.direction = Direction.UP 
        fantasma1.colTile = 0;
        fantasma1.filTile = 3;
    }

    let numero2;
    const fantasma2 = sprites[2];
    
    numero2 = getRandomInt(4);
    
    if (numero2 == 0)
    {
        //DOWN
        fantasma2.yPos += 3
        fantasma2.direction = Direction.UP 
        fantasma2.colTile = 0;
        fantasma2.filTile = 4;
    }
    else if (numero2 == 1)
    {
        //UP
        fantasma2.yPos -= 3
        fantasma2.direction = Direction.DOWN 
        fantasma2.colTile = 0;
        fantasma2.filTile = 5;
        
    }
    else if (numero2 == 2)
    {
        //RIGHT
        fantasma2.xPos += 3
        fantasma2.direction = Direction.UP 
        fantasma2.colTile = 0;
        fantasma2.filTile = 6;
    }
    else if (numero2 == 3)
    {
        //LEFT
        fantasma2.xPos -= 3
        fantasma2.direction = Direction.UP 
        fantasma2.colTile = 0;
        fantasma2.filTile = 7;
    }

    let numero3;
    const fantasma3 = sprites[3];
    
    numero3 = getRandomInt(4);
 
    if (numero3 == 0)
    {
        //DOWN
        fantasma3.yPos += 3
        fantasma3.direction = Direction.UP 
        fantasma3.colTile = 0;
        fantasma3.filTile = 8;
    }
    else if (numero3 == 1)
    {
        //UP
        fantasma3.yPos -= 3
        fantasma3.direction = Direction.DOWN 
        fantasma3.colTile = 0;
        fantasma3.filTile = 9;
        
    }
    else if (numero3 == 2)
    {
        //RIGHT
        fantasma3.xPos += 3
        fantasma3.direction = Direction.UP 
        fantasma3.colTile = 0;
        fantasma3.filTile = 10;
    }
    else if (numero3 == 3)
    {
        //LEFT
        fantasma3.xPos -= 3
        fantasma3.direction = Direction.UP 
        fantasma3.colTile = 0;
        fantasma3.filTile = 11;
    }
}