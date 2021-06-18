/* Set the variables for columns & rows to 5
   Set the variable for tile width to 40 & gap between each tile to 4
   Set the position of tile left to 20 & top to 30
*/
   
const tileCol = 5;
const tileRow = 5;
const tileWidth = 50;
const tileGap = 6;
const tileLeft = 200;
const tileTop = 100;
const tileBorder = 10;

// There are six different colour tiles in the colour grid. Each colour appears 4 times

const tileColors = ['red', 'green', 'yellow', 'blue', 'white', 'orange'];
const maxTileColor = 4;
 
// Get the grid area from the html div by it's grid area id

const gridAreaDiv = document.getElementById('grid-area');

/* Call the Create Black Background function to render a black background on the screen
   behind the colour grid
*/

createBlackBackground();

/*  Call the create tile grid function. This funtion displays 5 columns & 5 rows 
    of the  different colour tiles
*/ 

createTileGrid();

function createTileGrid() {

  const newDiv2 = document.createElement("div");
  newDiv2.style.position = "absolute";
  newDiv2.style.width = ((tileCol - 2) * tileWidth) + ((tileCol - 2) * tileGap) - 1 + "px";
  newDiv2.style.height = ((tileRow - 2) * tileWidth) + ((tileRow - 2) * tileGap) -1 + "px";
  newDiv2.style.left = tileLeft + tileBorder + tileWidth + Math.floor(tileGap / 2) + "px";
  newDiv2.style.top = tileTop + tileBorder + tileWidth + Math.floor(tileGap / 2) + "px";
  newDiv2.style.background = "";
  newDiv2.style.borderStyle = "dashed";
  newDiv2.style.borderWidth = "thin";
  newDiv2.style.borderColor = "white";
  gridAreaDiv.appendChild(newDiv2);

    let colorCount = 0;
    let currColor = 0;
    
    let currTileTop = tileTop + tileBorder;
        
    for (nextRow = 0; nextRow < tileRow; ++nextRow) {
                
        let currTileLeft = tileLeft + tileBorder;

        for (nextCol = 0; nextCol < tileCol; ++nextCol) {
           
          let newTile = document.createElement('div');
          newTile.className = ('tile');
          newTile.style.left = (currTileLeft + 'px');
          newTile.style.top = (currTileTop + 'px');
          newTile.style.height = tileWidth + 'px';
          newTile.style.width = tileWidth + 'px';

          newTile.style.backgroundColor =(tileColors[currColor]);
                 
          gridAreaDiv.appendChild(newTile);

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

function createBlackBackground() {

  const back = document.createElement("div");
  back.style.position = "absolute";
  back.style.width = (tileBorder * 2) + (tileCol * tileWidth) + ((tileCol - 1) * tileGap) + "px";
  back.style.height = (tileBorder * 2) + (tileRow * tileWidth) + ((tileRow - 1) * tileGap) + "px";
  back.style.left = tileLeft + "px";
  back.style.top = tileTop + "px";
  back.style.background = "black";
  gridAreaDiv.appendChild(back);

}