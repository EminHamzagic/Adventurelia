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