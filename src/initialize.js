// Funciones de inicialización
window.onload = init;

function init()
{
    // Get a reference to the canvas
    canvas = document.getElementById('canvas');

    //Caja de texto para pruebas
    txtPruebas = document.getElementById('txtPruebas');
    
    // Context
    ctx = canvas.getContext('2d');

    //Eliminación del Anti-Aliasing
    ctx.imageSmoothingEnabled = false;

    frameTimeObj = 1000 / FPS; //Tiempo de frame en ms.

    //Inicializamos el estado del juego
    gameState = State.LOADING;

    vidas = 3;
    puntuacion = 0;

    //Para los eventos del teclado
    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup",   keyupHandler,   false);

    //Inicializamos los sprites
    initSprites();
    loadMap();
    loadSprites();
    loadImagenCarga();
    loadVidas();

    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}

function loadMap() 
{
    let tileSet;
    //Mapa
    tileSet = new Image();
    tileSet.addEventListener("load", loadHandler, false);
    tileSet.src = "./images/spritesMapa.png";  
    tileSets.push(tileSet);
    assetsToLoad.push(tileSet);
}

function loadImagenCarga()
{
    //Load the tileSet image
    tileSet1 = new Image();
    tileSet1.addEventListener("load", loadHandler, false);
    tileSet1.src = "./images/pacman.png";  //Ojo que la ruta es relativa al HTML, no al JS
    assetsToLoad.push(tileSet1);
}

function loadSprites()
{
    tileSet2 = new Image();
    tileSet2.addEventListener("load", loadHandler, false);
    tileSet2.src = "./images/sprites.png";  //Ojo que la ruta es relativa al HTML, no al JS
    assetsToLoad.push(tileSet2);
}

function loadVidas()
{
    tileSet3 = new Image();
    tileSet3.addEventListener("load", loadHandler, false);
    tileSet3.src = "./images/comecocos.png";  //Ojo que la ruta es relativa al HTML, no al JS
    assetsToLoad.push(tileSet3);
}

//Función que se llama cada vez que se carga un activo
function loadHandler()
{
    assetsLoaded++;
    
    //Una vez se han cargado todos los activos pasamos 
    if(assetsLoaded === assetsToLoad.length)
    {
        for (i = 0; i < tileSets.length; ++i)
        {
            tileSets[i].removeEventListener("load", loadHandler, false);
        }

        console.log("Assets finished loading");
        
        //Start the game
        gameState = State.GAME_START;

    }

}

function initSprites()
{
    renderMapPuntos();

    const Player = new Sprite(
        Type.id = Type.PLAYER,             //Tipo de Sprite
        760,                   //Posición inicial en X
        160,                   //Posición inicial en Y
        50,
        SPRITE_SIZE,                     //Tamaño total del sprite en X
        SPRITE_SIZE,                     //Tamaño total del sprite en Y 
        10,
        6,
        1,                     //Columna de inicio
        15,
        40,
        0,
        Direction.INVALID,
    );
    sprites.push(Player);

    const Enemy1 = new Sprite(
        Type.id = Type.ENEMY,             //Tipo de Sprite
        602,                   //Posición inicial en X
        400,                  //Posición inicial en Y
        50,
        SPRITE_SIZE,                     //Tamaño total del sprite en X
        SPRITE_SIZE,                     //Tamaño total del sprite en Y 
        10,
        6,
        0,                     //Columna de inicio
        2,
        0,
        0,
        Direction.INVALID,
    );
    sprites.push(Enemy1);

    const Enemy2 = new Sprite(
        Type.id = Type.ENEMY,             //Tipo de Sprite
        720,                   //Posición inicial en X
        400,                   //Posición inicial en Y
        50,
        SPRITE_SIZE,                     //Tamaño total del sprite en X
        SPRITE_SIZE,                     //Tamaño total del sprite en Y 
        10,
        6,
        0,                     //Columna de inicio
        7,
        0,
        0,
        Direction.INVALID,
    );
    sprites.push(Enemy2);

    const Enemy3 = new Sprite(
        Type.id = Type.ENEMY,             //Tipo de Sprite
        602,                   //Posición inicial en X
        519,                   //Posición inicial en Y
        50,
        SPRITE_SIZE,                     //Tamaño total del sprite en X
        SPRITE_SIZE,                     //Tamaño total del sprite en Y 
        10,
        6,
        0,                     //Columna de inicio
        6,
        0,
        0,
        Direction.INVALID,
    );
    sprites.push(Enemy3);

    const Fruta1 = new Sprite(
        Type.id = Type.FRUTA,             //Tipo de Sprite
        240,                   //Posición inicial en X
        440,                   //Posición inicial en Y
        50,
        SPRITE_SIZE,                     //Tamaño total del sprite en X
        SPRITE_SIZE,                     //Tamaño total del sprite en Y 
        10,
        6,
        0,                     //Columna de inicio
        17,
        0,
        0,
        Direction.INVALID,
    );
    sprites.push(Fruta1);

    const Fruta2 = new Sprite(
        Type.id = Type.FRUTA,             //Tipo de Sprite
        1162,                   //Posición inicial en X
        242,                   //Posición inicial en Y
        0,
        SPRITE_SIZE,                     //Tamaño total del sprite en X
        SPRITE_SIZE,                     //Tamaño total del sprite en Y 
        0,
        0,
        0,                     //Columna de inicio
        17,
        0,
        0,
        Direction.INVALID,
    );
    sprites.push(Fruta2);

    
}

function renderMapPuntos()
{   
    for (i = 0; i < 21; ++i)
    {
        for (j = 0; j < 36; j++)
        {
           if (level1Colisions[i][j] == 6)
           {
                if ((i == 4 && j == 19) || (i == 10 && j == 15) || (i == 10 && j == 18) || (i == 13 && j == 15) || (i == 11 && j == 6) || (i == 6 && j == 29))
                {

                }
                else
                {
                    const punto = new Sprite(
                        Type.id = Type.PUNTO,             //Tipo de Sprite
                        j * SPRITE_SIZE,                   //Posición inicial en X
                        i * SPRITE_SIZE,                   //Posición inicial en Y
                        0,
                        30,                     //Tamaño total del sprite en X
                        30,                     //Tamaño total del sprite en Y 
                        0,
                        0,
                        1,                     //Columna de inicio
                        16,
                        0,
                        0,
                        Direction.INVALID,
                    );
                    sprites.push(punto)
                }
           }
        }
    }
}