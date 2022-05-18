const nav = document.querySelector(".nav")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")

img2.addEventListener("click", function(){
    nav.style.right = "0"
})

img1.addEventListener("click", function(){
    nav.style.right = "-250px"
})