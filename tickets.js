/*
    Jordan Schrier
    813250399
    Server side - sends added tickets to the cart
*/

//array to hold tickets that have been added to the cart
let cart_items = [];

let current_price = 0;
let current_name = "";
let current_section = "";

//keep track of cart total globally
let total = 0;

//class for ticket objects
/*  
    name: string
    section: string
    price: string
*/
class ticket{
    constructor(name, section, price){
        this.name = name;
        this.section = section;
        this.price = price;
    }
}

function loadTickets(){
//if lower level selected, display lower level ticket and info

$("#lower_level").click(function(){
    $("#lower-level-ticket").css("display", "block");
    $("#pavilion-ticket").css("display", "none")
    $("#sundeck-ticket").css("display", "none")

    $("#section").empty();
    $("#section").html("Section: lower level");

    current_name = "Lower level";
    current_price = 99;

    $("#price").empty();
    $("#price").append("Price: $", current_price, ".00");
    $("#selected-ticket").css("display", "block")

    //reset upgrade checkbox
    document.getElementById('upgrade').checked = false;
});

//update price every time gourmet checkbox is checked/unchecked
$("#upgrade").click(function () {
    if(upgrade.checked){
        current_price += 100;
        $("#price").empty(); //clear current price
        $("#price").append("Price: $", current_price, ".00"); //update price
    }else{
        current_price -= 100;
        $("#price").empty(); //clear current price
        $("#price").append("Price: $", current_price, ".00"); //update price
    }
});

//when user selects "add to cart"
$("#add").click(function () {
    let new_ticket = new ticket(current_name, current_section, current_price);
    //update cart total
    total += new_ticket.price;
    $("#cart-total").html(`Total: $${total}.00`);

    let image = "";
    let print_name = "";
    //find associated ticket color
    if (current_name === "Lower level"){
        image = "Bananza-Images/Tickets/darker-yellow-ticket.png";
    }else if(current_name === "Pavilion"){
        image = "Bananza-Images/Tickets/dark-pink-ticket.png";
    }else{
        image = "Bananza-Images/Tickets/light-pink-ticket.png";
    }
    
    //add (gourmet) next to the name if gourmet ticket
   if(document.getElementById('upgrade').checked){
        print_name = `${new_ticket.name} (gourmet)`;
   }else{
        print_name = new_ticket.name;
   }

   //add new row to cart
    $("#ticket-items").append(`<div class="cart-row"><div class="cart-item cart-column">
        <img class="cart-item-image" src=${image} width="100" height="100">
        <span class="cart-item-title">${print_name}</span></div>
        <span class="cart-price cart-column">$${new_ticket.price}.00</span><div class="cart-quantity cart-column">
        <input name="quantity "class="cart-quantity-input" type="number" value="1">
        <button class="button-remove" type="button">Remove</button></div></div>`);
});

$("#sundeck").click(function () {
    $("#lower-level-ticket").css("display", "none");
    $("#pavilion-ticket").css("display", "none")
    $("#sundeck-ticket").css("display", "block")
    $("#selected-ticket").css("display", "block")

    current_name = "Sundeck"
    current_price = 130;

    $("#section").empty();
    $("#section").html("Section: Sundeck");

    $("#price").empty();
    $("#price").append("Price: $", current_price, ".00");

    //reset upgrade checkbox
    document.getElementById('upgrade').checked = false;
});

$("#pavilion").click(function () {
    $("#lower-level-ticket").css("display", "none");
    $("#pavilion-ticket").css("display", "block")
    $("#sundeck-ticket").css("display", "none")
    $("#selected-ticket").css("display", "block")

    current_name = "Pavilion"
    current_price = 150;

    $("#section").empty();
    $("#section").html("Section: Pavilion");

    $("#price").empty();
    $("#price").append("Price: $", current_price, ".00");

    //reset upgrade checkbox
    document.getElementById('upgrade').checked = false;
});

//display the upper level (sundeck and pavilion)
$("#up_arrow").click(function () {
    $("#sundeck").css("display", "block");
    $("#pavilion").css("display", "block");
    $("#lower_level").css("display", "none");
    $("#level-num").html("Level 2");
});

//display lower level
$("#down_arrow").click(function () {
    $("#sundeck").css("display", "none");
    $("#pavilion").css("display", "none");
    $("#lower_level").css("display", "block");
    $("#level-num").html("Level 1");
});

let test_ticket = new ticket("Gourmet Ticket", "Lower level", 199.00, "Bananza-Images/Tickets/darker-yellow-ticket.png");
cart_items.push(test_ticket);
}

$(document).ready(function() {
    loadTickets();
});