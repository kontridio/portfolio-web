
let mybutton = document.getElementById("backToTopBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop); 
    if (scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
