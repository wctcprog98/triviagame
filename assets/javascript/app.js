
var correctAnswer = 0;
var wrongAnswer = 0;
var checked = ""; 

// $("button").click(function () {
    
//     $("button").hide("slow", function () {
//         $(".game").show();
//     });

    
    

var trivia = [{

    question: "In Dumbo, where is Mrs. Jumbo when the stork delivers her baby?",
    answers: ["the circus", "she never did", "the watering hole"],
    correctAnswer: "In the circus train"
}, {
    question: "In Peter Pan, Captain Hook had a hook on which one of his hands",
    answers: ["both", "right", "left"],
    correctAnswer: "left"
}, {
    question: "What author wrote the book that the animated feature The Jungle Book is based on",
    answers: ["both", "right", "left"],
    correctAnswer: "Rudyard Kipling"
}, {
    question: "In the Lion King, where does Mufasa and his family live?",
    answers: ["both", "right", "left"],
    correctAnswer: "Pride Rock"
}, {
    question: "In Aladdin, what is the name of Jasmines pet tiger?",
    answers: ["both", "right", "left"],
        correctAnswer: "Rajah"

    }];

    

    clicked = $('radio').change();
    console.log(clicked); 
    //send questions to div

for (var i = 0; i < trivia.length; i++)
{
    $("#game").append("<h2>" + trivia[i].question + "<h2>")
    for (var j = 0; j < trivia.length; j++)
    {
    $("#game").append("<input type ='radio' name= 'question-" + i + " ' value ='" + trivia[i].answers[j]+"'>" + trivia[j].answers[j])
        }
    }
   
 
// });
    
checked = $('input:radio[name=question]:checked').val();
console.log(checked); 
    // $("#rad").click(function(){
    //     var $ctrl = $('<input/>').attr({ type: 'radio', name:'rad'}).addClass("rad");
    //     $("#holder").append($ctrl);


    // $("input[type='radio']").click(function () {
     

      

  

// userAnswer = $("input:checked");
// console.log(userAnswer);





// $(window).load(function () {
//     // Run code
//     $(".game").hide();
// });








