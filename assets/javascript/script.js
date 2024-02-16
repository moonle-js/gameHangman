// Getting values
var image = document.querySelector('#mainImg');
var nameOf;
var chanseLeft = document.querySelector('#chanseLeft');
var letters = document.querySelector('#letters');
var eachLetter;
var randomNumber;
var randomLetter;;
var mustShown;
var numberOfSuccess = 0; // bu variable ile oyunu bitirende baxacam 

var numberOfChances = 9;

//                                  FUNCTIONS                                 //
// setting words must be found
var words = ['AMAZON', 'HERAKUL', 'NICE', 'MAHAMMAD', 'BEAUTIFUL', 'NIHAD', 'GUNAY', "ALMAZ", "XEYYAM", "ELSHAD", "IZZET", "SEVINC", 'EDUCATION'];

function selectWord(){
    randomNumber = Math.floor(Math.random() * (words.length))
    randomLetter = words[randomNumber];
    
    for(let i of randomLetter){
        document.querySelector('#nameOf').innerHTML += `
        <span class= "letterSpan">
            ${i}
        </span>
    `
    nameOf = document.querySelectorAll('.letterSpan');
    }
    
}
// setting words must be found

// Getting value of letter
function getInnerHTML(){
    eachLetter = document.querySelectorAll('.letterButton');
    eachLetter.forEach(function(item){
        item.addEventListener('click', function(){
            isContain(item)
        })
    })
}
// Getting value of letter

// Check if contains
function isContain(element){
    var textOfElement = element.innerHTML;
    if(randomLetter.includes(`${textOfElement}`)){
        console.log()

        mustShown = randomLetter.indexOf(randomLetter[randomLetter.indexOf(textOfElement)]);




        function reSearch(){

            nameOf.forEach(function(item){

                if(`${item.innerHTML.trim()}` == `${textOfElement}`){
                    item.style.backgroundColor =  'rgba(255, 0, 0, 0)';
                    item.style.color =  'rgba(255, 255, 255, 1)';
                    numberOfSuccess++;
                    element.style.display = "none";
                    if(numberOfSuccess == randomLetter.length){
                        setTimeout(function(){
                            alert("You won!!!!")
                            
                            start()
                        },100)
                    }
                }
                
            })
        }

        reSearch();
    }else{
        // cHANGING OF IMAGE
        element.style.backgroundColor = "#ed4337"
        numberOfChances--
        image.setAttribute('src', `./assets/images/${numberOfChances}.jpg`)
        chanseLeft.innerHTML = `Chances left: ${numberOfChances}`
        if(numberOfChances == 0){
            alert("You lost")
            start();
        }


    }
}
// Check if contains



//adding button to letters block
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 'P', "Q", "R", 'S', 'T', "U", 'V', 'W', 'X', "Y", "Z"]

function addButtonsToBlock(){
    for(let i of alphabet){
        letters.innerHTML += `
            <button class="letterButton" id="${i}">${i}</button>
        `
        if(i == "Z"){
            getInnerHTML();
        }
    }
}
//adding button to letters block




function start(){
    letters.innerHTML = "";
    document.querySelector('#nameOf').innerHTML = "";
    numberOfSuccess = 0;
    numberOfChances = 9;
    chanseLeft.innerHTML = `Chances left: ${numberOfChances}`
    addButtonsToBlock()
    selectWord();
    image.setAttribute('src', `./assets/images/10.jpg`)

}




window.onload = start;