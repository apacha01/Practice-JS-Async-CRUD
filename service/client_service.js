const crearNuevaLinea = (nombre, email, id) => {
  const linea = document.createElement("tr");
  const contenido = `
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
  linea.innerHTML = contenido;
  return linea;
};

const table = document.querySelector("[data-table]");
const http = new XMLHttpRequest();

http.open("GET", "http://localhost:3000/perfil");

http.send();

http.onload = () => {
	const data = JSON.parse(http.response);
	data.forEach( perfil => {
		table.appendChild(crearNuevaLinea(perfil.nombre, perfil.email, 0));
	});
};