//global variables 
var correct = 0; 
var incorrect = 0; 

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
    answers: ["Rudyard Kipling" , "Edgar Allen Poe", "Jane Austin", "William Shakespear"],
    correctAnswer: "Rudyard Kipling"
}, {
    questions: "In the Lion King, where does Mufasa and his family live?",
    answers: ["Mufasa", "In the Jungle!" , "Pride Rock", "Plymouth Rock"],
    correctAnswer: "Pride Rock"
}, {
    questions: "In Aladdin, what is the name of Jasmines pet tiger?",
    answers: ["Tigger", "Shere Khan", "Rajah", "Scar", "Simba"],
    correctAnswer: "Rajah"
    }];
 
function startGame() {
    $("#start").on("click", function () {
        // hide the start button and create questions and answer radio buttons
        $("#start").hide();
        $(".blinking").hide();

        for (var i = 0; i < trivia.length; i++) {
            $(".game").append("<h2>" + trivia[i].questions + "</h2>");
            for (var j = 0; j < trivia[i].answers.length; j++) {
                $(".game").append("<input type='radio' name='question-" + i +
              "' value='" + trivia[i].answers[j] + "''>" + trivia[i].answers[j]);
            }
          }
          $(".game").append("<button class='submit'>Submit</button>");
    });
}


function submitFunction(){
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
    showResults();
}; 
function showResults() {
   //displays total correct and incorrect answers from quiz
    console.log("correct: " + correct);
    console.log("incorrect: " + incorrect);

    //hide current screen 
    $(".game").hide();
    if (correct > 1)
    {
        $(".results").append("<h2>" + "you got " + correct + " answers correct" + "</h2>"); 
    }
    else {
        $(".results").append("<h2>" + "you got " + correct + " answer correct" + "</h2>"); 
    }
  
    if (incorrect > 1)
    {
        $(".results").append("<h2>" + "you got " + incorrect + " answers incorrect" + "</h2>");
        }
    
    else {
        $(".results").append("<h2>" + "you got " + incorrect + " answer incorrect" + "</h2>");

    }

}
$(document).on("click",".submit",function(){
    submitFunction();
})

startGame(); 