let menu = document.getElementById("menu");
let first = document.getElementById("first");
let closeMenu = document.getElementById("closeMenu");

let online = false;

menu.addEventListener("click",(e)=>{
    first.classList.toggle("-translate-x-full");
    first.classList.toggle("translate-x-0");
})

closeMenu.addEventListener("click",(e)=>{
    first.classList.toggle("-translate-x-full");
    first.classList.toggle("translate-x-0");
})


// menu.addEventListener("click", (e) => {
//     if (online === false) {
//         first.classList.add("flex");
//         first.classList.remove("hidden");
//         online = true;
//     }
//     else {
//         first.classList.add("hidden");
//         first.classList.remove("flex");
//         online = false;
//     }

// })


// closeMenu.addEventListener("click", (e) => {
//     first.classList.add("hidden");
//     first.classList.remove("remove");
// })