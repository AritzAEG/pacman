function calculateCollision()
{
    //Colisión de los sprites con los bordes de la pantalla
    for (let i = 0; i < sprites.length; ++i)
    {
        const sprite = sprites[i];
        calculateCollisionWithBorders(sprite);       
    }

    //Calculamos colision del player con cada uno de los sprites
    for (let i = 0; i <= puntos.length; ++i)
    {
        const player = sprites[0];      
        playerPoints(player);
    }
    
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