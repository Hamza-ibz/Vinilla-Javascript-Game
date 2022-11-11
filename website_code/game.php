<?php
    
    include('common.php'); //Include the PHP functions to be used on the page
    outputHeader("Game Page"); // outputs the head, title and link. with the $Tab_title of "Game Page"
    Navigation("Game"); // outputs the banner and the navigation bar along side a number of images. contains the $Page_title of "Game".
?>

<!-- Contents of the page -->
<h1> Game </h1> <!-- title of the game page -->
<!-- <img class="game_content" src="images/game.jpg"> image with the content of the game page -->

<div class="blank">
<button class="EASY" onclick="easy()">EASY</button>
<button class="MEDIUM" onclick="medium()">MEDIUM</button>
<button class="HARD" onclick="hard()">HARD</button>
</div>


<div class="wrapper">
        <div class="score">0</div>
        <div class="highscore">HIGH SCORE: 0</div>
        <div class="countdown">countdown</div>
        <button class="playButton">PLAY</button>
        <button class="changemodes" onclick="changemodes()">change modes</button>

        
        <div class="game">
            <div class="hole hole1">
                <div class="mole small"></div>
                <div class="molebad"></div>
            </div>
            <div class="hole hole2">
                <div class="mole small"></div>
                <div class="molebad"></div>
            </div>
            <div class="hole hole3">
                <div class="mole small"></div>
                <div class="molebad"></div>
            </div>
            <div class="hole hole4">
                <div class="mole large"></div>
                <div class="molebad"></div>
            </div>
            <div class="hole hole5">
                <div class="mole large"></div>
                <div class="molebad"></div>
            </div>
            <div class="hole hole6">
                <div class="mole large"></div>
                <div class="molebad"></div>
            </div>
            
        </div>
    </div>



    
    
    <script src="game.js"></script>

<?php

    outputFooter(); // Output the footer
