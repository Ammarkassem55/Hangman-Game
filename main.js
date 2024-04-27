const letters = "abcdefghijklmnopgrstuvwxyz";
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");
lettersArray.forEach(letter =>{
    let span = document.createElement("span")
    let theLetter = document.createTextNode(letter);
    span.appendChild(theLetter);
    span.className = "letter-box"
    lettersContainer.appendChild(span);
});
const words = {
    programmingLanguage :["php" , "javascript" , "go" , "scale" , "mysql" , "python" , "fortran"],
    movies:["Prestige" , "Inception" , "Parasite" , "Interstellar" , "Whiplash" , "Memento" , "Coco" ,"Up"],
    people:["Albert Einstein" , "Hitchcoock" , "Alexander" , "Cleopatra" , "Mahatma Ghandi"],
    countries:["Syria" , "Palestine" , "Yemen" , "Egypt" , "Bahrain" ,"Qatar"]
}
let allKeys = Object.keys(words);
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];
document.querySelector(".game-info .category span").innerHTML = randomPropName;

let letterGuessContainer = document.querySelector(".letter-guess");
let lettersAndSpace = Array.from(randomValueValue);
lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");
    if(letter === " "){
        emptySpan.className = "with-space";
    }
    letterGuessContainer.appendChild(emptySpan);
});

let guessSpan = document.querySelectorAll(".letter-guess span");
let wrongAttempts = 0;
let Draw = document.querySelector(".hangman-draw");

document.addEventListener("click" , (e)=>{
    let theStatus = false;
    if(e.target.className === 'letter-box'){
        e.target.classList.add("clicked");
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        theChosenWord = Array.from(randomValueValue.toLowerCase());
        theChosenWord.forEach((wordLetter , wordIndex)=>{
            if(theClickedLetter == wordLetter){
                theStatus = true;
                guessSpan.forEach((span , spanIndex)=>{
                    if(wordIndex === spanIndex){
                        span.innerHTML = theClickedLetter;
                    }
                });
            }
        });
        if (theStatus !== true){
            wrongAttempts++;
            Draw.classList.add(`wrong-${wrongAttempts}`);
            document.getElementById("fail").play();
            if (wrongAttempts === 8) {
                endGame();
                lettersContainer.classList.add("finished");
            }
            } else {
            document.getElementById("sucess").play();
            }
        }
        });
        function endGame() {
        let div = document.createElement("div");
        let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);
        div.appendChild(divText);
        div.className = 'popup';
        document.body.appendChild(div);
        }

