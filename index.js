import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = process.env.PORT;
const DB_URL = process.env.DATABASE_URL;

const app = express();
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function startApp () {
	try {
		await mongoose.connect(DB_URL);
		app.listen(PORT, () => console.log('Server start on port ' + PORT));
	} catch (e) {
		console.log(e);
	}
}

startApp();