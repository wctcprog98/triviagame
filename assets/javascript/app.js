$("#start").on("click", function () {
  
    for (var i = 0; i < trivia.length; i++) {
        $(".game").append("<h2>" + trivia[i].questions + "</h2>");
        for (var j = 0; j < trivia[i].answers.length; j++) {
            $(".game").append("<input type='radio' name='question" + i + "' value=' " + trivia[i].answers[j] + " '>" + trivia[i].answers[j])
        }
    }
});


//hide start button


var answers = [];

$("#start").click(function(){
    $("#start").hide();
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
 
var array = []; 

// var answers = $('input:radio[name=question[i]]:checked').val();
// console.log(answers); 
    
// })


$('.submit').on('click', function () {
    answer($('input[name=question0 ]:checked').val());
    console.log($('input[name=question1 ]:checked').val());
    console.log($('input[name=question2 ]:checked').val());
    console.log($('input[name=question3 ]:checked').val());
    console.log($('input[name=question4 ]:checked').val());
})




    //start tomer function on click

    //checked = $('input:radio[name=question]:checked').val()
    //retrieve radio buttons after submit or timer = 0

    //loop throough trivia[0]answers ===playerchoice

    //tell user thier resuls by using $hide/

    //have a button asking if they want to play again

    //on click reset the clock

        //show questions

    

    



// var game = func
// correct: 0,
//     incorrect: 0; 
// counter: 120;
// countdown: function() {
//     game.counter
// }

 
   

// });
    
// checked = $('input:radio[name=question]:checked').val();
// console.log(checked); 
//     // $("#rad").click(function(){
    //     var $ctrl = $('<input/>').attr({ type: 'radio', name:'rad'}).addClass("rad");
    //     $("#holder").append($ctrl);


    // $("input[type='radio']").click(function () {
     

      

  

// userAnswer = $("input:checked var number = 100;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
  
 
    
// console.log(userAnswer);





// $(window).load(function () {
//     // Run code
//     $(".game").hide();
// });








