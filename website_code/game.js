
function logout() {
   
    if(sessionStorage.loggedInUsr !== undefined){ 
    alert("You have logged out")} //informs the user 
    location.reload(); // refresh the page
    sessionStorage.clear(); // clears session storage
}

function changemodes() {
    location.reload();   // this relods the page 
}

//THESE ARE ASSIGNED VALUES AND WILL NOT CHANGE.
const holes = document.querySelectorAll('.hole'); // querySelectorAll() method returns all elements in HTML that matches a specified CSS selector(s) inputting it into an array.
const scoreBoard = document.querySelector('.score'); // querySelector() method returns only first element instead of all.
const moles = document.querySelectorAll('.mole'); 
const countdownBoard = document.querySelector('.countdown');
const playButton = document.querySelector('.playButton');
const highscoreboard = document.querySelector('.highscore');

//THESE VALUES WILL BE CHANGED, REPLACED AND DELETED AS THE GAME RUNS.
let lastHole;
let timeUp = false;
let score = 0;
let countdown;
let usrObj = JSON.parse(localStorage[sessionStorage.loggedInUsr]); // parse the user's (that is logged in) JSON string within the local storage. in order to obtain charaters within the object.

highscoreboard.textContent = 'HIGH SCORE: ' + usrObj.score; // displaying user high score

function checkhighscore(){ // checks if current score is greater then privous score. then updates high score
    if(score > usrObj.score){ 
        usrObj.score = score;
        localStorage.setItem([sessionStorage.loggedInUsr], JSON.stringify(usrObj)) // The setItem() method sets the value of the specified Storage Object item.
        highscoreboard.textContent = 'HIGH SCORE: ' + usrObj.score; 
    }
}

