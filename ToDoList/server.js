import express from 'express';

const app = express();
const host = 'localhost';
const port = 8000;

import setup from "./controller/routes.js";


import connectionToDb from "./database.js";

app.use(express.json());

connectionToDb().then(() => {

	setup(app);
app.listen(8000, () => {
	console.log('Server is running on http://localhost:8000');
})
}).catch((error) => {
	console.log('Server not started' + error);
})
