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
