# Colour Sort Puzzle

## Introduction

The Color Sort Puzzle is a game of skill and speed. The user is presented with a grid of 24 colour tiles. On the grid, there are 6 different colours with 4 tiles of each colour. There is a space on the grid to allow users to move the coloured tiles around the grid. There is also a mini grid or dice of nine coloured tiles displayed on screen and the aim of the game is for the player to match the inner 9 tiles on the main grid with the 9 colour tiles on the mini grid/dice.

Once the user clicks a start button, the tiles on the mini grid/dice and the main coloured grid will be mixed. A countdown of five minutes will start.The player can move the tiles on the main grid by clicking on the tile on a desktop or by touch on an ipad or mobile. The only moveable tiles will be the ones beside the empty space.

Once the colour tiles are matched the timer will stop and a congratulatory message will be displayed at the bottom of the screen. If, however, the time runs out before all nine tiles are matched, a 'times up' message will be displayed. The user is given an option to play again by pressing the start button. 

There is also an instruction button at the top of the screen. Once this button is pressed a modal window with instructions will explain the rules of the game. There will be an exit from this window back to the game.

![alt text](assets/documentation/Multi-Device.png)


## Design Process
The inspiration for this project came from a game called Rubiks Race.

![alt text](assets/images/RubiksRace.jpg)

 This game is in our home for many years and all members of the family, big and small have had hours of enjoyment playing it. With the physical game you can play against another player. The first to solve the puzzle by matching the nine inner tiles on a colour grid to the nine colours that appear on the dice wins. I adapted this game for my project to play against a timer countdown.
I set up a test repository to test if I could build the grid of colours using javascript. Some of the challenges in the javascript module with Code Institute also gave me inspiration. There are challenges with coloured tiles and clickable buttons. 

