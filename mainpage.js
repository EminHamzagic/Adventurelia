let navbar = 0 

function nav_color(){
    navbar = document.getElementById('nav')
}

window.onload = nav_color

window.onscroll = function(){
    if (window.scrollY > 580) {
        navbar.classList.add('nav_active')
    } else {
        navbar.classList.remove('nav_active')
    }
} 