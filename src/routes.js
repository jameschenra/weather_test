import * as express from 'express';

import LocationController from './controllers/location.js';
import WeatherController from './controllers/weather.js';

export default function setRoutes(app) {

  const router = express.Router();

  const locationCtrl = new LocationController();
  const weatherCtrl = new WeatherController();
  

  // Locations
  router.route('/location/search').get(locationCtrl.search);

  // Weather detail
  router.route('/location/:woeid').get(weatherCtrl.detail);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);
}
