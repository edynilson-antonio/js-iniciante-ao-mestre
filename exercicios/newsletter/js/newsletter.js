// textContent = exibe o valor que estar contido dentro das tags, para acessar valores de campos do formulário utilizar .value

// (function () {
//     const buttonSendEmail = document.getElementById("btn");
//     const inputEmail = document.getElementById("txtEmail");
//     const feedback = document.getElementById("newsletterFeedback");

//     buttonSendEmail.addEventListener("click", () => {
//             let email = inputEmail.value;
//             feedback.innerHTML = `O e-mail ${email} foi cadastrado!`;
//     })
// })()

const buttonSendEmail = document.getElementById("btn");
const inputEmail = document.getElementById("txtEmail");
const feedback = document.getElementById("newsletterFeedback");


function registerEmail() {
    if (inputEmail.value == "" || inputEmail.value == null) {
        feedback.innerHTML = `Campo vazio, preencha corretamente!`;
    }
}

buttonSendEmail.addEventListener("click", () => {
    let email = inputEmail.value;
    feedback.innerHTML = `O e-mail ${email} foi cadastrado!`;
    registerEmail();
})