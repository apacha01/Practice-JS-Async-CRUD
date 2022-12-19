const http = new XMLHttpRequest();

http.open("GET", "http://localhost:3000/perfil");

http.send();

http.onload = () => {
	const data = JSON.parse(http.response);
	console.log(data);
};