console.log ("holis")

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

document.getElementById('scrollToTop').addEventListener('click',scrollToTop)

window.onscroll = function () {
    var boton = document.getElementById('scrollToTop');
    if(document.documentElement.scrollTop > 40) {
        boton.style.display = "block"
    }else{
        boton.style.display = "none"
    }
}