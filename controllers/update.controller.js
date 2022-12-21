import { clientServices } from "../service/client_service.js";

const form = document.querySelector("[data-form]");

const getInfo = async () => {
	const url = new URL(window.location);
	const id = url.searchParams.get("id");

	if (id === null)
		window.location.href = "/screens/error.html";

	const name = document.querySelector("[data-nombre]");
	const email = document.querySelector("[data-email]");

	try {
		const perfil = await clientServices.clientDetailes(id);
		if (perfil.name && perfil.email) {
			name.value = perfil.name;
			email.value = perfil.email;
		} else
			throw new Error();
	} catch (error) {
		window.location.href = "/screens/error.html";
		console.log(error);
	}
};

getInfo();

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const url = new URL(window.location);
	const id = url.searchParams.get("id");

	const name = document.querySelector("[data-nombre]").value;
	const email = document.querySelector("[data-email]").value;
	clientServices.updateClient(name, email, id).then(() => {
		window.location.href = "/screens/edit_concluded.html";
	});
});
