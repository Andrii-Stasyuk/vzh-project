const formPopap = document.querySelector(".form-popap");
const closeBtn = document.querySelector(".fa-times");
const footerA = document.querySelector(".footer-a");
footerA.addEventListener("click", appearForm);
function appearForm(ev) {
    ev.preventDefault();
    formPopap.classList.add("form-popap-active");
}
closeBtn.addEventListener("click", closeForm);
function closeForm() {
    formPopap.classList.remove("form-popap-active");
}

const nav = document.querySelector('#menu');
console.log(nav);
document.addEventListener('scroll' , () => {
    if(document.documentElement.scrollTop > 160){
       nav.style.background = "#F8F9FA";
       nav.style.boxShadow = "0 0 10px #777";

    } else {
        nav.style.background = "transparent";
        nav.style.boxShadow = "";
    }
})