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

function collision()
{
    for (i = 0; i < 21; ++i)
    {
        for (j = 0; j < 36; j++)
        {
           
        }
    }
}