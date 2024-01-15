const express = require("express");
const server = express();

server.use(express.json());

app.post("/users", (request, response) => {
	const {email, password} = request.body;

	response.json({email, password});
});

const PORT = 8080;
server.listen(PORT, () => console.log("Server is running"));
