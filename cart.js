function getCartBubble(){
    let number=0;
    let cartItems = $('.cart-row');
    cartItems.each(function() {
        let cartRow = $(this);
        let quantity = parseFloat(cartRow.find('.cart-quantity-input').val()); 

        number += (quantity);
        console.log(number);    
        sessionStorage.setItem('cartBubbleNum', number); 

    });
    console.log(number);
}

function removeItem(){
    $(".button-remove").click((event) => {
        console.log("remove button clicked");
        const clickedRemove = $(event.target);
        clickedRemove.parent().parent().remove(); // Remove row
        updateCartTotal();
        getCartBubble();

    });
}

function quantityChanged() {
    $(".cart-quantity-input").change((event) => {
        console.log("quantity changed in function");  
        const input = parseFloat($(event.target).val()); //value of the input field as a number

        if(isNaN(input) || input < 0) {
            $(event.target).val(1); //value to 1
        } 

        updateCartTotal();
        getCartBubble();
    });
}

let cartQuantityInputs = $('.cart-quantity-input');

function updateCartTotal() {
    let cartItems = $('.cart-row');
    let total = 0;

    cartItems.each(function() {
        let cartRow = $(this);
        let price = parseFloat(cartRow.find('.cart-price').text());
        let quantity = parseFloat(cartRow.find('.cart-quantity-input').val()); 

        total += (price * quantity);
    });

    total = Math.round(total * 100) / 100;
    $("#cart-total").text("Total: $" + total+".00");
    getCartBubble();

}


$(document).ready(function() {
    $('#cart-quantity-input').change(function() {
        updateCartTotal();
    });
    updateCartTotal();
    removeItem();
    quantityChanged();
    getCartBubble();
    
});