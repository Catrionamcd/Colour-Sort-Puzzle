/* Set the variables for columns & rows to 5 for the main colour grid
   Set the variable for tile width to 50 & gap between each tile to 8
   Set the position of tile left & top to 0
   Set the variable for the border around the grid to 10.
*/
   
const tileCols = 5;
const tileRows = 5;
let tileWidth = 50;
let tileGap = 8;
let tileTop = 0;
let tileLeft = 0;
let tileBorder = 10;

/* Functions to calculate the dimensions of the main tile colour grid container and 
   the dotted line around the 9 inner tiles on the main colour grid using 
   the variables set up. Also to calculate the top and left of each tile. These will
   also be used in the media query functions.
*/

function tileContainerHeight() {
  return (tileBorder * 2) + (tileRows * tileWidth) + ((tileRows - 1) * tileGap);
}
function tileContainerWidth() {
  return (tileBorder * 2) + (tileCols * tileWidth) + ((tileCols - 1) * tileGap);
}
function tileDottedHeight() {
  return ((tileRows - 2) * tileWidth) + ((tileRows - 2) * tileGap);
}
function tileDottedWidth() {
  return ((tileCols - 2) * tileWidth) + ((tileCols - 2) * tileGap);
}
function tileDottedTop() {
  return tileTop + tileBorder + tileWidth + Math.round(tileGap / 2);
}
function tileDottedLeft() {
  return tileLeft + tileBorder + tileWidth + Math.round(tileGap / 2);
}

/* Set the variables for columns & rows to 3 for the DICE colour grid
   Set the variable for tile width to 50 & gap between each tile to 8
   Set the position of tile left & top to 0
   Set the variable for the border around the DICE grid to 10.
*/

const diceCols = 3;
const diceRows = 3;
let diceTileWidth = 50;
let diceTileGap = 8;
let diceTileTop = 0;
let diceTileLeft = 0;
let diceTileBorder = 10;

/* Functions to calculate the dimensions of the DICE colour grid container and 
   the dotted line around the DICE with the variables set up. Also to calculate
   the top and left of each tile. These will also be used in the media query functions.
*/

function diceContainerHeight() {
  return (diceTileBorder * 2) + (diceRows * diceTileWidth) + ((diceRows - 1) * diceTileGap);
}
function diceContainerWidth() {
  return (diceTileBorder * 2) + (diceCols * diceTileWidth) + ((diceCols - 1) * diceTileGap);
}
function diceDottedHeight() {
  return (diceTileBorder + (diceRows * diceTileWidth) + ((diceRows- 1) * diceTileGap));
}
function diceDottedWidth() {
  return (diceTileBorder + (diceCols * diceTileWidth) + ((diceCols - 1) * diceTileGap));
}
function diceDottedTop() {
  return diceTileTop + Math.round(diceTileBorder / 2);
}
function diceDottedLeft() {
  return diceTileLeft + Math.round(diceTileBorder / 2);
}

/* The Blank tile id will be stored and the array of dice colours and an array of the 9 inner tiles on 
   the main tile grid area*/

let blankTileId = 0;
let diceColourArray = new Array(diceRows * diceCols);
let gridColourArray = new Array(diceRows * diceCols);

// The amount of tiles clicked to be moved will be stored and the tiles matched at any time

let tilesClickedCount = 0;
let tilesMatch = 0;

/* The start time is set to zeros, the time allowed is set to 5 minutes, game in play set to false until
   the game start function is called. The media size is set to large.
*/

let gameStartTime = 0;
let timeAllowed = 300;
let gameInPlay = false;
let mediaInUse = "large";

// There are six different colour tiles in the colour grid. Each colour appears 4 times

const tileColors = ['red', 'green', 'yellow', 'blue', 'white', 'orange'];
const maxTileColor = 4;

setInterval(timerCount, 100);

const btnInstruction = document.getElementById('btn-instruction');

// Rules of the Game
/* The following javascript was taken from W3Schools, the link is :
   https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_shake
   The id names were changed for this game.
*/
// Get the modal Instruction Window
var modal = document.getElementById("instructionWindow");

// When the user clicks the button, open the modal
btnInstruction.onclick = function() {modal.style.display = "block";};


// When the user clicks on (x), close the modal Instruction Window
var clickClose = document.getElementById("closeInstructions");
clickClose.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal Instruction Window, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get the grid areas for the DICE & main colour tile grid from the html div by it's grid area id

