$("#start").on("click", function () {
  
    for (var i = 0; i < trivia.length; i++) {
        $(".game").append("<h2>" + trivia[i].questions + "</h2>");
        for (var j = 0; j < trivia[i].answers.length; j++) {
            $(".game").append("<input type= 'radio' name= 'question-" + i + " ' value=' " + trivia[i].answers[j] + " '>" + trivia[i].answers[j])
        }
    }
    
});

    
var trivia = [{

    questions: "In Dumbo, where is Mrs. Jumbo when the stork delivers her baby?",
    answers: ["the circus", "she never did", "the watering hole"],
    correctAnswer: "In the circus train"
}, {
    questions: "In Peter Pan, Captain Hook had a hook on which one of his hands",
    answers: ["both", "right", "left"],
    correctAnswer: "left"
}, {
    questions: "What author wrote the book that the animated feature The Jungle Book is based on",
    answers: ["both", "right", "left"],
    correctAnswer: "Rudyard Kipling"
}, {
    questions: "In the Lion King, where does Mufasa and his family live?",
    answers: ["both", "right", "left"],
    correctAnswer: "Pride Rock"
}, {
    questions: "In Aladdin, what is the name of Jasmines pet tiger?",
    answers: ["both", "right", "left"],
        correctAnswer: "Rajah"

    }];
    

// var game = func
// correct: 0,
//     incorrect: 0; 
// counter: 120;
// countdown: function() {
//     game.counter
// }

 
   
$("input[name='name_of_your_radiobutton']:checked").val();
// });
    
// checked = $('input:radio[name=question]:checked').val();
// console.log(checked); 
//     // $("#rad").click(function(){
    //     var $ctrl = $('<input/>').attr({ type: 'radio', name:'rad'}).addClass("rad");
    //     $("#holder").append($ctrl);


    // $("input[type='radio']").click(function () {
     

      

  

// userAnswer = $("input:checked");
// console.log(userAnswer);





// $(window).load(function () {
//     // Run code
//     $(".game").hide();
// });








