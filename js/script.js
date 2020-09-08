window.onscroll = function() { myFunction(); };

var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu-items");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

filterSelection("all");

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("navbar");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// $('.btn-plus, .btn-minus').on('click', function(e) {
//     const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
//     const input = $(e.target).closest('.input-group').find('input');
//     if (input.is('input')) {
//         input[0][isNegative ? 'stepDown' : 'stepUp']();
//     }
// });


function changeText(text) {

    document.getElementById('chgtext').innerHTML = text;

}

// Get the modal
var modal = document.getElementById("myModal");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var btn9 = document.getElementById("myBtn9");
var btn10 = document.getElementById("myBtn10");
var btn11 = document.getElementById("myBtn11");
var btn12 = document.getElementById("myBtn12");
var btn13 = document.getElementById("myBtn13");
var btn14 = document.getElementById("myBtn14");
var btn15 = document.getElementById("myBtn15");
var btn16 = document.getElementById("myBtn16");
var btn17 = document.getElementById("myBtn17");
var btn18 = document.getElementById("myBtn18");
var sel = document.getElementById("select");
var span = document.getElementsByClassName("close")[0];
btn1.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel1");
    changeText("Chicken with pineapple");
};
btn2.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel2");
    changeText("Some kind of game");
};
btn3.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel3");
    changeText("Chicken with mushroom");
};
btn4.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel4");
    changeText("With Bacon");
};
btn5.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel5");
    changeText("Marrakesh");
};
btn6.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel6");
    changeText("Salami");
};
btn7.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel7");
    changeText("Multi meat");
};
btn8.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel8");
    changeText("Margarita");
};
btn9.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel9");
    changeText("Bavarian");
};
btn10.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel10");
    changeText("With goat cheese");
};
btn11.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel11");
    changeText("Prosciutto");
};
btn12.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel12");
    changeText("With Turkey");
};
btn13.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel13");
    changeText("With porcini mushrooms and canterelles");
};
btn14.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel14");
    changeText("Pepperoni");
};
btn15.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel15");
    changeText("Capricciosa classic");
};
btn16.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel16");
    changeText("Premium cheese");
};

btn17.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel17");
    changeText("With lamb");
};
btn18.onclick = function() {
    modal.style.display = "block";
    sel.classList.add("pizza-sel18");
    changeText("With roast beef and porcini mushrooms");
};

span.onclick = function() {
    modal.style.display = "none";
    $("#select").removeClass(this.className.split(' ').pop());
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $("#select").removeClass(this.className.split(' ').pop());

    }
    if (event.target == checkout) {
        checkout.style.display = "none";
    }
};

var checkout = document.getElementById("checkout");

// Get the button that opens the modal
var btnO = document.getElementById("checkout-btn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
btnO.onclick = function() {
    modal.style.display = "none";
    checkout.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
// span1.onclick = function() {
//     checkout.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {

// };

// cost calculation Backend

var sizePrice, basePrice, toppingPrice, quantity, total;

function getSizeVal() {
    var size = document.getElementsByName("size");
    for (var i = 0, length = size.length; i < length; i++) {
        if (size[i].checked) {
            return size[i].value;
        }
    }
}

function getBasePrice() {
    var base = document.getElementsByName("base");
    for (var i = 0, length = base.length; i < length; i++) {
        if (base[i].checked) {
            return base[i].value;
        }
    }
}
const toppings = [];

function getToppings() {
    $("input:checkbox[name=topping]:checked").each(function() {
        toppings.push($(this).val());
        console.log(toppings);
    });
}

function getToppingPrice() {
    getToppings();
    var toppingsPrice = 0;
    for (var i = 0, length = toppings.length; i < length; i++) {
        toppingsPrice += parseInt(toppings[i]);
    }
    console.log(toppingsPrice);
    return toppingsPrice;
}

var totalDelivery = 0;

$(document).ready(function() {
    $("#checkout-btn").click(function(event) {
        event.preventDefault();
        sizePrice = parseInt(getSizeVal());
        console.log(sizePrice);
        basePrice = parseInt(getBasePrice());
        console.log(basePrice);
        var toppingPrice = getToppingPrice();
        console.log(toppingPrice);
        total = sizePrice + basePrice + toppingPrice;
        console.log(total);
        totalDelivery = total + 350;
        console.log(totalDelivery);
        document.getElementById('total-cost').innerHTML = total;

    });
});


$("#final-order").click(function(event) {
    event.preventDefault();

    var person = $("#name").val();
    var phone = $("#phone").val();
    var location = $("#location").val();

    if (
        $("input#name").val() &&
        $("input#phone").val() &&
        $("input#location").val() != ""
    ) {
        document.getElementById("finalmessage").innerHTML = "Dear, " + person + ", We have recieved your order, it will be delivered to " + location + ". Kindly prepare sh. " + totalDelivery;
    } else {
        document.getElementById("finalmessage").innerHTML = "Please fill in all the details for delivery!";
    }
});