function easy() {
    if(sessionStorage.length === 0){ 
        alert("log in to play")  // informs the user to log in before playing the game.
        location.reload(); // reloads the webpage
        return;}
   
    wrapper = document.querySelector('.wrapper'); 
    wrapper.style.display ='block'; // changes display to block so the game is presented

    let timeLimit = 20000; // the time limit for the game to be played


//THIS FUNCTION PICKS A RANDOM HOLE FOR THE CHARACTER TO POP OUT FROM.
function pickRandomHole(holes) // pick random hole (in html)
{
    const randomHole = Math.floor(Math.random() * holes.length); // holes.length = 6, maths.random = 0 to 1, maths.floor rounds down. so generate number form 0 to 5 
    const hole = holes[randomHole]; // array of holes from 0 to 5. this corrisponds to holes in html. so holes[0] is hole1 in html

    if(hole === lastHole) // prevents character to pop up from the same hole if he does the function is runned again
        {

            return pickRandomHole(holes); // return stops a fuction 
        }

    lastHole = hole; // records previouse hole in which character pops out from
    return hole;
}

//THIS FUNCTION CONTROLS THE RANDOM TIME FROM WHICH THE CHARACTER WILL ANIMATE OUT FROM AND THEN GO BACK IN.
function popOut()
{
    const time = Math.random() * 1300 + 400;  // picks random number between 400 - 1700
    const hole = pickRandomHole(holes);
    hole.classList.add('up'); // adds a css "up" to ".hole"
    setTimeout(function()
              {
        hole.classList.remove('up');
        if(!timeUp) popOut();  //as soon as the time is up the character wont pop out of the hole
    }, time);
}

//THIS FUNCTION CONTROLS THE GAMEPLAY, GAMEOVER CONDITION.
function startGame()
{
    playButton.style.pointerEvents = 'none'; // removes the pointer from the button
    countdown = timeLimit/1000; // countdown time
    scoreBoard.textContent = 0 // this make sure the score is 0 even if u play it the second time
    countdownBoard.textContent = countdown; //this make sure the text countdown is shown even if you play it the second time
    timeUp = false; // making "timeup" false for the popOut() function
    score = 0; // this is the starting score
    popOut();
    setTimeout(function()
              {
        timeUp = true;
    }, timeLimit); // this function happens only once since it happens every 20000 millisecond (timelimit). it endes the game
    
    let startCountdown = setInterval(function()
                                    {
        countdown -= 1;
        countdownBoard.textContent = countdown; // this displays the countdown text as it reduces 
        if(countdown < 0) // shows what happens after the game is finished
            {
                countdown = 0;
                checkhighscore()// checks if score is greater then thier highscore
                clearInterval(startCountdown); // "clearinterval" stops the function from running 
                countdownBoard.textContent = 'NICE TRY! NOW PLAY AGAIN AND GET A BETTER SCORE.'
               
                playButton.style.pointerEvents = 'all';
            }
    }, 1000); // the function happens every second 
    
}

playButton.addEventListener('click', startGame); // as u click the play button it will run "startgame" function


//THIS IS WHERE THE PLAYER STARTS THE GAME AND HITS THE CHARACTER TO INCREASE THE SCORE.

function hit(e)
{
    score++; 
    this.style.backgroundImage = 'url("images/mole2.jpg")'; // when character is clicked it changes image.
    this.style.pointerEvents = 'none'; // prevents character being clicked muliple time which will increase the score
    setTimeout(() =>
              {
        this.style.backgroundImage = 'url("images/mole.jpg")'; // changes image to original.
        this.style.pointerEvents = 'all'; // before "pointerevent" was this.style.pointerEvents = 'none' now u need to be able to click the charater since before you only can click it once. use "all" so u can click it again
    }, 800);
    scoreBoard.textContent = score;
}
moles.forEach(mole => mole.addEventListener('click', hit)); // foreach means it executes the functtion on every element in the array within "moles". "mole" is a variable which holds the elements within "moles"
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function medium() {
    if(sessionStorage.length === 0){
        alert("log in to play") // informs the user to log in before playing the game.
        location.reload();  // reloads the webpage
        return;}
    wrapper = document.querySelector('.wrapper');
    wrapper.style.display ='block'; // changes display to block so the game is presented

let timeLimit = 10000;

//THIS FUNCTION PICKS A RANDOM HOLE FOR THE CHARACTER TO POP OUT FROM.
function pickRandomHole(holes) // pick random hole in html
{
    const randomHole = Math.floor(Math.random() * holes.length); // holes.length = 6, maths.random = 0 to 1, maths.floor rounds down. so generate num form 0 to 5 
    const hole = holes[randomHole]; // array of holes from 0 to 5. this corrisponds to holes in html. so holes[0] is hole1 in html

    if(hole === lastHole) // prevents character to pop up from the same hole if the does the function is runned again
        {

            return pickRandomHole(holes); // return stops a fuction 
        }
    lastHole = hole; // records previouse hole in which character pops out from
    return hole;
}

//THIS FUNCTION CONTROLS THE RANDOM TIME FROM WHICH THE CHARACTER WILL ANIMATE OUT FROM AND THEN GO BACK IN.
function popOut()
{
    const time = Math.random() * 800 + 100; // picks random number between 100 - 900
    const hole = pickRandomHole(holes);
    hole.classList.add('up'); // adds a css "up" to "hole"
    setTimeout(function()
              {
        hole.classList.remove('up');
        if(!timeUp) popOut();  //as soon as the time is up the character wont pop out of the hole
    }, time);
}

//THIS FUNCTION CONTROLS THE GAMEPLAY, GAMEOVER CONDITION AND MUSIC STOP.
function startGame()
{
    playButton.style.pointerEvents = 'none'; // removes the pointer from the button
    countdown = timeLimit/1000; // countdown time
    scoreBoard.textContent = 0 // this make sure the score is 0 even if u play it the second time
    countdownBoard.textContent = countdown; //this make sure the text countdown is shown even if u play it the second time
    timeUp = false; // making "timeup" false for the popOut() function
    score = 0; // this is the starting score
    popOut();
    setTimeout(function()
              {
        timeUp = true;
    }, timeLimit); // this function happens only once since it happens every 20000 millisecond. it endes the game
    
    let startCountdown = setInterval(function()
                                    {
        countdown -= 1;
        countdownBoard.textContent = countdown; // this displays the countdown text as it reduces 
        if(countdown < 0)
            {
                countdown = 0
                checkhighscore()
                clearInterval(startCountdown); // clearinterval stops the function from running 
                countdownBoard.textContent = 'NICE TRY! NOW PLAY AGAIN AND GET A BETTER SCORE.'
               
                playButton.style.pointerEvents = 'all';
            }
    }, 1000); // the function happens every second 
    
}



//THESE ARE BUTTON EVENTS WHICH START THE GAME AS WELL AS THE BACKGROUND MUSIC.
playButton.addEventListener('click', startGame); // as u click the play button it will run "startgame" function


//THIS IS WHERE THE PLAYER STARTS THE GAME AND HITS THE ALIENS TO INCREASE THE SCORE.

function hit(e)
{
    score = score + 2; 
    this.style.backgroundImage = 'url("images/mole2.jpg")'; 
   
    this.style.pointerEvents = 'none'; // prevents character being clicked muliple time which will increase the score
    setTimeout(() =>
              {
        this.style.backgroundImage = 'url("images/mole.jpg")';
        this.style.pointerEvents = 'all'; // before "pointerevent" was this.style.pointerEvents = 'none' now u need to be able to click the charater since before u only can click it once. use "all" so u can click it again
    }, 800);
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', hit)); // foreach means it executes the functtion on every element in the array within "moles". "mole" is a variable which holds the elements within "moles"


}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function hard(){
    if(sessionStorage.length === 0){
        alert("log in to play")
        location.reload(); 
        return;}
    wrapper = document.querySelector('.wrapper');
    wrapper.style.display ='block';

const badmoles = document.querySelectorAll('.molebad'); // this is the character if you hit you lose point

let timeLimit = 10000;
    
let usrObj = JSON.parse(localStorage[sessionStorage.loggedInUsr]);
highscoreboard.textContent = 'HIGH SCORE: ' + usrObj.score;

//THIS FUNCTION PICKS A RANDOM HOLE FOR THE ALIEN TO POP OUT FROM.
function pickRandomHole(holes) // pick random hole in html
{
    const randomHole = Math.floor(Math.random() * holes.length); // holes.length = 6, maths.random = 0 to 1, maths.floor rounds down. so generate num form 0 to 5 
    const hole = holes[randomHole]; // array of holes from 0 to 5. this corrisponds to holes in html. so holes[0] is hole1 in html
    // prevents luffy to pop up from the same hole if he does the function is runned again
    if(hole === lastHole) // lasthole = 0
        {
            return pickRandomHole(holes); // "return" stops a fuction 
        }
    lastHole = hole; // records previouse hole in which luufy pops out from
    return hole;
}

//THIS FUNCTION CONTROLS THE RANDOM TIME FROM WHICH THE ALIEN WILL ANIMATE OUT FROM AND THEN GO BACK IN.
function popOut()
{
    const time = Math.random() * 800 + 100; // picks random number between 100 - 900
    const hole = pickRandomHole(holes);
    hole.classList.add('up'); // adds a css "up" to "hole"
    setTimeout(function()
              {
        hole.classList.remove('up');
        if(!timeUp) popOut();  //as soon as the time is up the character wont pop out of the hole
    }, time);
}

function popOutb()
{
    const time = Math.random() * 800 + 100;
    const hole = pickRandomHole(holes);
    hole.classList.add('ups'); // adds a css "up" to "hole"
    setTimeout(function()
              {
        hole.classList.remove('ups');
        if(!timeUp) popOutb();  //as soon as the time is up the character wont pop out of the hole
    }, time);
}

//THIS FUNCTION CONTROLS THE GAMEPLAY, GAMEOVER CONDITION AND MUSIC STOP.
function startGame()
{
    playButton.style.pointerEvents = 'none'; // removes the pointer from the button
    countdown = timeLimit/1000; // countdown time
    scoreBoard.textContent = 0 // this make sure the score is 0 even if u play it the second time
    countdownBoard.textContent = countdown; //this make sure the text countdown is shown even if u play it the second time
    timeUp = false; // making "timeup" false for the popOut() function
    score = 0; // this is the starting score
    popOut();
    popOutb()
    setTimeout(function()
              {
       timeUp = true;
    }, timeLimit); // this function happens only once since it happens every 20000 millisecond. it endes the game
    
    let startCountdown = setInterval(function()
                                    {
        countdown -= 1;
        countdownBoard.textContent = countdown; // this displays the countdown text as it reduces 
        if(countdown < 0)
            {
                countdown = 0;
                checkhighscore()
                clearInterval(startCountdown); // clearinterval stops the function from running 
                countdownBoard.textContent = 'NICE TRY! NOW PLAY AGAIN AND GET A BETTER SCORE.'
               
                playButton.style.pointerEvents = 'all';
            }
    }, 1000); // the function happens every second 
    
}

playButton.addEventListener('click', startGame); // as u click the play button it will run "startgame" function


//THIS IS WHERE THE PLAYER STARTS THE GAME AND HITS THE CHARACTER TO INCREASE THE SCORE.

function hit(e)
{
    score = score + 3; 
    this.style.backgroundImage = 'url("images/mole2.jpg")'; 
   
    this.style.pointerEvents = 'none'; // prevents character being clicked muliple time which will increase the score
    setTimeout(() =>
              {
        this.style.backgroundImage = 'url("images/mole.jpg")';
        this.style.pointerEvents = 'all'; // before "pointerevent" was this.style.pointerEvents = 'none' now u need to be able to click the charater since before u only can click it once. use "all" so u can click it again
    }, 800);
    scoreBoard.textContent = score;
}

function wronghits(e)
{
    if(score>0)
    score = score - 1; 
    this.style.backgroundImage = 'url("images/mole2.jpg")'; 
   
    this.style.pointerEvents = 'none'; // prevents character being clicked muliple time which will increase the score
    setTimeout(() =>
              {
        this.style.backgroundImage = 'url("images/brook.jpg")';
        this.style.pointerEvents = 'all'; // before "pointerevent" was this.style.pointerEvents = 'none' now u need to be able to click the charater since before u only can click it once. use "all" so u can click it again
    }, 800);
    scoreBoard.textContent = score;
}


moles.forEach(mole => mole.addEventListener('click', hit)); // foreach means it executes the functtion on every element in the array within "moles". "mole" is a variable which holds the elements within "moles"
badmoles.forEach(mole => mole.addEventListener('click', wronghits))



}


