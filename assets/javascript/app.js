//create variables
var timeLeft = 30;
var elem = document.getElementById('some_div');
var timerId = setInterval(countdown, 1000);

//create an array for looping
//array of answers

var answersArray = ["In the circus Train", "left", "Rudyard Kipling", "Pride Rock", "Rajah"];
var questions = [" In Dumbo, where is Mrs. Jumbo when the stork delivers her baby?", "in Peter Pan, Captain Hook had a hook on which one of his hands?", "What author wrote the book that the animated feature The Jungle Book is based on?", "In the Lion King, where does Mufasa and his family live?", "In Aladdin, what is the name of Jasmine’s pet tiger?"];

//create function for onsubmit event looping through array
$("#answer1, #answer2, #answer3, #answer4").click(function () {


    // for (var i = 0; i < 10; i++)
    // {

    });
    // }

    //if butttoncliked = correct button the buttonclicked is true else flase
    //push information to html
    //correct
    //wrong
    //new content

    //timer

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            doSomething();
        } else {
            $("#gameTimer").text(timeLeft + ' seconds remaining'

                +
                timeLeft--);
        }
    }

countdown(); 

    //create an object for Quiz
    //answers
    //question





//append9 content to html


//create timer
