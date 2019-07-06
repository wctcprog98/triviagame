//global variables 
var correct = 0; //stores correct answers 
var incorrect = 0; //stores incorrect answers
//create boolean variable to check if submit button was pressed
var submitCheck = false;  //flag for submit button, defaults to false signaling the button has not been pressed 
var unchecked = 0; //holds value of raidio buttons that were not checked
//question and answers
var trivia = [{
    questions: "In Dumbo, where is Mrs. Jumbo when the stork delivers her baby?",
    answers: ["the circus", "she never did", "the watering hole", "In the circus train"],
    correctAnswer: "In the circus train"
}, {
    questions: "In Peter Pan, Captain Hook had a hook on which one of his hands",
    answers: ["both", "right", "left"],
    correctAnswer: "left"
}, {
    questions: "What author wrote the book that the animated feature The Jungle Book is based on",
    answers: ["Rudyard Kipling", "Edgar Allen Poe", "Jane Austin", "William Shakespear"],
    correctAnswer: "Rudyard Kipling"
}, {
    questions: "In the Lion King, where does Mufasa and his family live?",
    answers: ["Mufasa", "In the Jungle!", "Pride Rock", "Plymouth Rock"],
    correctAnswer: "Pride Rock"
}, {
    questions: "In Aladdin, what is the name of Jasmines pet tiger?",
    answers: ["Tigger", "Shere Khan", "Rajah", "Scar", "Simba"],
    correctAnswer: "Rajah"
    }];

    //hide timer and play again button
$(document).ready(function () {
    $(".timer-wrap").hide();
    $(".reset").hide();
});

//on click listener function that start game and hides screen once start button is pushed
function startGame() {
    $("#start").on("click", function () {
        // hide the start button and create questions and answer radio buttons
        $(".timer-wrap").show();
        timer();
        $("#start").hide();
        $(".blinking").hide();

        for (var i = 0; i < trivia.length; i++) {
            $(".game").append("<h2>" + trivia[i].questions + "</h2>");
            for (var j = 0; j < trivia[i].answers.length; j++) {
                $(".game").append("<input type='radio' name='question-" + i +
                    "' value='" + trivia[i].answers[j] + "''>" + trivia[i].answers[j]);
            }
        }
    //add submit button on start 
        $(".game").append("<button class='submit'>Submit</button>");
    });
}

startGame();   
function submitFunction() {
    $.each($("input[name='question-0']:checked"), function () {
        //get values of checked radios and compare to correct answer
        console.log($(this).val().toString() == trivia[0].correctAnswer.toString());
        console.log(trivia[0].correctAnswer);
        if ($(this).val() == trivia[0].correctAnswer) {
            correct++;
            console.log("correct: " + correct);
        }
        else {
            incorrect++;
            console.log("incorrect: " + incorrect);
        }
    })

    //get values of checked radios and compare to correct answer
    $.each($("input[name='question-1']:checked"), function () {
        if ($(this).val() == trivia[1].correctAnswer) {
            correct++;
            console.log("correct: " + correct);
        }
        else {
            incorrect++;
            console.log("incorrect: " + incorrect);
        }
    })
    //get values of checked radios and compare to correct answer
    $.each($("input[name='question-2']:checked"), function () {
        if ($(this).val() == trivia[2].correctAnswer) {
            correct++;
            console.log("correct: " + correct);
        }
        else {
            incorrect++;
            console.log("incorrect: " + incorrect);
        }
    })
    //get values of checked radios and compare to correct answer
    $.each($("input[name='question-3']:checked"), function () {
        if ($(this).val() == trivia[3].correctAnswer) {
            correct++;
            console.log("correct: " + correct);
        }
        else {
            incorrect++;
            console.log("incorrect: " + incorrect);
        }
    })
        //get values of checked radios and compare to correct answer
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == trivia[4].correctAnswer) {
                correct++;
                console.log("correct: " + correct);
            }
            else {
                incorrect++;
                console.log("incorrect: " + incorrect);
            }
        })
    showResults();
};
function showResults() {
    //displays total correct and incorrect answers from quiz
    console.log("correct: " + correct);
    console.log("incorrect: " + incorrect);

    //hide current screen 
    $(".game").hide();
    $(".timer-wrap").hide();
    $(".reset").show(); 
    //verify if button is unchecked and store values in variable 
    // if ("input[name='question-0']:not(:checked") {
    //     incorrect++;
    // }
    // if ("input[name='question-1']:not(:checked") {
    //   incorrect++;
    //     }
    // if ("input[name='question-2']:not(:checked") {
    //   incorrect++;
    //         }
    // if ("input[name='question-3']:not(:checked") {
    //   incorrect++;
    //             }
    // if ("input[name='question-4']:not(:checked") {
    //   incorrect++;  
    // }
    if (correct > 1) {
        //display plural answers if value is > 1
        $(".correct").append("<h2>" + "you got " + correct + " answers correct" + "</h2>");
    }
    else {
        //display single answer
        $(".correct").append("<h2>" + "you got " + correct + " answer correct" + "</h2>");
    }
  
    incorrect = trivia.length - correct; 

    if (incorrect > 1) {
        //display plural incorrect answers if value is > 1
        $(".incorrect").append("<h2>" + "you got " + (incorrect) + " answers incorrect" + "</h2>");
    }
    else {
        $(".incorrect").append("<h2>" + "you got " + incorrect + " answer incorrect" + "</h2>");
    }

    console.log(incorrect); 
    //button to restart game
    // var button = $("<button>");
    // button.addClass("reset");
    // button.attr("data-name", "resetGame");
    // button.text("Play Again");
    // $(".resetButton").append(button);
}
$(document).on("click", ".submit", function () {
    submitFunction();
});


