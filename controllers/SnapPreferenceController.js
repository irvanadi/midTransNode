import Api from "../utils/axios.js";

// Post SnapPreference
export async function getSnapPerf(req, res, err) {
	await Api.getInstance()
		.post(`https://app.sandbox.midtrans.com/snap/v1/transactions`, {
			transaction_details: {
				order_id: "ORDER-101",
				gross_amount: 10000,
			},
		})
		.then((res) => {
			console.log(res);
		})
		.catch((error) => {
			console.log(error);
		});
}

export async function getTest(req, res, err) {
	res.send("Test");
}
