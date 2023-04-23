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
    loadPunto();

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

function loadPunto()
{
    tileSet4 = new Image();
    tileSet4.addEventListener("load", loadHandler, false);
    tileSet4.src = "./images/punto.png";  //Ojo que la ruta es relativa al HTML, no al JS
    assetsToLoad.push(tileSet4);

    tileSet5 = new Image();
    tileSet5.addEventListener("load", loadHandler, false);
    tileSet5.src = "./images/Negro.png";  //Ojo que la ruta es relativa al HTML, no al JS
    assetsToLoad.push(tileSet5);
}

function loadPrueba() 
{
    let tilePrueba;
    //Mapa
    tilePrueba = new Image();
    tilePrueba.addEventListener("load", loadHandler, false);
    tilePrueba.src = "./images/Puntos.png";  
    prueba.push(tilePrueba);
    assetsToLoad.push(tilePrueba);
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
    const Player = new Sprite(
        Type.id = Type.PLAYER,             //Tipo de Sprite
        760,                   //Posición inicial en X
        160,                   //Posición inicial en Y
        50,
        30,                     //Tamaño total del sprite en X
        30,                     //Tamaño total del sprite en Y 
        10,
        6,
        1,                     //Columna de inicio
        15,
        0,
        0,
        Direction.INVALID,
    );
    sprites.push(Player);

    const Enemy1 = new Sprite(
        Type.id = Type.ENEMY,             //Tipo de Sprite
        605,                   //Posición inicial en X
        405,                  //Posición inicial en Y
        50,
        30,                     //Tamaño total del sprite en X
        30,                     //Tamaño total del sprite en Y 
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
        725,                   //Posición inicial en X
        405,                   //Posición inicial en Y
        50,
        30,                     //Tamaño total del sprite en X
        30,                     //Tamaño total del sprite en Y 
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
        605,                   //Posición inicial en X
        525,                   //Posición inicial en Y
        50,
        30,                     //Tamaño total del sprite en X
        30,                     //Tamaño total del sprite en Y 
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
        245,                   //Posición inicial en X
        445,                   //Posición inicial en Y
        50,
        30,                     //Tamaño total del sprite en X
        30,                     //Tamaño total del sprite en Y 
        10,
        6,
        1,                     //Columna de inicio
        16,
        0,
        0,
        Direction.INVALID,
    );
    sprites.push(Fruta1);

    const Fruta2 = new Sprite(
        Type.id = Type.FRUTA,             //Tipo de Sprite
        1165,                   //Posición inicial en X
        250,                   //Posición inicial en Y
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
    sprites.push(Fruta2);
}