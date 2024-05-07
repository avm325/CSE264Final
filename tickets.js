/*
    Jordan Schrier
    813250399
    Server side - sends added tickets to the cart
*/

//array to hold tickets that have been added to the cart
let cart_items = [];

//class for ticket objects
/*  
    name: string
    section: string
    price: number
    gourmet: boolean
*/
class ticket{
    constructor(name, section, price, ticket_image){
        this.name = name;
        this.section = section;
        this.price = price;
        this.ticket_image = ticket_image;
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
});

//update price every time gourmet checkbox is checked/unchecked
$("#upgrade").click(function () {
    let price = $("#price");
    if(upgrade.checked){
        $("#price").empty(); //clear current price
        price.append("Price: $199"); //update price
    }else{
        $("#price").empty(); //clear current price
        price.append("Price: $99"); //update price
    }
});

//when user selects "add to cart"
$("#add").click(function () {
    let new_ticket = new ticket();
});

$("#sundeck").click(function () {
    $("#lower-level-ticket").css("display", "none");
    $("#pavilion-ticket").css("display", "none")
    $("#sundeck-ticket").css("display", "block")
    $("#selected-ticket").css("display", "block")
});

$("#pavilion").click(function () {
    $("#lower-level-ticket").css("display", "none");
    $("#pavilion-ticket").css("display", "block")
    $("#sundeck-ticket").css("display", "none")
    $("#selected-ticket").css("display", "block")
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