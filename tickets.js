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
    constructor(name, section, price, gourmet){
        this.name = name;
        this.section = section;
        this.price = price;
        this.gourmet = gourmet;
    }
}

let lower_level = document.getElementById("lower-level");
let sundeck = document.getElementById("sundeck");
let pavilion = document.getElementById("pavilion");

//Toggle up and down arrows to select upper or lower seating
let up_arrow = document.getElementById("up_arrow");
let down_arrow = document.getElementById("down_arrow");

lower_level.addEventListener("click", function () {
    
});

sundeck.addEventListener("click", function () {
    
});

pavilion.addEventListener("click", function () {
    
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