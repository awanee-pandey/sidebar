const navbarLinks =document.querySelectorAll(".nav__list");

for(let i=0; i<navbarLinks.length; i++){
    navbarLinks[i].addEventListener('click',()=>{
        navbarLinks.forEach(element => {
            // element.className='nav__list';
            element.classList.remove('active')
        });
        navbarLinks[i].classList.add('active');
        
     })
    
}

const navbar= document.querySelector('.nav__top');
const toggelBtn = document.querySelector('.toggle-menu');
const section = document.querySelector('.section');

toggelBtn.addEventListener('click',()=>{
    navbar.classList.toggle('collapse');
    toggelBtn.classList.toggle('collapse');
    section.classList.toggle('collapse');
})