import { fetchData } from './api.js';
import { page, reset } from './pagination.js';
import { query } from './search';

const link = document.querySelector('.list');

function createMarkup(arr) {
  const murkup = arr.map(({ name }) => `<li><p>${name}</p></li>`).join('');

  link.innerHTML = murkup;
}

export async function renderEvents(page, query) {
  const data = await fetchData(page, query);
  createMarkup(data._embedded.events);

  if (page === 1) {
    reset(data.page.totalElements);
  }
}

renderEvents(page, query);