const gridAreaDiv = document.getElementById('grid-area');
const tileAreaDiv = document.getElementById('tile-game-area');
let tileId = 0;

/*  Firstly call the create background function for the DICE grid, then the create the dotted line
    function, then create the DICE grid function. This will create the 3 row and 3 columns of 9
    colour tiles.
*/

createDiceBackground();

createDiceDottedLine();

createDiceGrid();

/* Call the Create Black Background function to render a black background on the screen
   behind the colour grid. Then call the dotted line function for around the 9 inner tiles
   on the main grid that will have to be matched with the 9 DICE colours. Then the create
   main Tile grid function which will create the main tile grid of 24 coloured tiles.
*/

createBlackBackground();

createDottedLine();

createTileGrid();


// Function to create the main colour tile grid

function createTileGrid() {

  let colorCount = 0;
  let currColor = 0;
    
  let currTileTop = tileTop + tileBorder;
        
  for (let nextRow = 0; nextRow < tileRows; ++nextRow) {
                
    let currTileLeft = tileLeft + tileBorder;

    for (let nextCol = 0; nextCol < tileCols; ++nextCol) {
           
      let newTile = document.createElement('div');
      
      newTile.className = ('tile');
      newTile.setAttribute("id", tileId);
      newTile.style.top = (currTileTop + 'px');
      newTile.style.left = (currTileLeft + 'px');
      newTile.style.height = tileWidth + 'px';
      newTile.style.width = tileWidth + 'px';
      newTile.style.backgroundColor =(tileColors[currColor]);

      if (nextRow == (tileRows - 1) && nextCol == (tileCols - 1)) {
        blankTileId = newTile.id;
      } else {
        newTile.onclick = function() {tileClicked(this.id);};
      }

      tileAreaDiv.appendChild(newTile);

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
  
  let currTileTop = diceTileTop + diceTileBorder;
        
  for (let nextRow = 0; nextRow < diceRows; ++nextRow) {
                
    let currTileLeft = diceTileLeft + diceTileBorder;

    for (let nextCol = 0; nextCol < diceCols; ++nextCol) {
           
      let newTile = document.createElement('div');
      
      newTile.className = 'dice';
      newTile.setAttribute("id", tileId);
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

/* Function to render the black background for the main colour tile grid.
   Calculate the size of that background by adding border, tile widths
   and gaps between tiles
*/

function createBlackBackground() {

  const back = document.createElement("div");
  back.setAttribute("id", "tile-back");
  back.style.position = "absolute";
  back.style.height = tileContainerHeight() + 'px'; //(tileBorder * 2) + (tileRows * tileWidth) + ((tileRows - 1) * tileGap) + "px";
  back.style.width = tileContainerWidth() + 'px'; //(tileBorder * 2) + (tileCols * tileWidth) + ((tileCols - 1) * tileGap) + "px";
  back.style.left = tileLeft + "px";
  back.style.top = tileTop + "px";
  back.style.background = "black";
  tileAreaDiv.appendChild(back);

  const tileContainer = document.getElementById("tile-game-area");
  tileContainer.style.height = tileTop + tileContainerHeight() + 'px';
  tileContainer.style.width =  tileLeft + tileContainerWidth() + 'px';
}

/* Function to render the black background for the DICE tile grid.
   Calculate the size of that background by using the border, tile widths
   and gaps between tiles for the dice grid
*/

function createDiceBackground() {

  const back = document.createElement("div");
  back.setAttribute("id", "dice-back");
  back.style.position = "absolute";
  back.style.height = diceContainerHeight() + 'px';  //(diceTileBorder * 2) + (diceRows * diceTileWidth) + ((diceRows - 1) * diceTileGap) + "px";
  back.style.width = diceContainerWidth() + 'px'; //(diceTileBorder * 2) + (diceCols * diceTileWidth) + ((diceCols - 1) * diceTileGap) + "px";
  back.style.top = diceTileTop + "px";
  back.style.left = diceTileLeft + "px";
  back.style.background = "black";
  gridAreaDiv.appendChild(back);

  const diceContainer = document.getElementById("grid-area");
  diceContainer.style.height = diceTileTop + diceContainerHeight() + 'px';
  diceContainer.style.width =  diceTileLeft + diceContainerWidth() + 'px';
  
}

/* Function to render the dotted line around the inner nine tiles on the main colour grid. 
   The colour tiles inside the dotted line will have to match the nine colour tiles on 
   the dice.  
*/

function createDottedLine() {

  const dottedline = document.createElement("div");
  dottedline.setAttribute("id", "tile-dotted");
  dottedline.style.position = "absolute";
  dottedline.style.height = tileDottedHeight() + 'px'; //((tileRows - 2) * tileWidth) + ((tileRows - 2) * tileGap) + "px"; 
  dottedline.style.width = tileDottedWidth() + 'px'; //((tileCols - 2) * tileWidth) + ((tileCols - 2) * tileGap) + "px";
  dottedline.style.top = tileDottedTop() + 'px'; //tileTop + tileBorder + tileWidth + Math.round(tileGap / 2) + "px";
  dottedline.style.left = tileDottedLeft() + 'px'; //tileLeft + tileBorder + tileWidth + Math.round(tileGap / 2) + "px";
  dottedline.style.borderStyle = "dashed";
  dottedline.style.borderWidth = "thin";
  dottedline.style.borderColor = "white";
  tileAreaDiv.appendChild(dottedline);

}


// Function to render the dotted line around the DICE grid. 
 
function createDiceDottedLine() { 

  const dottedline = document.createElement("div");
  dottedline.setAttribute("id", "dice-dotted");
  dottedline.style.position = "absolute";
  dottedline.style.height = diceDottedHeight() + 'px'; //(diceTileBorder + (diceRows * diceTileWidth) + ((diceRows- 1) * diceTileGap)) + "px";
  dottedline.style.width = diceDottedWidth() + 'px'; //(diceTileBorder + (diceCols * diceTileWidth) + ((diceCols - 1) * diceTileGap)) + "px";
  dottedline.style.left = diceTileLeft + Math.round(diceTileBorder / 2) + "px";
  dottedline.style.top = diceTileTop + Math.round(diceTileBorder / 2) + "px";
  dottedline.style.borderStyle = "dashed";
  dottedline.style.borderWidth = "thin";
  dottedline.style.borderColor = "white";
  gridAreaDiv.appendChild(dottedline);

}

/*  Function to start the game. First a function to mix up the colours in the main tile grid will be called.
    Then a function to mix up the colours in the DICE grid. A function to store the DICE colours for comparison
    will be called.
*/

function startGame() {

  mixTileColours();

  do {
    mixDiceColours();               // Assign random colours on each dice
  } while (maxColourExceeded());    // but re-do if there are more than MaxTileColor showing on all dice
  
  storeDiceColours();

  gameStartTime = new Date();
  gameInPlay = true;
  tilesClickedCount = 0;
  tilesMatch = 0;
  document.getElementById("game-result").innerText = " ";
  document.getElementById("tiles-moved").innerText = tilesClickedCount;
  document.getElementById("btn-start").innerText = "Re-start";
  document.getElementById("timer").style.color = "slategrey";
  checkColourMatch();   // Might have some random matches;
  
}


//  Function to mix up the position of the tile colours on the main tile grid.

function mixTileColours() {

  let mixTile = document.getElementsByClassName('tile');
  for (let x = 0; x < 20; ++x) {
    const tileOne = Math.floor(Math.random() * (tileCols * tileRows));
    const tileTwo = Math.floor(Math.random() * (tileCols * tileRows));
    if (tileOne == tileTwo) {
      continue;
    }

    const tileOneTop = parseInt(mixTile[tileOne].style.top, 10);
    const tileOneLeft = parseInt(mixTile[tileOne].style.left, 10);
    const tileTwoTop = parseInt(mixTile[tileTwo].style.top, 10);
    const tileTwoLeft = parseInt(mixTile[tileTwo].style.left, 10);

    mixTile[tileOne].style.top = tileTwoTop + 'px';
    mixTile[tileOne].style.left = tileTwoLeft + 'px';

    mixTile[tileTwo].style.top = tileOneTop + 'px';
    mixTile[tileTwo].style.left = tileOneLeft + 'px';

  }

} 


//  Function to mix up the colours on the DICE grid.

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
 

/*  Function for when a tile is clicked to be moved. Only a tile beside a blank tile can be
    moved. If a tile is clicked that can't be moved, that tile will shake (code taken from W3schools).
    A tiles clicked count will be accumulated for display. Each time a tile is move a store colours
    function will be called. A checkColourMatch function is called to check colours in stored array
    to stored dice colours array.
*/

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
    document.getElementById("game-result").innerText = "CONGRATULATIONS!! Press START button to play again";
    document.getElementById("btn-start").innerText = "Start";
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
    const topDiff = parseInt(allDice[i].style.top) - startTop;   
    const leftDiff = parseInt(allDice[i].style.left) - startLeft; 
    const rowPos = topDiff / (diceTileWidth + diceTileGap);  
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
}


// Function to check if tiles match

function checkColourMatch() {
  
  tilesMatch = 0;

  for (let i = 0; i < gridColourArray.length; ++i) {
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

/* Timer Function, the time allowed is set to 5 minutes(300), When the time remaining
   is less the 30 secs, the time displayed will turn red. When remaining is 0, the game 
   is finished and a message will be displayed.
*/

function timerCount() {
  
  checkMediaQuery();     // Calling checkMediaQuery function to see if screen size has changed
  
  if (!gameInPlay) {    // If game not in play
    return;             // Exit out
  }
  
  const timeInPlay = Math.floor((new Date() - gameStartTime) / 1000);
  const timeRemaining = timeAllowed - timeInPlay;
  const minRemaining = Math.floor(timeRemaining / 60);
  const secRemaining = timeRemaining % 60;
  document.getElementById("timer").innerHTML = " " + minRemaining + ":" + (secRemaining < 10 ? ("0" + secRemaining) : secRemaining);
  
  if (timeRemaining <= 30) {
    document.getElementById("timer").style.color = "red";
  }

  if (timeRemaining <= 0) {
    gameInPlay = false;
    document.getElementById("game-result").innerText = "SORRY, times up!! Press START button to play again.";
    document.getElementById("btn-start").innerText = "Start";
  }

}


/* Media Queries, code taken and adapted for this game from 
    https://www.w3schools.com/howto/howto_js_media_queries.asp
    https://css-tricks.com/working-with-javascript-media-queries/
    https://webdevetc.com/blog/matchmedia-events-for-window-resizes/
*/
function checkMediaQuery() {
  const media320max = window.matchMedia("(max-width: 320px)");
  const media350max = window.matchMedia("(max-width: 360px)");
  const media414max = window.matchMedia("(max-width: 414px)");
  const media415min = window.matchMedia("(min-width: 415px)");   
 
  if (media320max.matches) {
    mediaAdjust320max();
  } else if (media350max.matches) {
    mediaAdjust350max();
  } else if (media414max.matches) {
    mediaAdjust414max();
  } else if (media415min.matches) {
    mediaAdjust415min(); 
  }
}

/* Functions to call & pass parameters to dynamically change dimensions for different screen sizes */

function mediaAdjust320max() {
  if (mediaInUse == "320max") {     // if already rendered for this size return out of this function
    return;
  }

  mediaAdjustAllDice(6, 25, 5);  // 1st: New Dice Border,   2nd: New Dice Width,   3rd: New Dice Gap
  mediaAdjustAllTile(8, 45, 7);    // 1st: New Tile Border,   2nd: New Tile Width,   3rd: New Tile Gap
  mediaInUse = "320max";
  
}

function mediaAdjust350max() {
  if (mediaInUse == "350max") {   // if already rendered for this size return out of this function
    return;
  }

  mediaAdjustAllDice(6, 25, 5);  // 1st: New Dice Border,   2nd: New Dice Width,   3rd: New Dice Gap
  mediaAdjustAllTile(8, 50, 8);    // 1st: New Tile Border,   2nd: New Tile Width,   3rd: New Tile Gap
  mediaInUse = "350max";
  
}

function mediaAdjust414max() {
  if (mediaInUse == "414max") {   // if already rendered for this size return out of this function
    return;
  }

  mediaAdjustAllDice(6, 25, 5);  // 1st: New Dice Border,   2nd: New Dice Width,   3rd: New Dice Gap
  mediaAdjustAllTile(8, 60, 8);    // 1st: New Tile Border,   2nd: New Tile Width,   3rd: New Tile Gap
  mediaInUse = "414max";
  
}

function mediaAdjust415min() {
  if (mediaInUse == "415min") {   // if already rendered for this size return out of this function
    return;
  }

  mediaAdjustAllDice(10, 50, 8);  // 1st: New Dice Border,   2nd: New Dice Width,   3rd: New Dice Gap
  mediaAdjustAllTile(10, 50, 8);    // 1st: New Tile Border,   2nd: New Tile Width,   3rd: New Tile Gap
  mediaInUse = "415min";
  
}

// Function to adjust the main tile area, background and dotted line using the parameters passed for sizing

function mediaAdjustAllTile(newTileBorder, newTileWidth, newTileGap) {
 
  let startTop = tileTop + tileBorder;
  let startLeft = tileLeft + tileBorder;
  let newStartTop = tileTop + newTileBorder;
  let newStartLeft = tileLeft + newTileBorder;

  const allGrid = document.getElementsByClassName('tile');

  for (let i = 0; i < allGrid.length; i++) {
    const topDiff = parseInt(allGrid[i].style.top) - startTop;
    const leftDiff = parseInt(allGrid[i].style.left) - startLeft;
    const rowPos = topDiff / (tileWidth + tileGap);
    const colPos = leftDiff / (tileWidth + tileGap);

    allGrid[i].style.height = newTileWidth + 'px';
    allGrid[i].style.width = newTileWidth + 'px';
    allGrid[i].style.top = newStartTop + (rowPos * newTileWidth) + (rowPos * newTileGap) + 'px';
    allGrid[i].style.left = newStartLeft + (colPos * newTileWidth) + (colPos * newTileGap) + 'px';

  }
  
  tileBorder = newTileBorder;
  tileWidth = newTileWidth;
  tileGap = newTileGap;
  
  const tileContainer = document.getElementById("tile-game-area");
  tileContainer.style.height = tileTop + tileContainerHeight() + 'px';
  tileContainer.style.width =  tileLeft + tileContainerWidth() + 'px';
  
  const tileBackground = document.getElementById("tile-back");
  tileBackground.style.height = tileContainerHeight() + 'px';
  tileBackground.style.width =  tileContainerWidth() + 'px';

  const tileDotted = document.getElementById("tile-dotted");
  tileDotted.style.height = tileDottedHeight() + 'px'; 
  tileDotted.style.width = tileDottedWidth() + 'px';
  tileDotted.style.top = tileDottedTop() + 'px';
  tileDotted.style.left = tileDottedLeft() + 'px';

}

// Function to adjust the DICE area, background and dotted line using the parameters passed for sizing

function mediaAdjustAllDice(newDiceBorder, newDiceWidth, newDiceGap) {

  let startTop = diceTileTop + diceTileBorder;
  let startLeft = diceTileLeft + diceTileBorder;
  let newStartTop = diceTileTop + newDiceBorder;
  let newStartLeft = diceTileLeft + newDiceBorder;

  const allGrid = document.getElementsByClassName('dice');

  for (let i = 0; i < allGrid.length; i++) {
    const topDiff = parseInt(allGrid[i].style.top) - startTop;
    const leftDiff = parseInt(allGrid[i].style.left) - startLeft;
    const rowPos = topDiff / (diceTileWidth + diceTileGap);
    const colPos = leftDiff / (diceTileWidth + diceTileGap);

    allGrid[i].style.height = newDiceWidth + 'px';
    allGrid[i].style.width = newDiceWidth + 'px';
    allGrid[i].style.top = newStartTop + (rowPos * newDiceWidth) + (rowPos * newDiceGap) + 'px';
    allGrid[i].style.left = newStartLeft + (colPos * newDiceWidth) + (colPos * newDiceGap) + 'px';

  }
  
  diceTileBorder = newDiceBorder;
  diceTileWidth = newDiceWidth;
  diceTileGap = newDiceGap;
  
  const tileContainer = document.getElementById("grid-area");
  tileContainer.style.height = diceTileTop + diceContainerHeight() + 'px';
  tileContainer.style.width =  diceTileLeft + diceContainerWidth() + 'px';
  
  const tileBackground = document.getElementById("dice-back");
  tileBackground.style.height = diceContainerHeight() + 'px';
  tileBackground.style.width =  diceContainerWidth() + 'px';
 
  const diceDotted = document.getElementById("dice-dotted");
  diceDotted.style.height = diceDottedHeight() + 'px'; 
  diceDotted.style.width = diceDottedWidth() + 'px';
  diceDotted.style.top = diceDottedTop() + 'px';
  diceDotted.style.left = diceDottedLeft() + 'px';
}
