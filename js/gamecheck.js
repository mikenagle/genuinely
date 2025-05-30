//is storage being used?
var playingGame;

function setGameType() {
    if (localStorage.length != 0) { //If there's something in storage
            playingGame = localStorage.getItem('gameType'); // Retrieve the gameType
    } 
//    else if {
//            playingGame = "no game yet";
//    } else {
//            playingGame = "nothing in storage";
}

/* Check to see if we have an active game */
function checkStatus() {
    if (localStorage.length != 0) { //If there's something in storage
        
            var elem = document.getElementById('continueButton');            
            var button = document.createElement("button");        // Create a <button> element
            button.className = ('start outline'); 
            button.innerHTML=('Continue game');
            elem.appendChild(button); 
            console.log(playingGame); //for debugging 
            if (playingGame == "conversation") {
                    var elem = document.getElementById('continueButton'); // link to ask.html
                    elem.href = "/ask/index.html";
                } else if (playingGame == "quickfire") {
                    var elem = document.getElementById('continueButton'); // link to ask.html
                    elem.href = "/ask/quickfire.html"; // link to quickfire.html
                } else if (playingGame == "smut") {
                    var elem = document.getElementById('continueButton'); // link to ask.html
                    elem.href = "/ask/smut.html"; // link to smut.html
                }
    }
}

// Show the option buttons
function showOptions () {
        var elem = document.getElementById('options');
            elem.style.display=('inline-block');
        var elem2 = document.getElementById('secretoption');Add commentMore actions
            elem2.style.display=('inline-block');
        var elem3 = document.getElementById('startnew');
            elem3.style.display=('none');
        var elem4 = document.getElementById('continueButton');
            elem4.style.display=('none');
}
            
function hideOptions () {
        var elem = document.getElementById('options');
            elem.style.display=('none');
        var elem2 = document.getElementById('secretoption');Add commentMore actions
            elem2.style.display=('none');
        var elem3 = document.getElementById('startnew');
            elem3.style.display=('inline-block');
        var elem4 = document.getElementById('continueButton');
            elem4.style.display=('inline-block');
}
            
// Clear the Storage
function clearStorage () {
    localStorage.removeItem('questions');
    localStorage.removeItem('questionNumber');
    localStorage.removeItem('gameType');
}      
    

//On load.... 
window.addEventListener('load', function () {
    setGameType();
    checkStatus(); // Check if there is there a game under way
});




//                <a href="ask/index.html"><button class="start">Continue existing game</button></a>

// if yes, then show the continue button (if no then don't show the continue button)


// if start new game button is pushed, clear the storage and go to index

// if continue game button is pushed, go to index

