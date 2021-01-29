(function(){
    const user = "Edynilson"

    if (user) {
        const topBarElement = document.createElement("div")
        topBarElement.className = "top-bar";
        topBarElement.innerHTML = `<p> Olá, <b> ${user} </b></p>`;

        const parentElement = document.querySelector(".hero");
        parentElement.insertBefore(topBarElement, parentElement.firstElementChild);
        // firstChild (reconhece até um comentário como nó) e firstElementChild
    }


    
})()