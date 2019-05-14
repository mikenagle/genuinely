// Declare variables
var i=0;
var questionNumber = 1;
var endMessage = "Ooops, sorry we\'re out of questions";
var buttonText = document.getElementById('next_question').textContent = "Next"; //set button text
var questionsMixed = [];
var d = document.getElementById('previous_question');
var json_str;
var questionsTotal = questions.length;


//Function to shuffle array of questions
function shuffle(array)
{
  var counter = array.length, temp, index;
  while (counter > 0) 
  {
	index = Math.floor(Math.random() * counter--); //Pick a random index
    
    // And swap the last element with it
    temp = array[counter];
	array[counter] = array[index];
	array[index] = temp;
  }
  return array;
}

//Function to start a new game from scratch
function startNewGame() {
    document.getElementsByTagName('body')[0].className='loading' // remove the shuffle animation after a couple of sections
    questionsMixed = shuffle(questions); //Shuffle the questions
    json_str = JSON.stringify(questionsMixed); //Store the questions as a string for the cookie
//    console.log(questionNumber); //for debugging 
//    console.log(questionsMixed); //for debugging
//    console.log(json_str); //for debugging
    i=0; //set to first question
    document.getElementById('generated_question').textContent = questionsMixed[i].question + "?"; //display first question
    d.className = "invalid" //disable previous question button by adding invalid class
    storeGame(); // Store the game in localStorage
    storeQnumber(); //Store the question Number
    storeType(); //Store the question Number
}


// Function to get the next question
function nextQuestion() {
    i += 1; //increase i by 1
    questionNumber = i+1;
    storeQnumber(); //Store the updated question Number
    if (i < questionsMixed.length) { //if there are questions left
        d.className = "valid"; // Add valid class name to previous quesiotn button
        return questionsMixed[i].question + "?"; //give us back the question where we are now
    } else { //if no questions left
        buttonText = "Shuffle and Start Again" //change button text to shuffle and start again
        document.getElementById('next_question').textContent = buttonText; //set button text
        return endMessage; // return a sorry, run out message
    }
}

// Function to get the previous question
function prevQuestion() {
    if (d.className==="invalid" && i===1){
        // do nothing
    } else if (i === 1) { // i would become 0
        d.className = "invalid";
    } else
        d.className = "valid";
        i = i - 1; // decrease by one
        questionNumber = i+1;
        storeQnumber(); //Store the updated question Number
        return questionsMixed[i].question + "?"; // give us back the item of where we are now
}

// Clear storage and start again via page reload
function startAgain() {
    clearStorage();
    window.location.reload();
}

// Clear the Storage
function clearStorage () {
    localStorage.removeItem('questions');
    localStorage.removeItem('questionNumber');
    localStorage.removeItem('gameType');
}

/* Is SessionStorage available */
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x,x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return false;
    }
}

/*Store questions, if available */
function storeGame() {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('questions', json_str); // Yippee! We can use localStorage awesomeness
    }
    else {
	// Too bad, no localStorage for us
    }
}

/*Store questions, if available */
function storeQnumber() {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('questionNumber', questionNumber); // Yippee! We can use localStorage awesomeness
    }
    else {
	// Too bad, no localStorage for us
    }
}

/*Store gameType, if available */
function storeType () {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('gameType', gameType); // Yippee! We can use localStorage awesomeness
    }
    else {
	// Too bad, no localStorage for us
    }
}


/* Check to see if we have an active game */
function checkGameStatus() {
    if (localStorage.length != 0) { //If there's something in storage
        document.getElementsByTagName('body')[0].className='loaded' // don't show the shuffle animation at all
//        console.log("You are part way through a game"); //For debugging
        var retrievedQuestions = localStorage.getItem('questions'); //Retrieve the questions
        json_str = retrievedQuestions;
        questionsMixed = JSON.parse(json_str); //Parse the stored JSON string back into an array of questions
        questionNumber = parseInt(localStorage.getItem('questionNumber')); // Retrieve the question Number 
        i = questionNumber -1;
        document.getElementById('generated_question').textContent = questionsMixed[i].question + "?"; //display current question
    } else {
//        console.log("You have not started a game yet"); //For debugging
        document.getElementsByTagName('body')[0].className='loading' // show the shuffle animation 
        startNewGame();  //start a new game
    }
}


//On load.... 
window.addEventListener('load', function () {
    checkGameStatus(); // Check if there is there a game under way and display or load new game as appropriate
    document.getElementById('restart').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            startAgain(); // If user clicks restart button, start a new game
        }
    );
    document.getElementById('previous_question').addEventListener(
    'click', // we want to listen for a click
    function (e) { // the e here is the event itself
        if (i === 0) {
            // do nothing if already at start
        } else
            document.getElementById('generated_question').textContent = prevQuestion(); //get previous questions
        }
    );
// On button push, display next question  
    document.getElementById('next_question').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            if (buttonText === "Next") {
                document.getElementById('generated_question').textContent = nextQuestion(); //get next questions
            } else {
                startAgain(); //If no more questions, load a new game
            }
        }
    );
});
