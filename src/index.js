import List from './components/List/List';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';
import { fetchData } from './utils/utilits';
import './style.css';

const root = document.querySelector('.main');

const state = {
  data: null,
  currentData: null,
  sort: null,
  search: null,
  page: 1,
};

function renderPage() {
  root.innerHTML = '';
  root.append(
    Search(state.search, state.sort, clearFilter),
    Sort(state.sort, sortList),
    List(state.currentData, state.page, deleteItem),
    Pagination(state.page, state.currentData.length, changePage)
  );
}

fetchData().then((data) => {
  state.data = data.slice();
  state.currentData = data.slice();
  renderPage();
});

function changePage(page) {
  state.page = page;
  renderPage();
}

function clearFilter() {
  state.currentData = state.data.slice(0);
  state.sort = null;
  state.search = null;
  state.page = 1;
  renderPage();
}

function deleteItem(id) {
  state.data = state.data.filter((el) => el.id !== id);
  state.currentData = state.currentData.filter((el) => el.id !== id);
  if (state.page - 1 === state.currentData.length / 5) state.page -= 1;
  renderPage();
}

function sortList(sort) {
  state.sort = sort;
  state.page = 1;
  switch (sort) {
    case 'ascDate':
      state.currentData = state.currentData.sort(
        (a, b) => new Date(b.registration_date) - new Date(a.registration_date)
      );
      break;

    case 'descDate':
      state.currentData = state.currentData.sort(
        (a, b) => new Date(a.registration_date) - new Date(b.registration_date)
      );
      break;

    case 'ascRating':
      state.currentData = state.currentData.sort((a, b) => b.rating - a.rating);
      break;

    case 'descRating':
      state.currentData = state.currentData.sort((a, b) => a.rating - b.rating);
      break;

    default:
      state.currentData = state.data;
      break;
  }

  renderPage();
}
