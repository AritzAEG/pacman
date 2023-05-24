
//Constants

const Asset = {
    TILEMAP: 0,
    SOUNDS:  1
};

//Estados del juego
const State = {
    GAME_LOAD: 0,
    GAME_START: 1,
    GAME_PLAY: 2,
    GAME_STOP: 3,
    GAME_OVER: 4,
};

const Position = {
    DOWN: 0,
    UP: 1,
}

//Constantes para definir la posición del sprite en el TileMap
const Type = {
    PLAYER: 0,  //En nuestro caso el jugador es un comecocos
    ENEMY: 1,
    PUNTO: 2,
    FRUTA: 3,
}

//Estados de animación de sprites
const Direction = {
    //PLAYER y GHOST
    DOWN: 0,
    UP: 1,
    RIGHT: 2,
    LEFT: 3,
}

//Keyboard Events
const Key = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37,
    SPACE: 32,
    P: 80,
    R: 82,
    ENTER: 13,
    E: 69,
}

action = {
    moveLeft:  false,
    moveRight: false,
    moveUp:    false,
    moveDown:  false,
    jump:      false,
    pause: false,
    resume: false,
    end: false,
}

//Diferentes TileSets
const Tile = {
    SIZE_40: 0   //Tiles de mapa 32 x 32
}

const Block = {
    empty: 0,
    block: 1,
    capBottom: 1,
    capLeft: 2,
    capRight: 3,
    capTop: 4,
    Negro: 5,
    pipeConnectorBottom: 6,
    pipeConnectorLeft: 7,
    pipeConnectorRight: 8,
    pipeConnectorTop: 9,
    pipeCorner1: 10,
    pipeCorner2: 11,
    pipeCorner3: 12,
    pipeCorner4: 13,
    pipeCross: 14,
    pipeHorizontal: 15,
    pipeVertical: 16,
    pipeVertical1: 17,
}

const Sound = {
    GAME_WAIT: 0,
    GAME_MUSIC: 1,
    GAME_OVER: 2,
    PICK_POINT: 3,    
}

//Anchura de los sprites
const SPRITE_SIZE = 40;

//Numero de sprites a dibujar en pantalla
const NUM_SPRITES = 1;

//Velocidad del juego
const FPS = 30;

const BRICK_SIZE = 40;