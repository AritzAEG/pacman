class Sprite
{
    constructor(id, xPos, yPos, speed, xSize, ySize, xOffset, yOffset, colTile, filTile, animSpeed, animLagCounter, direction, isCollisionWithPlayer, xSizeCol, ySizeCol, xOffsetCol, yOffsetCol)
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
        this.isCollisionWithPlayer = isCollisionWithPlayer //Colision para los puntos
        this.xSizeCol       = xSizeCol;               //Tamaño en X para colisiones
        this.ySizeCol       = ySizeCol;               //Tamaño en Y para colisiones
        this.xOffsetCol     = xOffsetCol;             //Offset en X para colisiones (Respecto de xPos)
        this.yOffsetCol     = yOffsetCol;             //Offset en Y para colisiones (Respecto de yPos)
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




