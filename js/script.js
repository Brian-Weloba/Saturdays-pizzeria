/*$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 1580) {
            $("#cover4").css({
                "background-attachment": "scroll",
                "background-position": "center",
                "background-repeat": "no-repeat",
                "background-size": "cover",
                "size": "1920px, 1080px",
                "max-width": "100%"
            });
        } else {
            $("#cover4").css("background-attachment", "fixed");
        }
    });
});*/

window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}