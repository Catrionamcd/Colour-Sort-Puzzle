/* Set the variables for columns & rows to 5
   Set the variable for tile width to 40 & gap between each tile to 4
   Set the position of tile left to 20 & top to 30
*/
   
const tileCol = 5;
const tileRow = 5;
const tileWidth = 50;
const tileGap = 4;
const tileLeft = 20;
const tileTop = 30;

// There are six different colour tiles in the colour grid. Each colour appears 4 times

const tileColors = ['red', 'blue', 'green', 'orange', 'yellow', 'white'];
const maxTileColor = 4;
 
/*  Call the create tile grid function. This funtion displays 5 columns & 5 rows 
    of the  different colour tiles
*/ 

createTileGrid();

console.log('CallingScript2');
 
function createTileGrid() {
    
    let colorCount = 0;
    let currColor = 0;
    
    let currTileTop = tileTop;
        
    for (nextRow = 0; nextRow < tileRow; ++nextRow) {
                
        let currTileLeft = tileLeft;

        for (nextCol = 0; nextCol < tileCol; ++nextCol) {
           
          let newTile = document.createElement('div');
          newTile.className = ('tile');
          newTile.style.left = (currTileLeft + 'px');
          newTile.style.top = (currTileTop + 'px');

          newTile.style.backgroundColor =(tileColors[currColor]);
                 
          let gameAreaDiv = document.getElementById('game-area');
              gameAreaDiv.appendChild(newTile);

          currTileLeft += (tileWidth + tileGap);
          ++colorCount;
          
          if (colorCount >= maxTileColor) {
            colorCount = 0;
            ++currColor;
          }
        }
        currTileTop += (tileWidth + tileGap);
    }
} 
