
//global variables 

var answersArray = [];//hold user answers
var correct = null; 
var incorrect = null; 
 
console.log(total);


$("#start").on("click", function () {
  
    for (var i = 0; i < trivia.length; i++) {
        $(".game").append("<h2>" + trivia[i].questions + "</h2>");
        for (var j = 0; j < trivia[i].answers.length; j++) {
            $(".game").append("<input type='radio' name='question" + i + "' value=' " + trivia[i].answers[j] + " '>" + trivia[i].answers[j])
        }
    }
});


//hide start button




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
 

//total
var total = trivia.length; 
console.log(total);
    
// })


$('.submit').on('click', function () {


    //store answers
    
    answers = $('input[name=question0]:checked').val(); 
    answersArray.push(answers);
    answers1 = ($('input[name=question1]:checked').val());
    answersArray.push(answers1);
    answers2 = ($('input[name=question2]:checked').val());
    answersArray.push(answers2);
    answers3 = ($('input[name=question3]:checked').val());
    answersArray.push(answers3);
    answers4 = ($('input[name=question4]:checked').val());
    answersArray.push(answers4);

    console.log(answersArray); 
})

//check answers
//create for loop checking correctAnswer 
if (answersArray[i] == trivia[i].correctAnswer)
{
    
    }



//display results
//hide/show


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








