import axios from "axios";

export default class LocationController {
	search = (req, res) => {
		const filter = req.query.query;

		if (!filter) {
			return res.status(400).json('Parameter is wrong');
		}

		axios({
			method: 'get',
			url: `${API_URL}/location/search?query=${filter}`,
			responseType: 'json'
		}).then(function (response) {
			res.status(200).json(response.data);
		}).catch(function (err) {
			res.status(500).json(err);
		});
	}
}