//simple timer  --run and see if this works
function timer() {
    var duration = moment.duration({
        'minutes': 1,
        'seconds': 00
      
      });
    
    var timestamp = new Date(0, 0, 0, 2, 10, 30);
    var interval = 1;
    var timer = setInterval(function() {
    timestamp = new Date(timestamp.getTime() + interval * 1000);
    
    duration = moment.duration(duration.asSeconds() - interval, 'seconds');
    var min = duration.minutes();
    var sec = duration.seconds();
    
    sec -= 1;
    if (min < 0) return clearInterval(timer);
    if (min < 10 && min.length != 2) min = '0' + min;
    if (sec < 0 && min != 0) {
      min -= 1;
      sec = 59;
    } else if (sec < 10 && sec.length != 2) sec = '0' + sec;
    
    $('.timer').text(min + ':' + sec);
    if (min == 0 && sec == 0)
      clearInterval(timer);
    
    
    }, 1000);
}

//simple timer  --run and see if this works


// function timer() {
//     $(document).ready(function () {

//         var time = $(".time").text();
//         var interval = setInterval(function () {
//             var count = time.split(":");
//             var hour = count[0];
//             var min = count[1];
//             var sec = count[2];
//             var counter = $(".timer").find("span");
//             counter.eq(0).text(hour);
//             counter.eq(1).text(min);
//             counter.eq(2).text(sec);

//             if (hour == 0 && min == 0 && sec <= 30) {
//                 $(".timer").css("color", "red");
//             }
//             if (sec == 0) {
//                 if (min != 0) {
//                     counter.eq(1).text(min--);
//                     sec = 59;
//                 }
//                 else if (min == 0 && hour != 0) {
//                     counter.eq(0).text(hour--);
//                     counter.eq(1).text(min = 59);
//                     sec = 59;
//                 }
//                 else if (hour == 0 && min == 0 && sec == 0) {
//                     counter.eq(2).text(0);
//                 }
//                 if (hour == 0 && min == 0 && sec <= 30) {
//                     $(".timer").css("color", "red");
//                 }

//             }
//             counter.eq(0).text(hour);
//             counter.eq(1).text(min);
//             counter.eq(2).text(--sec);
//             time = counter.eq(0).text() + ":" + counter.eq(1).text() + ":" + counter.eq(2).text();
           
//             if (hour == 0 && min == 0 && sec == 0 && submitCheck == false) {
//                 clearInterval(interval);
//                 //grab answers if submit button was not clicked
//                 submitFunction(); //show results on screen
//                 //sound buzzer
//                 var audio = new Audio("assets/sounds/buzzer.mp3");
//                 audio.play();
//             }
          
            // else if (hour == 0 && min == 0 && sec == 0 && submitCheck == true)
            // {
            //     clearInterval(interval);
            //     submitFunction();
            // }
            // else if (submitCheck == true || submitCheck == true) {
            //     clearInterval(interval);
            //     submitFunction();
            // }
            // else if (submitCheck == false || submitCheck == true) {
            //     clearInterval(interval);
            //     submitFunction();
            // }
            
//         }, 1000);
//     });
// }

//reset
$(".reset").on("click", function () { 
$(".results").empty(); 
$("body").hide();    
$("#start").show();
$("body").show(); 
startGame(); 
$(".timer-wrap").show(); 
timer(); 
// $("body").hide(); 
// $(".game").show();  
    $(".game").show(); 
   
    $(".timer-wrap").show(); 
    showResults();
console.log("I was clicked");     
});




