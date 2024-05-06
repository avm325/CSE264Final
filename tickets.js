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
    section: string
    price: number
    gourmet: boolean
*/
class ticket{
    constructor(section, price, gourmet){
        this.section = section;
        this.price = price;
        this.gourmet = gourmet;
    }
}