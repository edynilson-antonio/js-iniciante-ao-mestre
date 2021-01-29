(function(){
    const user = null
    const navbar = document.querySelector(".top-bar p")

    if (user) {
        // navbar.textContent += user
        navbar.innerHTML += `<b> ${user} </b>`; 
    } else {
        // navbar.parentElement.style.display = "none"
        // navbar.remove() // remover elemento (não funciona no IE)
        const removeElement = navbar.parentElement
        removeElement.parentElement.removeChild(removeElement)
    }

})()

// innerHTML = Vai renderizar as tags HTML inseridas, enquanto o textContent não é capaz de renderizar
// parentElement = elemento pai
// children = irá exibir todos os filhos
// removeChild = remover o elemento filho