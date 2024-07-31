import axios from "axios";
import dotenv from "dotenv/config";

class Api {
	static getInstance() {
		return axios.create({
			baseURL: process.env.BASE_URL,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
				Accept: "*/*",
				Authorization:
					"Basic " + Buffer.from(process.env.SERVER_KEY).toString("base64"),
			},
		});
	}
}
export default Api;
