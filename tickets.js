/*
    Jordan Schrier
    813250399
    Server side - sends added tickets to the cart
*/

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(
  path.resolve(__dirname, "public")
));

//array to hold tickets that have been added to the cart
let cart_items = [];

var i;



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

let lower_level = $("#lower-level");
let sundeck = $("#sundeck");
let pavilion = $("#pavilion");

//Toggle up and down arrows to select upper or lower seating
let up_arrow = $("#up_arrow");
let down_arrow = $("#down_arrow");

let check_gourmet = $("#upgrade");

let button = $("#add");

//if lower level selected, display lower level ticket and info
lower_level.addEventListener("click", function () {
    let price = $("#price");
    let ticket = $("#lower-level-ticket");
    ticket.style.display = "block";

    let section =$("#section");
    section.innerHTML = "";
    section.append("Section: lower level");
    price.innerHTML = "";
    price.append("Price: $99");
});

//update price every time gourmet checkbox is checked/unchecked
check_gourmet.addEventListener("click", function () {
    let price = $("#price");
    if(check_gourmet.checked){
        price.innerHTML = ""; //clear current price
        price.append("Price: $199"); //update price
    }else{
        price.innerHTML = ""; //clear current price
        price.append("Price: $99"); //update price
    }
});

//when user selects "add to cart"
button.addEventListener("click", function () {
    let new_ticket = new ticket();
});


sundeck.addEventListener("click", function () {
    let ticket =$("#sundeck-ticket");
    ticket.style.display = "block";
});

pavilion.addEventListener("click", function () {
    let ticket = $("#pavilion-ticket");
    ticket.style.display = "block";
});

//display the upper level (sundeck and pavilion)
up_arrow.addEventListener("click", function () {
    console.log("up arrow clicked");
    sundeck.style.display = "block";
    pavilion.style.display = "block";
    lower_level.style.display = "none";
});

//display lower level
down_arrow.addEventListener("click", function () {
    sundeck.style.display = "none";
    pavilion.style.display = "none";
    lower_level.style.display = "block";
});

let test_ticket = new ticket("Gourmet Ticket", "Lower level", 199.00, "Bananza-Images/Tickets/darker-yellow-ticket.png");
cart_items.push(test_ticket);
}
//send array of cart items to the client
app.get("/cart_click", (req, res) => {
    res.json(cart_items);
});

$(document).ready(function() {
    loadTickets();
});

app.listen(3000, () => console.log("Initializing cart..."));
console.log(cart_items);