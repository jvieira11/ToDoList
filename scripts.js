function adicionarTarefa() {
  const input = document.querySelector("input");
  const texto = input.value.trim();

  if (texto === "") {
    input.focus();
    return;
  }

  const li = document.createElement("li");
  li.textContent = texto;

  const remover = document.createElement("span");
  remover.textContent = "ⓧ";
  remover.onclick = function () {
    deletarTarefa(this);
  };
  li.appendChild(remover);

  document.querySelector("ul").appendChild(li);

  input.value = "";
  input.focus();
}

function deletarTarefa(li) {
  li.parentElement.remove();
}

document.querySelector("input").addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    adicionarTarefa();
  }
});
