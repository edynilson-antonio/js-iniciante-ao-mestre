const valueEmail = document.getElementById("txtEmail");

function editarEmail() {
    valueEmail.disabled = false;
    valueEmail.focus();
}

function disableEmail() {
    valueEmail.disabled = true;
}