<?php 

    include('common.php'); // Include the PHP functions to be used on the page
    outputHeader("Home Page"); // outputs the head, title and link. with the $Tab_title of "Home Page"
    Navigation("Home"); // outputs the banner and the navigation bar along side a number of images. contains the $Page_title of "Home".
?>

<!-- Contents of the page -->
<h1> Home </h1> <!-- title of the home page -->
<p id = about> The game consists of 6 holes in which the character pops up at random, for a while, 
    <br> before hiding back. Points are awarded by clicking each character
    <br> as it appears out of the hole. The more characters you click the higher the score.
    <br>However, the user has a time limit to hit as many of the characters possible, if the time hits 
    <br>0 second the game is over, and the score will be recorded in the ranking 
    <br>table along with other users. 
</p>

<?php

    outputFooter(); // Output the footer

