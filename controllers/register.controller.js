import { clientServices } from "../service/client_service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", async (event) => {
	event.preventDefault();
	const name = document.querySelector("[data-nombre]").value;
	const email = document.querySelector("[data-email]").value;

	try{
		const client = await clientServices.createClient(name, email);
		if (!client) throw new Error();
		window.location.href = "/screens/register_complete.html";
	} catch (error) {
		window.location.href = "/screens/error.html";
		console.log(error);
	}
});