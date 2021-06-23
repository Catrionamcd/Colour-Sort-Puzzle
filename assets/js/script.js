/* Set the variables for columns & rows to 5
   Set the variable for tile width to 40 & gap between each tile to 6
   Set the position of tile left to 200 & top to 100
*/
   
const tileCols = 5;
const tileRows = 5;
var tileWidth = 50;
var tileGap = 8;
var tileTop = 150;
var tileLeft = 300;
var tileBorder = 10;

const diceCols = 3;
const diceRows = 3;
var diceTileWidth = 50;
var diceTileGap = 8;
var diceTileTop = 150;
var diceTileLeft = 750;
var diceTileBorder = 10;

var blankTileId = 0;
var diceColourArray = new Array(diceRows * diceCols);
var gridColourArray = new Array(diceRows * diceCols);
var tilesClickedCount = 0;
var tilesMatch = 0;
var gameStartTime = 0;
var timeAllowed = 120;
var gameInPlay = false;
var gameWin = false;


// There are six different colour tiles in the colour grid. Each colour appears 4 times

const tileColors = ['red', 'green', 'yellow', 'blue', 'white', 'orange'];
const maxTileColor = 4;

function adjustMedia320(media320) {
  if (media320.matches) {
    tileTop = 300;
    tileLeft = 20;
    tileWidth = 30;

    diceTileLeft = 50;
    diceTileWidth = 30;
  }
}

var media320 = window.matchMedia("(max-width: 450px)");
adjustMedia320(media320);



function adjustMedia850(media850) {
  if (media850.matches) {
    tileTop = 300;
    tileLeft = 20;
    tileWidth = 30;

    diceTileTop = 80;
    diceTileLeft = 50;
    diceTileWidth = 30;
  }
}

var media850 = window.matchMedia("(max-width: 850px)");
adjustMedia850(media850);


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

/*  Call the Create tile dice function. This function displays 9 colors tiles in 3 
    rows & 3 columns. The nine inner tiles on the coloue grid will have to match these
    9 tiles
*/

createDiceBackground();

createDiceDottedLine();

createDiceGrid();

// Function to create the colour tile grid

