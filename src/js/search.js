import { renderEvents } from './events';
import { page, reset } from './pagination.js';

const form = document.querySelector('.form');
export let query = '';
const link = document.querySelector('.list');

form.addEventListener('submit', e => {
  e.preventDefault();

  link.innerHTML = '';

  query = e.target.elements.search.value.trim();

  if (query === '') {
    alert('Ти щось забув!');
    return;
  }

  renderEvents(page, query);
  form.reset();
});
