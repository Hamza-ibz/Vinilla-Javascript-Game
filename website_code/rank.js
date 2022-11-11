var userArray = new Array();

//this for loop goes through all users in localstorage and stores the value in "userArray"
for ( var i = 0; i < localStorage.length; ++i ) {
    let usrObj = JSON.parse(localStorage.getItem( localStorage.key( i )));
    if(usrObj.score>=0){
        userArray[i] = usrObj;
    }
}

userArray.sort(function(a, b){return b.score-a.score}); //this sorts the array in terms of high to low scores


for ( var i = 0; i < localStorage.length; ++i ){
  var node = document.createElement("ol"); // The createElement() method creates an Element Node with the specified name.
  var textnode = document.createTextNode(userArray[i].userid + "  ................  " + "SCORE: "+userArray[i].score); // displays username and score on the ranking table
  node.appendChild(textnode); // After the element is created, use the element.appendChild() method to insert it to the document.
  document.getElementById("ranking").appendChild(node); 
}

function logout() { // logs the user out by clearing session storage
   
    if(sessionStorage.loggedInUsr !== undefined){
    alert("You have logged out")}
    location.reload();
    sessionStorage.clear();

}