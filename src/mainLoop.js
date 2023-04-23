function gameLoop(timeStamp)
{
    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop, canvas);
 
    const elapsedCycleTime = timeStamp - previousCycleTime; //ms
    
    previousCycleTime = timeStamp;

    lag += elapsedCycleTime;
    
    
    if (lag >= frameTimeObj)
    {               
        //Update the game logic. gameLogic.js
        update();

        //Perform the drawing operation. gameRender.js
        render();

        //Corregimos los excesos de tiempo
        lag -= frameTimeObj;
       
    }
}












