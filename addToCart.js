$("#cartURL").click(){
    $.ajax({
        url: "/cart_click",
        type: "GET",
        processData: true,
        dataType: "json",
        success: function(cart_items){

            $("cart-item-image").text(cart_items[3]);
            $("cart-item-title").text(cart_items[0]);
            $("cart-price cart-column").text(cart_items[2]);
            $("cart-item-section").text(cart_items[1]);

            console.log(cart_items);


      
},
        error: function(jqXHR, textStatus, errorThrown) {
            // Handle AJAX errors
            alert("Error: " + jqXHR.responseText);
            alert("Error: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
};