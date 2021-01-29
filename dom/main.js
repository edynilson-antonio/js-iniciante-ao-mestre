// Acessar pelo ID
document.getElementById("title1").textContent = "Curso Javascript Completo 2021";

// Pelo querySelector - posssível passar qualquer seletor de CSS
document.querySelector("#title1");
document.querySelector("#idmain p");


// Selecionar pela classe | preciso passar o indice "HTMLCollection"...
document.getElementsByClassName("paragrafo2")[0]

// Utilizando o querySelectorAll | preciso especificar o indice "NodeList"...
document.querySelectorAll(".paragrafo2")[1]
document.querySelectorAll("#idmain p")

// Selecionando pela TAG
document.getElementsByTagName("p")