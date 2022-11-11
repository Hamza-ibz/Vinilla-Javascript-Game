<?php
     
    include('common.php'); // Include the PHP functions to be used on the page
    outputHeader("Login Page"); // outputs the head, title and link. with the $Tab_title of "Login Page"
    Navigation("Login"); // outputs the banner and the navigation bar along side a number of images. contains the $Page_title of "Login".
 
?>

<!-- Contents of the page -->
<h1> Login/Register </h1> <!-- title of the login page -->
<div class="form-box"> <!-- grey box contains the whole form -->
    <div class="button-box"> <!--  long rectangle contains login and register buttons -->
        <div id="btn"></div>  <!-- small black and red button that moves from login to register-->
        <button type="button" class="toggle-btn" onclick="login()">login</button>
        <button type="button" class="toggle-btn" onclick="register()">register</button>
    </div>
    <form onsubmit= "return false" id="login" class="input-group"> <!-- form with user and pass which slides (its hidden when this happens)-->
        <input type="text" class="input-field" placeholder="user id" id="username" required>
        <input type="password" class="input-field" placeholder="password" id="password" required>
        <!-- <input type="text" class="input-field" placeholder="email" id="lemail" required> 
        <input type="text" class="input-field" placeholder="phone number" id="lphone" required>  -->
        <button type="submit" class="submit-btn" onclick="donelogin()">log in</button>
        <p id="loginFailure" style="color:red;"></p>
    </form>

    <form onsubmit= "return false" id="register" class="input-group">
        <input type="text" class="input-field" placeholder="user id" id="newuser" required>
        <input type="password" class="input-field" placeholder="password" id="newpassword" required>
        <input type="text" class="input-field" placeholder="email" id="email" required> 
        <input type="text" class="input-field" placeholder="phone number" id="phone" required> 
        <button type="submit" class="submit-btn" onclick="doneregister()">register</button>
        <p id="Result"></p>
    </form>
</div>

<script type="text/javascript" src="login.js"></script>

<?php

    outputFooter(); // Output the footer
