//array to hold tickets that have been added to the cart
let cart_items = [];

var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

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

let lower_level = document.getElementById("lower-level");
let sundeck = document.getElementById("sundeck");
let pavilion = document.getElementById("pavilion");

//Toggle up and down arrows to select upper or lower seating
let up_arrow = document.getElementById("up_arrow");
let down_arrow = document.getElementById("down_arrow");

let check_gourmet = document.getElementById("upgrade");

let button = document.getElementById("add");

//if lower level selected, display lower level ticket and info
lower_level.addEventListener("click", function () {
    let price = document.getElementById("price");
    let ticket = document.getElementById("lower-level-ticket");
    ticket.style.display = "block";

    let section = document.getElementById("section");
    section.innerHTML = "";
    section.append("Section: lower level");
    price.innerHTML = "";
    price.append("Price: $99");
});

//update price every time gourmet checkbox is checked/unchecked
check_gourmet.addEventListener("click", function () {
    let price = document.getElementById("price");
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
    let ticket = document.getElementById("sundeck-ticket");
    ticket.style.display = "block";
});

pavilion.addEventListener("click", function () {
    let ticket = document.getElementById("pavilion-ticket");
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