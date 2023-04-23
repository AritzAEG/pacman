//Variables globales

//Acceso al canvas y context
let canvas;
let ctx;

//Variable que gestiona el estado del juego
let gameState = State.INVALID;

// VARIABLES DE CONTROL DE TIEMPO

//Tiempo de ciclo anterior
let previousCycleTime = 0;

//Tiempo de ciclo de juego real
let lag = 0;

//Tiempo de ciclo objetivo (constante)
let frameTimeObj = 0;

//Objeto que guarda el estado de la acción enviada
let action = {};

//Caja de texto para mostrar datos de depuración
let txtPruebas;

// Datos de imagen (tileset)
let punto = [];
let tileSets = [];

//Array con datos de los sprites
let sprites = [];

//Variables para gestionar la carga de activos
let assetsToLoad = [];
let assetsLoaded = 0;

//Vidas del jugador
let vidas;
let puntuacion;
let numeroAleatorio;

let xPos = 60;
let yPos = 60;

//OBTENER NUMERO ALEATORIO
function getRandomInt(max) {
  return ;
}