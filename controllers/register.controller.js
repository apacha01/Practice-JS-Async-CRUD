import { clientServices } from "../service/client_service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  clientServices
    .createClient(name, email)
    .then(() => {
      window.location.href = "/screens/register_complete.html";
    })
    .catch((err) => console.log(err));
});
