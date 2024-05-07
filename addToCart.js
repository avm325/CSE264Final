 function getItems(cart_items){
                $(".cart-item-image").text(cart_items[3]);
                $(".cart-item-title").text(cart_items[0]);
                $(".cart-price.cart-column").text(cart_items[2]); // Corrected selector for class
                $(".cart-item-section").text(cart_items[1]); // Corrected selector for ID
                console.log(cart_items);
            }
            
$("#cartURL").click(() => {
    $.ajax({
        url: "/cart_click",
        type: "GET",
        processData: true,
        dataType: "json",
        success: function(cart_items) {

           getItems(cart_items);
           console.log(cart_items);
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Handle AJAX errors
            alert("Error: " + jqXHR.responseText);
            alert("Error: " + textStatus);
            alert("Error: " + errorThrown);
            console.log(cart_items);
        }
    });
});
