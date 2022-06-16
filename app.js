const inputElement = document.querySelector("#number");
const buttonElement = document.querySelector(".botao1");
const ulElement = document.querySelector("ul");

buttonElement.onclick = ev => {
 ev.preventDefault();

if (inputElement.value) {
   const textElement = document.createElement("span");
   textElement.innerHTML = inputElement.value;

   const btnRemoveElement = document.createElement("button");
   btnRemoveElement.innerHTML = "Remover";

  const liElement = document.createElement("li");
  liElement.appendChild(textElement);
  liElement.appendChild(btnRemoveElement);

  btnRemoveElement.onclick = () => {
   ulElement.removeChild(liElement);
  }

  ulElement.appendChild(liElement);
 inputElement.value = "";
};
};
