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
    prueba();
    updatePlayer();
    updateDirection(player);

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


function playerMovement()
{
    if (action.moveLeft === true)
    {
        sprites[407].xPos -= 3;
        sprites[407].direction = Direction.LEFT;
        sprites[407].colTile = 1;
        sprites[407].filTile = 15;
        sprites[407].speed = 5;
    }
    else if (action.moveRight === true)
    {
        sprites[407].xPos += 3;
        sprites[407].direction = Direction.RIGHT;
        sprites[407].colTile = 1;
        sprites[407].filTile = 14;
    }
    else if (action.moveUp === true)
    {
        sprites[407].yPos -= 3;
        sprites[407].direction = Direction.UP;
        sprites[407].colTile = 1;
        sprites[407].filTile = 13;
    }
    else if (action.moveDown === true)
    {
        sprites[407].yPos += 3;
        sprites[407].direction = Direction.DOWN;
        sprites[407].colTile = 1;
        sprites[407].filTile = 12;
    }
    

}

function prueba()
{
    let fila; let columna;
    if (sprites[407].xPos % 40 == 0 && sprites[407].yPos % 40 == 0)
    {
        columna = sprites[407].xPos / 40;
        fila = sprites[407].yPos / 40;
    }      
}

//Función que actualiza el personaje
function updatePlayer()
{
    const player = sprites[Type.PLAYER];
    const state = player.direction;

    //Aumentamos el contador de tiempo entre frames
    player.animLagCounter++;

    switch (state)
    {
        case Direction.UP:
           
            //Cambiamos de frame cuando el lag de animación alcanza animSpeed
            if (player.animLagCounter === player.animSpeed)
            {
                player.frameCounter++;
                player.animLagCounter = 0;
            }
           
            if (player.frameCounter === player.numberOfFrames)
            {
                //Si hemos llegado al máximo de frames reiniciamos el contador (animación cíclica)
                player.frameCounter = 0;
                //Aquí pasaríamos al estado OFF tocaría eliminar vidas, etc...
            }
                         
            break;

            case Direction.DOWN:
           
            //Cambiamos de frame cuando el lag de animación alcanza animSpeed
            if (player.animLagCounter === player.animSpeed)
            {
                player.frameCounter++;
                player.animLagCounter = 0;
            }
           
            if (player.frameCounter === player.numberOfFrames)
            {
                //Si hemos llegado al máximo de frames reiniciamos el contador (animación cíclica)
                player.frameCounter = 0;
                //Aquí pasaríamos al estado OFF tocaría eliminar vidas, etc...
            }
                         
            break;

            case Direction.RIGHT:
           
            //Cambiamos de frame cuando el lag de animación alcanza animSpeed
            if (player.animLagCounter === player.animSpeed)
            {
                player.frameCounter++;
                player.animLagCounter = 0;
            }
           
            if (player.frameCounter === player.numberOfFrames)
            {
                //Si hemos llegado al máximo de frames reiniciamos el contador (animación cíclica)
                player.frameCounter = 0;
                //Aquí pasaríamos al estado OFF tocaría eliminar vidas, etc...
            }
                         
            break;

            case Direction.LEFT:
           
            //Cambiamos de frame cuando el lag de animación alcanza animSpeed
            if (player.animLagCounter === player.animSpeed)
            {
                player.frameCounter++;
                player.animLagCounter = 0;
            }
           
            if (player.frameCounter === player.numberOfFrames)
            {
                //Si hemos llegado al máximo de frames reiniciamos el contador (animación cíclica)
                player.frameCounter = 0;
                //Aquí pasaríamos al estado OFF tocaría eliminar vidas, etc...
            }
                         
            break;
    }
}

function updateDirection(player)
{
    //Incrementamos el tiempo para cambio de dirección según el tiempo transcurrido
    player.timeChange += lag;

    if (player.timeChange > player.minTimeChange)
    {
        //Reseteamos el contador
        player.timeChange = 0;

        //Actualizamos el tiempo de cambio de dirección aleatoriamente, entre 1 y 6 segundos (números enteros)
        player.minTimeChange = // A rellenar

        selectRandomDirection(player); //Nueva dirección aleatoria
       
    }
}