const form = Array.from(document.getElementsByClassName("back_form"));
console.log(form)
const questbutton = document.querySelectorAll('.questions_button');



questbutton[0].addEventListener("click", () => {
    form[0].classList.add("form_active");

})

