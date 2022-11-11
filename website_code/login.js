   
        
window.onload = checkLogin;//Check to see if user is logged in already. this happens as soon as the webpage loads

function checkLogin(){
    if(sessionStorage.loggedInUsr !== undefined){
        let usrObj = JSON.parse(localStorage[sessionStorage.loggedInUsr]); //parse the JSON object to Extract details of logged in user

        document.getElementById("login").innerHTML = usrObj.userid + " logged in."; // informs user has logged in
    }
}

function logout() { // logs the user out by clearing session storage
   
    if(sessionStorage.loggedInUsr !== undefined){
    alert("You have logged out")}
    location.reload();
    sessionStorage.clear();

}

let cookies = document.cookie;

function donelogin(){
    //Get email address
    let username = document.getElementById("username").value;
    
    //User does not have an account
    if(localStorage[username] === undefined){
        document.getElementById("loginFailure").innerHTML = "User or password not recognized. Do you have an account?"; //Inform user that they do not have an account
        return; 
    }
    //User has an account
    else{       
        let usrObj = JSON.parse(localStorage[username]);//Convert to object
        let password = document.getElementById("password").value;
        if(password === usrObj.password ){     //Successful login
            document.getElementById("login").innerHTML = usrObj.userid + " logged in.";  // informs user has logged in  
            sessionStorage.loggedInUsr = usrObj.userid;  // storeing user in session storage
        }
        // user input incorrect password
        else if (!(password === usrObj.password)){
            document.getElementById("loginFailure").innerHTML = "User or Password not correct. Please try again."; // informs user inputs incorrect details
        }
    }
}





function doneregister(){
    //Build object that we are going to store user details
    var usrObject = {};
    usrObject.userid = document.getElementById("newuser").value;
    usrObject.password = document.getElementById("newpassword").value;
    usrObject.email =  document.getElementById("email").value;
    usrObject.phone =  document.getElementById("phone").value;
    usrObject.score = 0;
    
    for(i = 0; i < localStorage.length; i++){ // for loop that goes through details within local storage

        x = localStorage.key(i); // stores user within "x"
        if(usrObject.userid == x){  // check if user id is within local storage
            alert("user already exist choose another"); // informs the user
                   return;
        }
        
    }
    
    document.getElementById("Result").innerHTML = "<b></b>";

     if(usrObject.password.length < 5) { // checks password length
            alert("password must be 5 characters");
               return;}

    
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usrObject.email))) // regular expression which checks the format of the email
    {
      alert("You have entered an invalid email address!") // if format does not match informs the user
        return;
    }

    if (!(/((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/g.test(usrObject.phone))) // regular expression which checks the format of the phone number
    {
      alert("You have entered an invalid phone number!") // if format does not match informs the user
        return;
    }

    if(usrObject.phone.length>11){ // checks the length of phone number
        alert("You have entered an invalid phone number!") 
        console.log(!(usrObject.phone.length<=11))
          return;}
  

    //Store user in local storage
    localStorage[usrObject.userid] = JSON.stringify(usrObject);
    
    //Inform user of has succeddfully registered
    document.getElementById("Result").innerHTML = "<b>Registration successful.</b>";

    }

    // animation from switching from login and register forms when clicking the buttons
             var t =document.getElementById("login");       
             var y =document.getElementById("register");
             var z =document.getElementById("btn");
               
               function register(){
                   t.style.left = "100%"; 
                   y.style.left = "5%";
                   z.style.left = "50%";
               }
               
               function login(){
                   t.style.left = "5%"; 
                   y.style.left = "100%";
                   z.style.left = "0%";
               }
