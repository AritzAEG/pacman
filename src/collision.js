function calculateCollision()
{
    //Colisión de los sprites con los bordes de la pantalla
    for (let i = 0; i < sprites.length; ++i)
    {
        const sprite = sprites[i];
        calculateCollisionWithBorders(sprite);       
    }

    //Calculamos colision del player con los puntos dibujados en el mapa para que se den la vuelta
    for (let i = 0; i <= puntos.length; ++i)
    {
        const player = sprites[0];      
        playerPoints(player);
    }

    for (let i = 0; i < sprites.length; ++i)
    {
        const player = sprites[0];
        colisionWithFruit(player)
    }

    for (let i = 0; i < sprites.length; ++i)
    {
        const player = sprites[0];
        colisionWithGhost(player)
    }

    calculateCollisionWithMap();
}


//Cálculo de colisión con los bordes de la pantalla
function calculateCollisionWithBorders(sprite)
{
    //Hemos llegado a la esquina izquierda
    if (sprite.xPos < 0)
        sprite.xPos = 0;

    //Hemos llegado a la esquina derecha
    else if (sprite.xPos > canvas.width - sprite.xSize)
        sprite.xPos = canvas.width - sprite.xSize;

    //Hemos llegado a la esquina inferior
    else if (sprite.yPos > canvas.height - sprite.ySize)
        sprite.yPos = canvas.height - sprite.ySize

    //Hemos llegado a la esquina superior
    else if (sprite.yPos < 0)
        sprite.yPos = 0;
}

function playerPoints(player)
{
    for (let i = 0; i < puntos.length; i++)
    {
        puntos[i].isCollisionWithPlayer = false;
    }

    for (let i = 0; i < puntos.length; i++)
    {

        //Datos del player
        const x1 = player.xPos + player.xOffsetCol;
        const y1 = player.yPos + player.yOffsetCol;
        const w1 = player.xSizeCol;
        const h1 = player.ySizeCol;

        //Datos del otro sprite
        const x2 = puntos[i].xPos + puntos[i].xOffsetCol;
        const y2 = puntos[i].yPos + puntos[i].yOffsetCol;
        const w2 = puntos[i].xSizeCol;
        const h2 = puntos[i].ySizeCol;
   
        const isCollision = rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2)

        if (isCollision) 
        {
            puntos[i].isCollisionWithPlayer = true;       
        }
    }    
}

function colisionWithFruit(player)
{
    for (let i = 4; i <= 5; i++)
    {
        puntos[i].isCollisionWithPlayer = false;
    }

    for (let i = 4; i <= 5; i++)
    {
        //Datos del player
        const x1 = player.xPos + player.xOffsetCol;
        const y1 = player.yPos + player.yOffsetCol;
        const w1 = player.xSizeCol;
        const h1 = player.ySizeCol;

        //Datos del otro sprite
        const x2 = sprites[i].xPos + sprites[i].xOffsetCol;
        const y2 = sprites[i].yPos + sprites[i].yOffsetCol;
        const w2 = sprites[i].xSizeCol;
        const h2 = sprites[i].ySizeCol;
   
        const isCollision = rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2)

        if (isCollision) 
        {
            console.log(sprites[i].isCollisionWithPlayer)
            sprites[i].isCollisionWithPlayer = true;    
        }
    }
}

function colisionWithGhost(player)
{
    for (let i = 1; i <= 3; i++)
    {
        sprites[i].isCollisionWithPlayer = false;
    }

    for (let i = 1; i <= 3; i++)
    {

        //Datos del player
        const x1 = player.xPos + player.xOffsetCol;
        const y1 = player.yPos + player.yOffsetCol;
        const w1 = player.xSizeCol;
        const h1 = player.ySizeCol;

        //Datos del otro sprite
        const x2 = sprites[i].xPos + sprites[i].xOffsetCol;
        const y2 = sprites[i].yPos + sprites[i].yOffsetCol;
        const w2 = sprites[i].xSizeCol;
        const h2 = sprites[i].ySizeCol;
   
        const isCollision = rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2)

        if (isCollision) 
        {
            console.log("YUJU")
            sprites[i].isCollisionWithPlayer = true;       
        }
    }
}

function collisionWithMap()
{
    const num_fil = level1Colisions.length;
    const num_col = level1Colisions[0].length;
   
    for (i = 0; i < num_fil; ++i)
    {
        for (j = 0; j < num_col; ++j)
        {
            if (level1Colisions[i][j] == 6)
            {
                
            }
        }
    }
}

