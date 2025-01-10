const burger_Menu =document.querySelector(".burger-menu");
const side_bar =document.querySelector(".sidebar");
const nav_bar =document.querySelector(".nav-bar");
const close_button =document.querySelector(".close-button");
const left_btn =document.querySelector(".left-btn");
const right_btn =document.querySelector(".right-btn");
const proof_images =document.querySelector(".proof-images");
const callToAction= document.querySelector(".call-to-action-btn");
const main= document.querySelector("main");

burger_Menu.addEventListener("click", function(){
    side_bar.style.display="block";
    nav_bar.style.display="none";
    main.classList.add('blur');

});

close_button.addEventListener("click", function(){
    side_bar.style.display="none";
    nav_bar.style.display="flex";
    main.classList.remove('blur');
})

left_btn.addEventListener("click", function(){
    proof_images.scrollBy({
        left:-300,
        behavior:"smooth"
    })
})
right_btn.addEventListener("click", function(){
    proof_images.scrollBy({
        left:300,
        behavior:"smooth"
    })
})
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Enter key pressed');
        event.preventDefault();
        callToAction.focus();
        callToAction.click();
    }
});



