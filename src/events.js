function keydownHandler(event)
{
    switch(event.keyCode)
    {
        case Key.UP:
            action.moveUp = true;
            break;

        case Key.DOWN:
            action.moveDown = true;
            break;

        case Key.LEFT:
            action.moveLeft = true;
            break;

        case Key.RIGHT:
            action.moveRight = true;
            break;

        case Key.SPACE:
            action.jump = true;
            break;

        case Key.ENTER:
            action.enter = true;
            break;
        
        case Key.P:
            action.pause = true;
            break;

        case Key.R:
            action.resume = true;
            break;

        case Key.E:
            action.end = true;
            break;
    }
   
}

function keyupHandler(event)
{
    switch(event.keyCode)
    {
        case Key.UP:
            action.moveUp = false;
            break;

        case Key.DOWN:
            action.moveDown = false;
            break;

        case Key.LEFT:
            action.moveLeft = false;
            break;

        case Key.RIGHT:
            action.moveRight = false;
            break;

        case Key.SPACE:
            action.jump = false;
            break;

        case Key.ENTER:
            action.enter = false;
            break;
        
        case Key.P:
            action.pause = false;
            break;

        case Key.R:
          action.resume = false;
          break;

        case Key.E:
          action.end = false;
          break;
        }
}