function isCollisionWithTile(map, xPos, Ypos)
{
    let collision;
    const id = getMapTileId(map, xPos, Ypos);

    if (id == 1)
    {
        collision = true;
    }   
    else
    {
        collision = false;
    }    

    return collision;
}

function getMapTileId(map, xPos, Ypos)
{
    const fil = Math.floor(yPos / BRICK_SIZE);
    const col = Math.floor(xPos / BRICK_SIZE);

    return map[fil][col]
}

function calculateCollisionWithMap()
{
    const player = sprites[Type.PLAYER]


    switch(player.direction)
    {
        case Direction.RIGHT:

        //Primera colision en (xPos + xSize - 1, yPos)
        const xPos = player.xPos + player.xOffsetCol + player.xSizeCol - 1;
        let yPos = player.yPos + player.yOffsetCol;
        const isCollision1 = isCollisionWithTile(level1Colisions, xPos, yPos);

        yPos = player.yPos + player.yOffsetCol + BRICK_SIZE;
        const isCollision2 = isCollisionWithTile(level1Colisions, xPos, yPos);

        yPos = player.yPos + player.yOffsetCol + player.ySizeCol - 1;
        const isCollision3 = isCollisionWithTile(level1Colisions, xPos, yPos);

        const isCollision = isCollision1 || isCollision2 || isCollision3;

        if (isCollision)
        {
            const xOverlap = Math.floor(xPos) % BRICK_SIZE + 1
            player.xPos -= xOverlap;
        }

        break;
        /*
        case Direction.LEFT:

        //Primera colision en (xPos + xSize - 1, yPos)
        const xPos2 = player.xPos - player.xOffsetCol - player.xSizeCol - 1;
        let yPos2 = player.yPos - player.yOffsetCol;
        const isCollision4 = isCollisionWithTile(level1Colisions, xPos2, yPos2);

        yPos2 = player.yPos + player.yOffsetCol + BRICK_SIZE;
        const isCollision5 = isCollisionWithTile(level1Colisions, xPos2, yPos2);

        yPos2 = player.yPos + player.yOffsetCol + player.ySizeCol - 1;
        const isCollision6 = isCollisionWithTile(level1Colisions, xPos2, yPos2);

        const isCollision7 = isCollision4 || isCollision5 || isCollision6;

        if (isCollision7)
        {
            const xOverlap2 = Math.floor(xPos2) % BRICK_SIZE + 1
            player.xPos -= xOverlap2;
        }

        break;

        case Direction.UP:

        //Primera colision en (xPos + xSize - 1, yPos)
        const xPos3 = player.xPos + player.xOffsetCol + player.xSizeCol - 1;
        let yPos3 = player.yPos + player.yOffsetCol;
        const isCollision8 = isCollisionWithTile(level1Colisions, xPos3, yPos3);

        yPos3 = player.yPos + player.yOffsetCol + BRICK_SIZE;
        const isCollision9 = isCollisionWithTile(level1Colisions, xPos3, yPos3);

        yPos3 = player.yPos + player.yOffsetCol + player.ySizeCol - 1;
        const isCollision10 = isCollisionWithTile(level1Colisions, xPos3, yPos3);

        const isCollision11 = isCollision8 || isCollision9 || isCollision10;

        if (isCollision11)
        {
            xOverlap3 = Math.floor(xPos3) % BRICK_SIZE + 1
            player.xPos -= xOverlap3;
        }

        break;

        case Direction.DOWN:

        //Primera colision en (xPos + xSize - 1, yPos)
        const xPos4 = player.xPos + player.xOffsetCol + player.xSizeCol - 1;
        yPos4 = player.yPos + player.yOffsetCol;
        const isCollision12 = isCollisionWithTile(level1Colisions, xPos4, yPos4);

        yPos4 = player.yPos + player.yOffsetCol + BRICK_SIZE;
        const isCollision13 = isCollisionWithTile(level1Colisions, xPos4, yPos4);

        yPos4 = player.yPos + player.yOffsetCol + player.ySizeCol - 1;
        const isCollision14 = isCollisionWithTile(level1Colisions, xPos4, yPos4);

        const isCollision15 = isCollision12 || isCollision13 || isCollision14;

        if (isCollision15)
        {
            const xOverlap4 = Math.floor(xPos4) % BRICK_SIZE + 1
            player.xPos -= xOverlap4;
        }

        break;
        */
    }
}

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) 
{
    let collisionX;
    let collisionY;

    if (x2 > x1)
        collisionX = (x2 - x1) < w1;
    else
        collisionX = (x1 - x2) < w2;

    if (y2 > y1)
        collisionY = (y2 - y1) < h1;
    else
        collisionY = (y1 - y2) < h2;
  
    return collisionX && collisionY;
}