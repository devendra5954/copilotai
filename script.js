
// Page load animation

document.addEventListener("DOMContentLoaded", function(){


    const card = document.querySelector(".sale-card");


    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";


    setTimeout(()=>{


        card.style.transition = "all 1s ease";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";


    },200);



});




// Button click effect

const button = document.querySelector(".contact a");


button.addEventListener("click", function(){


    button.innerHTML = "Opening Email...";


});
