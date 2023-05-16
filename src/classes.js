class Sprite
{
    constructor(id, xPos, yPos, speed, xSize, ySize, xOffset, yOffset, colTile, filTile, animSpeed, animLagCounter, direction, isCollisionWithPlayer)
    {
        this.id             = id;                     //Tipo de Sprite
        this.xPos           = xPos;                   //Posición inicial en X
        this.yPos           = yPos;                   //Posición inicial en Y
        this.speed          = speed;                  //Velocidad del sprite
        this.xSize          = xSize;                  //Tamaño total del sprite en X
        this.ySize          = ySize;                  //Tamaño total del sprite en Y
        this.xOffset        = xOffset;                //
        this.yOffset        = yOffset;                //
        this.colTile        = colTile;                //Columna de inicio
        this.filTile        = filTile;                //Fila de inicio
        this.animSpeed      = animSpeed;              //Velocidad de cambio de frame
        this.animLagCounter = animLagCounter;         //Velocidad de cambio de frame
        this.direction      = direction;              //Direccion del sprite
        this.isCollisionWithPlayer = isCollisionWithPlayer
    }  
}

class Punto
{
    punto(id, xPos, yPos, xSize, ySize)
    {
        this.id = id;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xSize = xSize;
        this.ySize = ySize;
        this.colTile  = colTile;                //Columna de inicio
        this.filTile  = filTile;                //Fila de inicio
    }
}