### Wireframes
[Wireframes](https://github.com/Catrionamcd/Colour-Sort-Puzzle/tree/master/assets/wireframes)

![Desktop Wireframe](assets/wireframes/Desktop-Wireframe.png)
![IPad Wireframe](assets/wireframes/IPad-Wireframe.png)
![Mobile Wireframe](assets/wireframes/Mobile-Wireframe.png)

The design was changed to place the rules button beside the start button to make it more visible as some players did not see the rules button on the top left hand side of the screen. 
## User Stories

* As site owner I wanted to:
  * Create a fun game that would replicate the physical game that we 
enjoyed with family and friends.
  * Make it inviting and colourful.
  * Make it easy to navigate and play.
  * Make it exciting by playing against a timer.
  * Make the player want to play again by beating their own score.
  * To be able to play on many different devices.
  * Players of all ages and abilities can play.

* For the player:
  * Have a fun game to challenge yourself.
  * Clearly see the rules of the game. 
  * Clearly see your progress as you work through the challenge.
  * Make it attractive with bright colours and simpe layout.
  * Make it exciting by playing against a timer countdown.
  * Play against yourself by playing a second time to try improve on your 
time and tiles moved.
  * Easy to re-start if you feel you cannot complete the challenge.
  * Easy to start a second challenge once one is completed.
## Features
### Existing Features
#### Rules/Instructions
A rules button is displayed beside the start button at top of the screen.

![alt text](assets/documentation/Rules-Start-Btn.png)


Once clicked the player will be presented with a modal window with the game rules or instructions. The player can exit this window and return to the game by pressing the 'x' on the top right hand side of the window or simply by clicking outside the window.

Code used and amended from W3Schools, the link is :
   https://www.w3schools.com/howto/howto_css_modals.asp

![alt text](assets/documentation/Instructions-Window.png)
#### Start/Restart Button
Once the player presses the START button the colour tiles will be mixed up on both grids. The counters of tiles matched and tiles moves will be reset.

The button will change to a RE-START button and a countdown timer will start counting down from 5 minutes.

![alt text](assets/documentation/Restart-Btn.png)

#### Timer
As soon as the start button is pressed the timer will start counting down from five minutes, as soon as 30 seconds are reached the time will be displayed in red.
 

![alt text](assets/documentation/30Sec-Timer.png)

#### Colour Dice Grid

This is the smaller of the two colour grids. It is made up of nine coloured tiles, in three rows and three columns. Once the START button is pressed the colours on this dice will be mix up. These are the colours that have to be matched.

![alt text](assets/documentation/Colour-Dice-Grid.png)

#### Main Colour Grid

This is the main section of the game. This is where the player will move the colour tiles around the grid to try match the colours on the dice grid. On a desktop the tiles can be moved by clicking on them. On other devices the tiles can be moved by touch. There are six different colours with four tiles of each colour. There is also a blank space to allow the player to move the tiles around the grid. Only tiles beside the blank space can be moved. If a tile, that is not beside a blank space, is clicked, the tiles will shake to alert the user that this tile cannot be moved. 

For the shake effect, code was used and amended from W3Schools, the link is :
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_shake
   
The tiles that have to match the dice tiles are the nine inner tiles. A dotted line border, the same as the dotted line border around the dice, is displayed around this area to inform the player that these are the tiles that have to be matched. 

 ![alt text](assets/documentation/Main-Colour-Grid.png)

#### Game Progress

Along with the timer countdown, the player is also shown how many tiles are matched as they are playing the game and how many tiles have been moved in the game. If the player wants to play again they can try improve on their time or maybe the amount of tiles it took to complete the game.

![alt text](assets/documentation/Tiles-Match-Move.png)

#### End Of Game Messages

If the player matches all nine inner tiles within the 5 minutes, the game will stop, a congratulatory message will be displayed. The time taken to match all nine tiles will be displayed on the screen along with the number of tiles matched and the tiles moved to achieve that match. The re-start button will be set back to start.

![alt text](assets/documentation/Congratulation-Message.png)

If, however, the player is unable to match all nine tiles within the five minutes, a message will be displayed to inform them and they will get a chance to play again.

![alt text](assets/documentation/Sorry-Message.png)

### Features Left to Implement
* Leader Board Page - In the original design of the game, I had hoped to allow the user to enter their name and their scores, time taken to complete the puzzle and the amount of moves made. These details would be displayed on a Leader Board screen with a list of other players. I had planned to display up to 6 names. This list would only be stored for the duration of the game.
### Future features
* Levels of difficulty - the player could be presented with a choice as to  what level of difficulty they would like to play. This could be determined by the countdown time. There could be three different levels with a different countdown time for solving the puzzle. I have a countdown of 5 minutes, that could be the intermediate level. For those who need a bit more time, possible 7 minutes and for those that really would like a challenge, possible 3 minutes.

* The amount of coloured tiles could be extended to make the game more complex and challenging.
* The coloured tiles could display images like cartoon characters for younger players to try match.

## Technologies
### Languages Used
* HTML5
* CSS3
* JavaScript
### Framework, Libraries, Programs Used
* Balsamiq - Balsamiq ws used to create all wireframes designs for the game including desktop, iPad & mobile.
* Google Fonts - The Ubuntu font was used on all text in the game.
* FontAwesome - An icon of a stopwatch was used as a symbol beside the time as its counting down from five minutes.
* GitPod - Git was used for version control by utilizing the Gitpod terminal to add and commit changes with messages to Git and Push to GitHub.
* GitHub - used to store the project code and deploy the project.
* PicResize - The images of the physical game were reduced in size using PicResize.
* Google Chrome Dev Tools - this was used to display console.log while debugging JavaScript code. It was also used to test reponsiveness for the game and how it rendered on the different size devices.


## Testing

#### Rules/Instructions
* When the rules button is clicked a modal window should appear with the rules/instruction of the game.
* Check once the 'x' to exit the window is pressed the window is closed.
* If a player clicks outside the window check that the window closes.
* As the owner, I tested to ensure that the rules of the game were clearly laid out and easy to access at any stage of the game.
* As a player, the instructions are easily accessed and easy to understand.

#### Start Button
* Test that both colour grids mix when the start button is pressed and the timer countdown begins.
* Test that the start button becomes a re-start button once the game commences.
* If the re-start button is pressed in the middle of a game, the game should re-commence. All counters reset and timer starts again.
* Test that it reverts to a start button when the game finishes.

#### Main Colour Grid

* Test that all six colours are being displayed in the main colour grid and that there is only four of each colour.
* Test random mix of colours.
* Make sure there is a blank space for movement of tiles.
* Allow tiles to move but only tiles beside the blank space.
* If a tile, that is not beside a blank space, is clicked ensure that the tile shake function is executed to alert the player that this is a wrong move.
* As a player, the shake on the tile displays that this is an invalid move.
* Make sure that the tile moves into the position of the blank space.
* Each time a tile is move a check will have to occur to see if the nine inner tiles are matching the dice tiles that are stored in an array.
* If all nine inner tiles match the dice tiles, ensure that the timer ends and a message is displayed, otherwise game continues.
* Displaying the message demonstrates to the player that the match is complete and they have won the game, other wise their time is up.

#### Dice Grid

* Test random mix of colours.
* Ensure that each colour does not exceed 4 coloured tiles.
* Make sure the colours are stored in an array for comparison with the nine inner tiles on the  main colour tile grid everytime a tile is moved in the main grid.

#### Counters
* Test that each time a tile is move the tile move counter accumulates.
* Test that each time a tiles is matched that the tile matched counter accumulates.
* As a player, you can see your progress as you try to complete the challenge.

#### Timer
* Ensure that the time is counting down properly.
* Once the timer hits 30 seconds on the countdown the time displayed should turn red.
* As a player, it makes it more exciting when the timer goes red as you realise your time is nearly up.
* Once time reaches zero the game stops and a message is displayed.

#### Messages
* Ensure the correct message is being displayed depending on the outcome of the game.
* Once the game is re-started the message should no longer appear on the screen.
### Browser Testing
Tested that the game ran on multiple browsers including:
 * Google Chrome
 * Firefox
 * Safari
 * Brave
 * Epic

 Tested on multiple device for responsiveness.

### Validator Testing
HTML
* No errors were found in the code when passing through the W3C Markup Validation Service,
[HTML](https://validator.w3.org/)

![alt text](assets/documentation/HTML-Code-Validator.png)

CSS
* No errors were found in the code when passing through the official (Jigsaw) validator,
 [CSS](https://jigsaw.w3.org/css-validator/)

 ![alt text](assets/documentation/CSS-Code-Validator.png)


 JavaScript
 * No errors were found in the code when passing through the JSHint, a JavaScript Code Quality Tool,
 [JavaScript](https://jshint.com/)

 ![alt text](assets/documentation/JavaScript-Code-Validator.png)


### Bug Fixes

#### Responsive Design & Styling

I tried numerous different backgrounds for the game but felt that there was so many colours in the tiles already that it didnt need a background. I also felt that any background I tried, no matter how subtle, detracted from the game.

I also felt that the game lends itself better to a mobile phone, hence the reason why I tried to have as much of the information visible for a mobile while playing the game. For an Ipad, I would consider the screen height along with the screen width in my media queries if I had had more time.

#### Dice Colour Grid

When playing the physical game, the dice never seemed to throw up more than 4 of one colour, however the digital game soon show me that not only was this possible but seem to happen more than you would think. This, of course, would make the game unplayable as there are only 4 colours tiles of each colour on the main grid. I had to then factor this into the code. In the function to mix up the dice colours, I had to check if the max number of colours was exceeded and if so, I had to mix the colours again. 

#### Tile Id's

Each tile in both grids is a unique div that is created in javascript and has a sequential number as it's id. At first, I had the main colour tile grid appearing on the left hand side of the screen and the dice on the right. My mentor pointed out that it might be better to have the dice appear first. It wasn't until I made the change that I realised that at the begining of the function to create the dice grid I was initialising the tile id, which meant that all nine of the dice tile divs had the same div id as the first nine tiles in the main grid. Needles to say, it presented some very strange results in testing. When I clicked a tile to be moved, the dice tile moved instead. I now initalise the tile id at the begining of the javascript file only and each tile div now has its own unique id.


## Deployment
The site was deployed to GitHub pages. The steps to deploy the site are :

* Opened GitHub & selected the Colour-Sort-Puzzle repository from the repositories listed on the left hand side of the screen.

* Within the Colour Sort Puzzle repository select the settings button at the top right hand side of the screen.

* In the settings page, scroll down & choose the Github pages. 
* In the Github page select a source of master as a branch name
from the source section drop-down menu.
* Once the branch name is selected click save.

The deployed link will be published at the top of the GitHub page.
The live link can be found here - https://catrionamcd.github.io/Colour-Sort-Puzzle/

## Credits

* W3Schools for the modal window and the error tile shake.
* Stack Overflow.
* YouTube Tutorial Countdown Timer.
* My mentor Maria Hynes who gave me great encouragement and advice throughout the project.
* My family, who all helped with the testing and played the game on their own devices and also helped with the logic of some parts of the game.


### Content

I based the game on Rubik's Race, a really fun game that everyone can enjoy.

