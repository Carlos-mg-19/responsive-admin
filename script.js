let list = document.querySelectorAll('.navegation li ');
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('hovered'));
    this.classList.add('hovered');
    
}
list.forEach((item) =>
item.addEventListener('click', activeLink)
);

let navegation = document.querySelector('.navegation')
let toggle = document.querySelector('.toggle')
let main = document.querySelector('.main')

toggle.onclick = function(){
    navegation.classList.toggle('active')
    main.classList.toggle('active')
}