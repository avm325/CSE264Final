function showPopup(){
    setTimeout(function(){ //https://www.w3schools.com/jquery/jquery_css.asp
        $("#popup-ad").css('display','block');
    }, 2000); //3 seconds
}

function submitName(){
    let name = document.getElementById('nameInput').value;
    updateInitialLetter(name);
    sessionStorage.setItem('userName', name); 
    $("#popup-ad").css('display','none');//Close popup

}

function updateInitialLetter(name){
    var initialLetter = name.charAt(0).toUpperCase();
    $('#initialLetter').text(initialLetter);
}

window.onload = showPopup;

