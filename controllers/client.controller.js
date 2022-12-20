import { clientServices } from "../service/client_service.js";

const createNewLine = (name, email, id) => {
  const line = document.createElement("tr");
  const content = `
    <td class="td" data-td>
      ${name}
    </td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/edit_client.html?id=${id}"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  line.innerHTML = content;
  // const btn = linea.querySelector("button");
  // btn.addEventListener("click", () => {
  //   const id = btn.id;
  //   clientServices
  //     .eliminarCliente(id)
  //     .then((respuesta) => {
  //       console.log(respuesta);
  //     })
  //     .catch((err) => alert("Ocurrió un error"));
  // });
  return line;
};

const table = document.querySelector("[data-table]");

clientServices
  .listClients()
  .then((data) => {
    data.forEach( ({ name, email, id} ) => {
      const newLine = createNewLine(name, email, id);
      table.appendChild(newLine);
    });
  })
  .catch((error) => alert("Hubo un error."));
