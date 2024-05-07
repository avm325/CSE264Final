function updateInitial() {
    let name = sessionStorage.getItem('userName'); // https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
    if(name){
        var initialLetter = name.charAt(0).toUpperCase();
        $('#initialLetter').text(initialLetter);
        console.log("THRE IS A NAME " + initialLetter);
    }else{
        $('#initialLetter').text('');
        console.log("NO NAME CART");
    }
}

function placeName(){
    let name = sessionStorage.getItem('userName'); 
    if(name){
        $('#userName').text(name);
        console.log("THRE IS A NAME " + name);
    }else{
        $('#userName').text('Name unspecified');
        console.log("NO NAME CART");
    }
}

function placeTotalBubble(){
    let number;
    if(number <1 || number == null){
        number =0;
        $('#cartBubble').text(number);
    }else{
        number = sessionStorage.getItem('cartBubbleNum'); 
        $('#cartBubble').text(number);
    }
    
     
}

$(document).ready(function() {
    updateInitial();
    placeName();
    setInterval(placeTotalBubble, 1000); //check for updates
});
