import axios from 'axios';

const API_KEY = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

async function fetchData(page) {
  const response = await axios.get(`${BASE_URL}events.json?apikey=${API_KEY}&`);
}

// https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey={apikey}
