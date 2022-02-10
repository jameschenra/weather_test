import axios from "axios";

export default class WeatherController {
	detail = (req, res) => {
		const woeid = req.params.woeid;

		axios({
			method: 'get',
			url: `${API_URL}/location/${woeid}`,
			responseType: 'json'
		}).then(function (response) {
			res.status(200).json(response.data);
		}).catch(function (err) {
			res.status(500).json(err);
		});
	}
}
