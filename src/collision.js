//Cálculo de colisión con los bordes de la pantalla
function calculateCollisionWithBorders()
{
    const player = sprites[Type.PLAYER];

    //Hemos llegado a la esquina izquierda
    if (player.xPos < 0)
        player.xPos = 0;

    //Hemos llegado a la esquina derecha
    else if (player.xPos > canvas.width - player.xSize)
        player.xPos = canvas.width - player.xSize;

    //Hemos llegado a la esquina inferior
    else if (player.yPos > canvas.height - player.ySize)
        player.yPos = canvas.height - player.ySize

    //Hemos llegado a la esquina superior
    else if (player.yPos < 0)
        player.yPos = 0;
}

function puntosCambiar()
{
    for (let i = 0; i < puntos.length; i++)
    {
        puntos[i].isCollisionWithPlayer = false;
    }

    for (let i = 0; i < puntos.length; i++)
    {

        if (puntos[i].xPos >= sprites[0].xPos && puntos[i].yPos <= sprites[0].yPos && puntos[i].xPos + 40 >= sprites[0].xPos + 40 &&  sprites[0].yPos + 40 <= puntos[i].yPos + 40)
        {            
            puntos[i].isCollisionWithPlayer = true;
            console.log(puntos[i].xPos, puntos[i].yPos, puntos[i].xPos + 40, puntos[i].yPos + 40)
            console.log(sprites[0].xPos, sprites[0].yPos, sprites[0].xPos + 40, sprites[0].yPos + 40)
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