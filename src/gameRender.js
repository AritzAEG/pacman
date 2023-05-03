function render()
{
    //Change what the game is doing based on the game state
    switch(gameState)
    {
        case State.GAME_LOAD:
            break;

        case State.GAME_START:
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            gamestart();
            break;

        case State.GAME_PLAY:
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            gameplay();
            break;

        case State.GAME_STOP:
            gamestop();
            break;

        case State.GAME_OVER:
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            gameover();
            break;

    }
}

function gamestart()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "40px Calibri";
    ctx.fillText("PRESS ENTER TO START THE GAME", 400, 800)
    ctx.drawImage(tileSet1, 500, 280, 300, 300)
}

function gameplay()
{
    if (vidas == 3)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.font = "30px Emulogic";
        ctx.fillText("VIDAS: ", 10, 870)
        ctx.drawImage(tileSet3, 120, 845)
        ctx.drawImage(tileSet3, 160, 845)
        ctx.drawImage(tileSet3, 200, 845)
        ctx.fillStyle = "white";
        ctx.font = "30px Emulogic";
        ctx.fillText("SCORE: " + puntuacion, 600, 870)
        ctx.fillStyle = "white";
        ctx.font = "30px Emulogic";
        ctx.fillText("MAX SCORE:", 1100, 870)
        renderMap();
        drawSprites();
    }
    else if (vidas == 2)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.font = "30px Emulogic";
        ctx.fillText("VIDAS: ", 10, 870)
        ctx.drawImage(tileSet3, 120, 845)
        ctx.drawImage(tileSet3, 160, 845)
        ctx.fillStyle = "white";
        ctx.font = "30px Emulogic";
        ctx.fillText("SCORE: " + puntuacion, 600, 870)
        ctx.fillStyle = "white";
        ctx.font = "30px Emulogic";
        ctx.fillText("MAX SCORE:", 1100, 870)
    } 
    else if (vidas == 1)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.font = "30px Emulogic";
        ctx.fillText("VIDAS: ", 10, 870)
        ctx.drawImage(tileSet3, 120, 845)
        ctx.fillStyle = "white";
        ctx.font = "30px Emulogic";
        ctx.fillText("SCORE: " + puntuacion, 600, 870)
        ctx.fillStyle = "white";
        ctx.font = "30px Emulogic";
        ctx.fillText("MAX SCORE:", 1100, 870)
    }
    
}

function gamestop()
{
    ctx.fillStyle = "white";
    ctx.font = "50px serif";
    ctx.fillText("JUEGO EN PAUSA", 460, 435)
}

function gameover()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "60px Calibri";
    ctx.fillText("SUMARY", 570, 250)
    ctx.fillStyle = "white";
    ctx.font = "30px Calibri";
    ctx.fillText("Total Score: "+ puntuacion, 590, 350)
    ctx.fillText("Vidas Restantes: "+ vidas, 565, 400)
    ctx.fillText("Tiempo Restante: "+ tiempo, 540, 450)
    ctx.fillStyle = "white";
    ctx.font = "40px Calibri";
    ctx.fillText("PRESS SPACE TO START A NEW GAME", 400, 735)
}
//Dibujar mapa
function renderMap()
{
    //Dibujamos el mapa
    const num_fil = level1.length;
    const num_col = level1[0].length;
   
    for (i = 0; i < num_fil; ++i)
    {
        for (j = 0; j < num_col; ++j)
        {
            const xTile = (level1[i][j] - 1) * BRICK_SIZE;
            const yTile = 0;
            const xPos = j * BRICK_SIZE;
            const yPos = i * BRICK_SIZE;

            //Dibujamos el nuevo fotograma del sprite en la posición adecuada
            ctx.drawImage(
                tileSets[Tile.SIZE_40],      //The image file
                xTile, yTile,               //The source x and y position
                BRICK_SIZE, BRICK_SIZE,     //The source height and width
                xPos, yPos,                 //The destination x and y position
                BRICK_SIZE, BRICK_SIZE      //The destination height and width
            );
        }
    }
}

//Dibujamos Sprites
function drawSprites()
{
    for (let i = 0; i < sprites.length; ++i)
    {
        const sprite = sprites[i];
        renderSprite(sprite);
    }
}

function renderSprite(sprite)
{
    //Calculamos la posición del tile de inicio
    const xPosInit = sprite.colTile * SPRITE_SIZE;
    const yPosInit = sprite.filTile * SPRITE_SIZE;

    const xTile = xPosInit;
    const yTile = yPosInit;

    const xPos = Math.floor(sprite.xPos);
    const yPos = Math.floor(sprite.yPos);
    
    //Dibujamos el nuevo fotograma del sprite en la posición adecuada
    ctx.drawImage(
        tileSet2,                    //The image file
        xTile, yTile,               //The source x and y position
        sprite.xSize, sprite.ySize, //The source height and width
        xPos, yPos,                 //The destination x and y position
        sprite.xSize, sprite.ySize  //The destination height and width
    );
}