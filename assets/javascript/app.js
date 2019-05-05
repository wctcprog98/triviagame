//create variables
var timeLeft = 30;
var elem = document.getElementById('some_div');
var timerId = setInterval(countdown, 1000);

//create an array for looping

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
