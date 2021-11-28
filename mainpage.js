let navbar = 0 

function nav_color(){
    navbar = document.getElementById('nav')
}

window.onscroll = function(){
    if (window.scrollY > 580) {
        navbar.classList.add('nav_active')
    } else {
        navbar.classList.remove('nav_active')
    }
}

var options = document.getElementsByClassName('option_info')

var option_btns = document.getElementsByClassName('option')

function op_btn1(){
    for (var i = 0; i < options.length; i++){
        options[i].classList.remove('active_option')
    }
    options[0].classList.add('active_option')
    for (let i = 0; i < option_btns.length; i++){
        option_btns[i].style.color = 'white'
        option_btns[i].style.backgroundColor = 'rgb(37, 46, 58)'
    }
    document.getElementById('op1').style.color = 'black'
    document.getElementById('op1').style.backgroundColor = 'rgb(186, 189, 194)'
}

function op_btn2(){
    for (var i = 0; i < options.length; i++){
        options[i].classList.remove('active_option')
    }
    options[1].classList.add('active_option')
    for (let i = 0; i < option_btns.length; i++){
        option_btns[i].style.color = 'white'
        option_btns[i].style.backgroundColor = 'rgb(37, 46, 58)'
    }
    document.getElementById('op2').style.color = 'black'
    document.getElementById('op2').style.backgroundColor = 'rgb(186, 189, 194)'
}

function op_btn3(){
    for (var i = 0; i < options.length; i++){
        options[i].classList.remove('active_option')
    }
    options[2].classList.add('active_option')
    for (let i = 0; i < option_btns.length; i++){
        option_btns[i].style.color = 'white'
        option_btns[i].style.backgroundColor = 'rgb(37, 46, 58)'
    }
    document.getElementById('op3').style.color = 'black'
    document.getElementById('op3').style.backgroundColor = 'rgb(186, 189, 194)'
}

function op_btn4(){
    for (var i = 0; i < options.length; i++){
        options[i].classList.remove('active_option')
    }
    options[3].classList.add('active_option')
    for (let i = 0; i < option_btns.length; i++){
        option_btns[i].style.color = 'white'
        option_btns[i].style.backgroundColor = 'rgb(37, 46, 58)'
    }
    document.getElementById('op4').style.color = 'black'
    document.getElementById('op4').style.backgroundColor = 'rgb(186, 189, 194)'
}

function op_btn5(){
    for (var i = 0; i < options.length; i++){
        options[i].classList.remove('active_option')
    }
    options[4].classList.add('active_option')
    for (let i = 0; i < option_btns.length; i++){
        option_btns[i].style.color = 'white'
        option_btns[i].style.backgroundColor = 'rgb(37, 46, 58)'
    }
    document.getElementById('op5').style.color = 'black'
    document.getElementById('op5').style.backgroundColor = 'rgb(186, 189, 194)'
}

var slideIndex = 0;

function showSlides() {
    var i
    var slides = document.getElementsByClassName("destination_info")
    var dots = document.getElementsByClassName("dot")
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex-1].style.display = "flex"
    dots[slideIndex-1].className += " active"
    setTimeout(showSlides, 2800)
}

var mobile_nav

function mobile_menu_close(){
    mobile_nav.classList.remove('flex')
    mobile_nav.classList.add('none')
}

function mobile_menu(){
    mobile_nav.classList.remove('none')
    mobile_nav.classList.add('flex')
}

window.onload = function(){
    showSlides()
    nav_color()
    mobile_nav = document.getElementById('mobile_menu')
}