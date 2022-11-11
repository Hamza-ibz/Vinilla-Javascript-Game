<?php
function outputHeader($Tab_title){  // This is a function in which outputs the head, title and link. It has a variable "$Tab_title"
    echo '<!DOCTYPE html>';
    echo '<html>';    
    echo '<head>';      // within the <head> tag it contains title and link
    echo '<title>' . $Tab_title . '</title>'; // within the <title> tag it contains a argument of "$Tab_title" in which it differs for each page. the "title" is presented within the tab of the browser
    echo '<link href="index.css" rel="stylesheet"/>'; // The <link> tag allows to link between pages of code. (allows relationship between the current document and an external resource.)
    echo '</head>'; // closeing for the <head> tag
    echo '<body>'; // opening of the body
}

function Navigation($Page_title){ // this function outputs the banner and the navigation bar along side a number of images.
    echo '<header>';
    echo '<nav>';
    echo '<ul>'; // unordered list for the navigation button
    echo '<div class="logo"<li><a href="home.php"> logo </a> </div>'; // navigation button ("logo") within a list which directs to the home page ("home.php"). has the class logo

        $linkNames = array("Home", "Login", "Game", "Rank"); // array of the pages within the website
        $linkAddresses = array("home.php", "login.php", "game.php", "rank.php");  // array of links to the pages

        $i = 0; // variable set to 0 for the while loop
        while($i < count($linkNames)){  //Output navigation using while loop. while loop only activates when variable i is less then the length of linkNames
            echo '<li><a ';   // <li> list containing the navigation buttons. The <a> tag is used to link from one page to another.
            if($linkNames[$i] == $Page_title){ // if element within linknames equals to page_title the page will have the class "selected"
                echo 'class="selected" ';
            }
            
            echo 'href="' . $linkAddresses[$i] . '">' . $linkNames[$i] . '</a> </li> '; //href attribute indicates the link's destination ($linkAddresses) for "$linkNames".
            $i++; // variable i incremented by 1 for the loop to continue
        }
    echo '</ul>'; // end of the unordered list (contains the list of navigation)
    echo '</nav>'; // closeing tag for navigation
    echo '</header>'; // closing tag for the header
    echo ' <button type="button" id="logout" onclick="logout()" >log out</button>';

        // this is the images along the right and left side of the page 
    echo '     <div class="image-boarder-rightside">
            <img class="pics" src="images/luffy.jpg">
            <img class="pics" src="images/zoro.jpg" >
            <img class="pics" src="images/sanji.jpg" >
            <img class="pics" src="images/usop.jpg" >
            <img class="pics" src="images/franky.jpg" >
            <img class="pics" src="images/brook.jpg" >
            <img class="pics" src="images/chopper.jpg" >
            <img class="pics" src="images/nami.jpg" >
            <img class="pics" src="images/robin.jpg" >
            </div>    
        
    <div class="image-boarder-leftside">
            <img class="pics" src="images/luffy.jpg">
            <img class="pics" src="images/zoro.jpg" >
            <img class="pics" src="images/sanji.jpg" >
            <img class="pics" src="images/usop.jpg" >
            <img class="pics" src="images/franky.jpg" >
            <img class="pics" src="images/brook.jpg" >
            <img class="pics" src="images/chopper.jpg" >
            <img class="pics" src="images/nami.jpg" >
            <img class="pics" src="images/robin.jpg" > 
            </div>';   
    
}


function outputFooter(){ // Outputs the footer, closing body tag and closing HTML tag
    echo '
          <footer> 
            <h2>Footer</h2>
          </footer>';
    echo '</body>';
    echo '</html>';
}

