<?php
    
    include('common.php'); //Include the PHP functions to be used on the page
    outputHeader("Rank Page"); // outputs the head, title and link. with the $Tab_title of "Rank Page"
    Navigation("Rank"); // outputs the banner and the navigation bar along side a number of images. contains the $Page_title of "Rank".
?>

<!-- Contents of the page -->
<h1> Ranking </h1> <!-- title of the rank page -->
<main>
<ol id = "ranking">
</ol>
</main>

<script src="rank.js"></script>
<?php

    outputFooter(); // Output the footer
