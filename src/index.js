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
  activeSearch: false,
};

function renderPage() {
  root.innerHTML = '';
  root.append(
    Search(state.search, state.sort, clearFilter, searchFilter),
    Sort(state.sort, sortList),
    List(state.currentData, state.page, deleteItem),
    Pagination(state.page, state.currentData.length, changePage),
  );
  if (state.activeSearch) {
    document.querySelector('.search-input').focus();
  }
}

fetchData().then((data) => {
  if (Array.isArray(data)) {
    state.data = data.slice();
    state.currentData = data.slice();
    renderPage();
  } else {
    // root.append();
  }
});

function changePage(page) {
  state.page = page;
  state.activeSearch = false;
  renderPage();
}

function clearFilter() {
  state.currentData = state.data.slice(0);
  state.sort = null;
  state.search = null;
  state.page = 1;
  state.activeSearch = false;
  renderPage();
}

function deleteItem(id) {
  state.activeSearch = false;
  state.data = state.data.filter((el) => el.id !== id);
  state.currentData = state.currentData.filter((el) => el.id !== id);
  if (state.page - 1 === state.currentData.length / 5) state.page -= 1;
  renderPage();
}

function sortList(sort) {
  if (sort) {
    state.sort = sort;
    state.activeSearch = false;
  }
  state.page = 1;
  switch (state.sort) {
    case 'ascDate':
      state.currentData = state.currentData.sort(
        (a, b) => new Date(b.registration_date) - new Date(a.registration_date),
      );
      break;

    case 'descDate':
      state.currentData = state.currentData.sort(
        (a, b) => new Date(a.registration_date) - new Date(b.registration_date),
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

function searchFilter(query) {
  state.search = query;
  state.activeSearch = true;
  state.currentData = state.data.filter((el) => {
    const regexp = new RegExp(state.search.trim(), 'gi');
    return el.username.match(regexp) || el.email.match(regexp);
  });
  if (state.sort) {
    sortList();
  }
  renderPage();
}
