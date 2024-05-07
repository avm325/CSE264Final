// Aviela Maynard
// avm325 889660954

function getCartBubble(){
    let number=0;
    let cartItems = $('.cart-row');
    cartItems.each(function() {
        let cartRow = $(this);
        let quantity = parseFloat(cartRow.find('.cart-quantity-input').val()); 

        number += (quantity);
        sessionStorage.setItem('cartBubbleNum', number); 
        placeTotalBubble(number);

    });
}

function placeTotalBubble(number){
    if(number>0){
        number = sessionStorage.getItem('cartBubbleNum'); 
        $('#cartBubble').text(number);
    }
}

function quantityChanged() {console.log("quantity changed in function");  
    $(".cart-quantity-input").change((event) => {
        
        let price = parseFloat(('.cart-price').text());
        const input = parseFloat($(event.target).val()); //value of the input field as a number

        let updatePrice = price* input; 
        console.log(updatePrice);
        $('.cart-price').text()= updatePrice;

        if(isNaN(input) || input < 0) {
            $(event.target).val(1); //value to 1
        } 

        updateCartTotal();
        getCartBubble();
    });
}

function updatePrice(){
    $(".cart-quantity-input").change((event) => {
        
        let price = parseFloat(cartRow.find('.cart-price').text());
        const input = parseFloat($(event.target).val()); //value of the input field as a number

        let updatePrice = price* input; 
        console.log(updatePrice);
        $('.cart-price').text()= updatePrice;
    });
    

}

let cartQuantityInputs = $('.cart-quantity-input');

function updateCartTotal() {

    let cartItems = $('.cart-row');
    let total = 0;

    cartItems.each(function() {
        let cartRow = $(this);
        let price = parseFloat(cartRow.find('.cart-price').text().replace('$', '')); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
        let quantity = parseFloat(cartRow.find('.cart-quantity-input').val());  

        total += (price);
    });

    total = Math.round(total * 100) / 100;
    $("#cart-total").text("Total: $" + total+".00");
    getCartBubble();

}

$(document).ready(function(){
    $('#cartBubble').text(0); //set cart num to 0

    $(document).on('change', '.cart-quantity-input', function(event){
        let cartRow = $(event.target).closest('.cart-row');
        let price = parseFloat(cartRow.find('.cart-price').text().replace('$', ''));
        const input = parseFloat($(event.target).val()); 
        console.log('price ' + price + ', input ' + input);
    
        let updatePrice = price + price; 
        console.log('updatePrice ' + updatePrice);
    
        //update price
        cartRow.find('.cart-price').text("$"+updatePrice+".00"); 
    
        if(isNaN(input) || input<0){
            $(event.target).val(1); 
        }
    
        //updateCartTotal();
        getCartBubble();
    });
    
    
    $(document).on('click', '.button-remove', function(){ //hnadle on div since not loaded immedealty
        console.log("REMOVE CLICKED");
        const clickedRemove = $(event.target);
        clickedRemove.parent().parent().remove(); // Remove row
        updateCartTotal();
        getCartBubble();
    });

    updateCartTotal();
    getCartBubble();
    setInterval(getCartBubble, 1000);
    setInterval(updateCartTotal, 1000);
});