import axios from 'axios';

const API_KEY = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

export async function fetchData(page, query) {
  const response = await axios.get(
    `${BASE_URL}events.json?apikey=${API_KEY}&page=${page}&keyword=${query}`
  );
  return response.data;
}

fetchData(1);
