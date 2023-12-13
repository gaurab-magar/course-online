// Add custom JavaScript here
// function userScroll(){
//     const navbar= document.querySelector('.navbar');
//     window.addEventListener('scroll',()=>{
//         if(window.scrollY > 50){
//             navbar.classList.add("bg-dark");
//         }else{
//             navbar.classList.remove("bg-dark")
//         }
//     })
// }
// document.addEventListener('DOMContentLoaded',userScroll);


function userScroll(){
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "black" ;
            navbar.style.opacity="0.9";
        }else{
            navbar.style.backgroundColor="transparent";
        }
    })
}
document.addEventListener('DOMContentLoaded',userScroll);