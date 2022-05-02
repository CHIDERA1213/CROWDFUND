let navBarContainer = document.querySelector('.navBar')


let openMenu = document.querySelector("#openMenu")
let closeMenu = document.querySelector("#closeMenu") 
let navBar = document.querySelector('.navLinks')
let backthisProjectbtn = document.querySelector('#backthisProjectbtn')
let backthisProject = document.querySelector('#backthisProject')
let closeModal = document.querySelector('#closeModal')
let backthisProjectColumn1 = document.querySelector('.backthisProjectColumn1')
let backthisProjectColumn2 = document.querySelector('.backthisProjectColumn2')
let backthisProjectColumn3 = document.querySelector('.backthisProjectColumn3')
let backthisProjectColumn4 = document.querySelector('.backthisProjectColumn4')
let thankYou = document.querySelector('#thankYou')
let Continue = document.querySelector('.Continue')
let gotitButton = document.querySelector(".gotitButton")


window.onscroll = function(){navBarFunction()}

let height = window.scrollY

console.log(height)

function navBarFunction(){
    if(height>100){
       navBarContainer.classList.add('sticky')
    }else{
        navBarContainer.classList.remove('sticky')
    }
}


openMenu.addEventListener('click',function(){
    navBar.style.top = '25%' 
    openMenu.style.display ='none'
    closeMenu.style.display = 'block'
    navBar.style.boxShadow = '7px 7px 500px black'
})
closeMenu.addEventListener('click',function(){
    navBar.style.top = '-30%' 
    openMenu.style.display ='block'
    closeMenu.style.display = 'none'
})

backthisProjectbtn.addEventListener('click',function(){
    backthisProject.style.display='block'
    backthisProject.style.boxShadow = '70px 70px 50000px black'
})

closeModal.addEventListener('click',function(){
    backthisProject.style.display='none'
})

backthisProjectColumn1.addEventListener('click',function(){
    backthisProjectColumn1.style.border='2px solid hsl(176, 50%, 47%)'
})

backthisProjectColumn2.addEventListener('click',function(){
    backthisProjectColumn2.style.border='2px solid hsl(176, 50%, 47%)'
})
backthisProjectColumn3.addEventListener('click',function(){
    backthisProjectColumn3.style.border='2px solid hsl(176, 50%, 47%)'
})
backthisProjectColumn4.addEventListener('click',function(){
    backthisProjectColumn4.style.border='2px solid hsl(176, 50%, 47%)'
})

Continue.addEventListener('click',function(e){
    e.preventDefault()
    thankYou.style.display='block'
    backthisProject.style.display='none'
    console.log("hello")
})
gotitButton.addEventListener('click',function(){
    thankYou.style.display ='none'
})