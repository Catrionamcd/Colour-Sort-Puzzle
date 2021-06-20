/* Set the variables for columns & rows to 5
   Set the variable for tile width to 40 & gap between each tile to 6
   Set the position of tile left to 200 & top to 100
*/
   
const tileCol = 5;
const tileRow = 5;
const tileWidth = 50;
const tileGap = 6;
const tileTop = 100;
const tileLeft = 200;
const tileBorder = 10;

var blankTileId = 0;

// There are six different colour tiles in the colour grid. Each colour appears 4 times

const tileColors = ['red', 'green', 'yellow', 'blue', 'white', 'orange'];
const maxTileColor = 4;
 
// Get the grid area from the html div by it's grid area id

const gridAreaDiv = document.getElementById('grid-area');

/* Call the Create Black Background function to render a black background on the screen
   behind the colour grid
*/

createBlackBackground();

/* Call the Create Dotted line function to render a dotted line around the nine inner tiles
   that will have to match with the 9 tiles on the dice
*/

createDottedLine();

/*  Call the Create tile grid function. This funtion displays 5 columns & 5 rows 
    of the  different colour tiles
*/ 

createTileGrid();

// Function to create the colour tile grid

function createTileGrid() {

  let colorCount = 0;
  let currColor = 0;
  let tileId = 0;
    
  let currTileTop = tileTop + tileBorder;
        
  for (nextRow = 0; nextRow < tileRow; ++nextRow) {
                
    let currTileLeft = tileLeft + tileBorder;

    for (nextCol = 0; nextCol < tileCol; ++nextCol) {
           
      let newTile = document.createElement('div');
      
      newTile.className = ('tile');
      newTile.id = ('tile-id', tileId);
      newTile.style.top = (currTileTop + 'px');
      newTile.style.left = (currTileLeft + 'px');
      newTile.style.height = tileWidth + 'px';
      newTile.style.width = tileWidth + 'px';
      newTile.style.backgroundColor =(tileColors[currColor]);
                 
      if (nextRow == (tileRow - 1) && nextCol == (tileCol - 1)) {
        blankTileId = newTile.id;
      } else {
        newTile.onclick = function() {tileClicked(this.id)};
      }

      gridAreaDiv.appendChild(newTile);

      currTileLeft += (tileWidth + tileGap);
      ++colorCount;
      ++tileId;
                
      if (colorCount >= maxTileColor) {
          colorCount = 0;
          ++currColor;
      }
    }

    currTileTop += (tileWidth + tileGap);
  }
}
     

/* Function to render the black background for the colour tile grid.
   Calculate the size of that background by adding border, tile widths
   and gaps between tiles
*/

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

/* Function to render the dotted line around the inner nine tiles on the colour grid. 
   The colour tiles inside the dotted line will have to match the nine colour files on 
   the dice.  
*/

function createDottedLine() {

  const dottedline = document.createElement("div");
  dottedline.style.position = "absolute";
  dottedline.style.width = ((tileCol - 2) * tileWidth) + ((tileCol - 2) * tileGap) - 1 + "px";
  dottedline.style.height = ((tileRow - 2) * tileWidth) + ((tileRow - 2) * tileGap) -1 + "px";
  dottedline.style.left = tileLeft + tileBorder + tileWidth + Math.floor(tileGap / 2) + "px";
  dottedline.style.top = tileTop + tileBorder + tileWidth + Math.floor(tileGap / 2) + "px";
  //dottedline.style.background = "";
  dottedline.style.borderStyle = "dashed";
  dottedline.style.borderWidth = "thin";
  dottedline.style.borderColor = "white";
  gridAreaDiv.appendChild(dottedline);

}

function tileClicked(tileId) {
  
  let clickedTile = document.getElementById(tileId);
  let blankTile = document.getElementById(blankTileId);
  
  let clickedTileTop = parseInt(clickedTile.style.top, 10);
  let clickedTileLeft = parseInt(clickedTile.style.left, 10);
  let blankTileTop = parseInt(blankTile.style.top, 10);
  let blankTileLeft = parseInt(blankTile.style.left, 10);

  let calcSpaceTop = Math.abs(blankTileTop - clickedTileTop);
  let calcSpaceLeft = Math.abs(blankTileLeft - clickedTileLeft);

  if ((calcSpaceLeft == 0 && calcSpaceTop == tileWidth + tileGap) || (calcSpaceTop == 0 && calcSpaceLeft == tileWidth + tileGap)) {
      blankTile.style.top = clickedTileTop + 'px';
      blankTile.style.left = clickedTileLeft + 'px';
      clickedTile.style.top = blankTileTop + 'px';
      clickedTile.style.left = blankTileLeft + 'px';
  }

}