function createTileGrid() {

  let colorCount = 0;
  let currColor = 0;
  let tileId = 0;
    
  let currTileTop = tileTop + tileBorder;
        
  for (nextRow = 0; nextRow < tileRows; ++nextRow) {
                
    let currTileLeft = tileLeft + tileBorder;

    for (nextCol = 0; nextCol < tileCols; ++nextCol) {
           
      let newTile = document.createElement('div');
      
      newTile.className = ('tile');
      newTile.id = ('tile-id', tileId);
      newTile.style.top = (currTileTop + 'px');
      newTile.style.left = (currTileLeft + 'px');
      newTile.style.height = tileWidth + 'px';
      newTile.style.width = tileWidth + 'px';
      newTile.style.backgroundColor =(tileColors[currColor]);

      if (nextRow == (tileRows - 1) && nextCol == (tileCols - 1)) {
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
     
// Function to create the colour DICE grid

function createDiceGrid() {

  let colorCount = 0;
  let currColor = 0;
  let tileId = 0;
    
  let currTileTop = diceTileTop + diceTileBorder;
        
  for (nextRow = 0; nextRow < diceRows; ++nextRow) {
                
    let currTileLeft = diceTileLeft + diceTileBorder;

    for (nextCol = 0; nextCol < diceCols; ++nextCol) {
           
      let newTile = document.createElement('div');
      
      newTile.className = 'dice';
      newTile.id = ('tile-id', tileId);
      newTile.style.top = currTileTop + 'px';
      newTile.style.left = currTileLeft + 'px';
      newTile.style.height = diceTileWidth + 'px';
      newTile.style.width = diceTileWidth + 'px';
      newTile.style.backgroundColor =(tileColors[currColor]);
                 
      gridAreaDiv.appendChild(newTile);

      currTileLeft += (diceTileWidth + diceTileGap);
      ++colorCount;
      ++tileId;
                
      if (colorCount >= maxTileColor) {
          colorCount = 0;
          ++currColor;
      }
    }

    currTileTop += (diceTileWidth + diceTileGap);
  }

}

/* Function to render the black background for the colour tile grid.
   Calculate the size of that background by adding border, tile widths
   and gaps between tiles
*/

function createBlackBackground() {

  const back = document.createElement("div");
  back.style.position = "absolute";
  back.style.width = (tileBorder * 2) + (tileCols * tileWidth) + ((tileCols - 1) * tileGap) + "px";
  back.style.height = (tileBorder * 2) + (tileRows * tileWidth) + ((tileRows - 1) * tileGap) + "px";
  back.style.left = tileLeft + "px";
  back.style.top = tileTop + "px";
  back.style.background = "black";
  gridAreaDiv.appendChild(back);

}

/* Function to render the black background for the dice tile grid.
   Calculate the size of that background by using the border, tile widths
   and gaps between tiles for the dice grid
*/

function createDiceBackground() {

  const back = document.createElement("div");
  back.style.position = "absolute";
  back.style.width = (diceTileBorder * 2) + (diceCols * diceTileWidth) + ((diceCols - 1) * diceTileGap) + "px";
  back.style.height = (diceTileBorder * 2) + (diceRows * diceTileWidth) + ((diceRows - 1) * diceTileGap) + "px";
  back.style.left = diceTileLeft + "px";
  back.style.top = diceTileTop + "px";
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
  dottedline.style.width = ((tileCols - 2) * tileWidth) + ((tileCols - 2) * tileGap) - 1 + "px";
  dottedline.style.height = ((tileRows - 2) * tileWidth) + ((tileRows - 2) * tileGap) -1 + "px";
  dottedline.style.left = tileLeft + tileBorder + tileWidth + Math.floor(tileGap / 2) + "px";
  dottedline.style.top = tileTop + tileBorder + tileWidth + Math.floor(tileGap / 2) + "px";
  dottedline.style.borderStyle = "dashed";
  dottedline.style.borderWidth = "thin";
  dottedline.style.borderColor = "white";
  gridAreaDiv.appendChild(dottedline);

}

// Function to render the dotted line around the dice grid. 
 
function createDiceDottedLine() { 

  const dottedline = document.createElement("div");
  dottedline.style.position = "absolute";
  dottedline.style.width = (diceTileBorder + (diceCols * diceTileWidth) + ((diceCols - 1) * diceTileGap)) + "px";
  dottedline.style.height = (diceTileBorder + (diceRows * diceTileWidth) + ((diceRows- 1) * diceTileGap)) + "px";
  dottedline.style.left = diceTileLeft + Math.floor(diceTileBorder / 2) + "px";
  dottedline.style.top = diceTileTop + Math.floor(diceTileBorder / 2) + "px";
  dottedline.style.borderStyle = "dashed";
  dottedline.style.borderWidth = "thin";
  dottedline.style.borderColor = "white";
  gridAreaDiv.appendChild(dottedline);

}

//  Function to start the game

function startGame() {

  mixDiceColours();
  while(maxColourExceeded()) {
    mixDiceColours()
  }
  storeDiceColours();

  gameStartTime = new Date();
  gameInPlay = true;
  tilesClickedCount = 0;
  tilesMatch = 0;
  document.getElementById("game-result").innerHTML = " ";
  document.getElementById("tiles-moved").innerText = tilesClickedCount;
  checkColourMatch();   // Might have some random matches;
  
  setInterval(timerCount, 100);
}

//  Function to mix up the colours on the DICE grid & to start the game.

function mixDiceColours() {
  
  let mixTile = document.getElementsByClassName('dice');
  for (let i = 0; i < mixTile.length; i++) {
    const randomColor = Math.floor(Math.random() * 6);
    mixTile[i].style.backgroundColor = tileColors[randomColor];
  }

} 

//  Function to check if each Dice colour is not used more than maxTileColor times.

function maxColourExceeded() {

  let colourCount = new Array (tileColors.length);
  for (let x = 0; x < tileColors.length; ++x) {
    colourCount[x] = 0;
  }

  let mixTile = document.getElementsByClassName('dice');
  for (let i = 0; i < mixTile.length; i++) {
    let index = tileColors.indexOf(mixTile[i].style.backgroundColor);
    ++colourCount[index];
  }

  for (let y = 0; y < tileColors.length; y++) {
    if (colourCount[y] > maxTileColor) {
      return true;  
    }
  }
  return false;
}
  
//  Function for when a tile is clicked to be moved

function tileClicked(tileId) {

  if (!gameInPlay) {
    return;
  }

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
      ++tilesClickedCount;
  } else {
    if (clickedTile.classList.contains("errorShaker")) {
      clickedTile.classList.remove("errorShaker");
      void clickedTile.offsetWidth;
    }
    clickedTile.classList.add("errorShaker");
  }

  document.getElementById("tiles-moved").innerText = tilesClickedCount;

  storeGridColours();

  if (checkColourMatch()) {
    document.getElementById("game-result").innerHTML = "CONGRATULATIONS!! Press START button to play again.";
    gameInPlay = false;
  }
    
}


/* Function to store the DICE colours in an array so they can be checked
   against the colours on the grid
*/
function storeDiceColours() {

  let startTop = diceTileTop + diceTileBorder;
  let startLeft = diceTileLeft + diceTileBorder;
  const allDice = document.getElementsByClassName('dice');

  for (let i = 0; i < allDice.length; i++) {
    const topDiff = parseInt(allDice[i].style.top) - startTop;   // diff between top of tile & start top
    const leftDiff = parseInt(allDice[i].style.left) - startLeft; // diff between left of tile & start left
    const rowPos = topDiff / (diceTileWidth + diceTileGap);  //get row position of tile by 
    const colPos = leftDiff / (diceTileWidth + diceTileGap);
    diceColourArray[rowPos * diceCols + colPos] = allDice[i].style.backgroundColor;
  }
}

/* Function to store the nine inner tiles on the colour grid in an array
   so they can be checked against the DICE array colours
*/
function storeGridColours() {

  let startTop = tileTop + tileBorder + tileWidth + tileGap;
  let startLeft = tileLeft + tileBorder +tileWidth + tileGap;
  const allGrid = document.getElementsByClassName('tile');

  for (let i = 0; i < allGrid.length; i++) {
    const topDiff = parseInt(allGrid[i].style.top) - startTop;
    const leftDiff = parseInt(allGrid[i].style.left) - startLeft;
    const rowPos = topDiff / (tileWidth + tileGap);
    const colPos = leftDiff / (tileWidth + tileGap);

    if (rowPos < 0 || colPos < 0 || rowPos >= diceRows || colPos >= diceCols) {
      continue;
    }
    gridColourArray[rowPos * diceCols + colPos] = allGrid[i].style.backgroundColor;
  }
  console.log (gridColourArray);
}


// Function to check if tiles match

function checkColourMatch() {
  
  tilesMatch = 0;

  for (i=0; i < gridColourArray.length; ++i) {
    if (gridColourArray[i] == diceColourArray[i]) {
        ++tilesMatch;
    }
  }
  
  document.getElementById("tiles-matched").innerText = tilesMatch;

  if (tilesMatch == (diceCols * diceRows)) {
    return true;  // completed puzzle
  } else {
    return false; // not completed yet
  }
  
}

// Timer Function

function timerCount() {
  
  if (gameInPlay) {
    const timeInPlay = Math.floor((new Date() - gameStartTime) / 1000);
    const timeRemaining = timeAllowed - timeInPlay;
    const minRemaining = Math.floor(timeRemaining / 60);
    const secRemaining = timeRemaining % 60;
    document.getElementById("timer").innerHTML = " " + minRemaining + ":" + (secRemaining < 10 ? ("0" + secRemaining) : secRemaining);
    
    if (timeRemaining <= 0) {
      gameInPlay = false;
      document.getElementById("game-result").innerHTML = "SORRY, times up!! Press START button to play again.";
    }
  }
  
}

