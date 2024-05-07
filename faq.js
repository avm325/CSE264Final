//Aviela Maynard

//avm325 889660954

$(document).ready(function() { 
    $(".question").click(function() {
        var answer = $(this).siblings(".answer");
        answer.fadeToggle(); //https://api.jquery.com/fadeToggle/#:~:text=fadeToggle()%20method%20animates%20the,the%20layout%20of%20the%20page.
    });
   
});

function submitQuestion(){
    let q = document.getElementById('userQuestion').value;
    console.log(q);
    $(".faq-ctn").append(`<div class="question-container"><div class="question"><h4>${q}</h4></div></div><hr class="hr-line"></hr>`);     
     
}





