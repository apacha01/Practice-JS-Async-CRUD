const createNewLine = (nombre, email, id) => {
  const line = document.createElement("tr");
  const content = `
    <td class="td" data-td>
      ${nombre}
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
  return line;
};

const table = document.querySelector("[data-table]");

const listClients = () =>
	return fetch("http://localhost:3000/perfil").then((response) => response.json());

listClients().then((data) => {
	data.forEach( perfil => {
		table.appendChild(createNewLine(perfil.nombre, perfil.email, 0));
	});
}).catch((error) => alert("Hubo un error."));