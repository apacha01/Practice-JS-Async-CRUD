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

	const btn = line.querySelector("button");
	btn.addEventListener("click", async () => {
		const id = btn.id;

		try{
			const deletedClient = clientServices.deleteClient(id);
			if (!deletedClient) throw new Error();
			location.reload();
		} catch (error) {
			window.location.href = "/screens/error.html";
			console.log(error);
		}
	});

	return line;
}

const showClients = async () => {
	const table = document.querySelector("[data-table]");

	try {
		const list = await clientServices.listClients();
		if (list) {
			list.forEach(element => {
				const newLine = createNewLine(element.name, element.email, element.id);
				table.appendChild(newLine);
			});
		}
	} catch (error){
		window.location.href = "/screens/error.html";
		console.log(error);
	}
};

showClients();