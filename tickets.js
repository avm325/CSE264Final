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

    $("#price").empty();
    $("#price").append("Price: $99");
    $("#selected-ticket").css("display", "block")

    current_name = "Lower level"
    current_price = 99;
});

//update price every time gourmet checkbox is checked/unchecked
$("#upgrade").click(function () {
    let price = $("#price");
    if(upgrade.checked){
        current_price += 100;
        $("#price").empty(); //clear current price
        price.append("Price: $199"); //update price
    }else{
        $("#price").empty(); //clear current price
        price.append("Price: $99"); //update price
    }
});

//when user selects "add to cart"
$("#add").click(function () {
    let new_ticket = new ticket(current_name, current_section, current_price);
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
    
   if(document.getElementById('upgrade').checked){
        print_name = `${new_ticket.name} (gourmet)`;
   }else{
        print_name = new_ticket.name;
   }
   
    $("#ticket-items").append(`<div class="cart-row"><div class="cart-item cart-column">
        <img class="cart-item-image" src=${image} width="100" height="100">
        <span class="cart-item-title">${print_name}</span><span class="cart-item-section"><br><br><br><br>Section: ${new_ticket.section}</span></div>
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
});

$("#pavilion").click(function () {
    $("#lower-level-ticket").css("display", "none");
    $("#pavilion-ticket").css("display", "block")
    $("#sundeck-ticket").css("display", "none")
    $("#selected-ticket").css("display", "block")

    current_name = "Pavilion"
    current_price = 150;
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