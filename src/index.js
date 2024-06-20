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
  sort: null, // ascRating descRating ascData descData
  search: null,
  page: 1,
};

function renderPage() {
  root.innerHTML = '';
  root.append(
    Search(state.search, state.sort, clearFilter),
    Sort(),
    List(state.currentData, state.page, deleteItem),
    Pagination(state.page, state.currentData.length, changePage)
  );
}

fetchData().then((data) => {
  state.currentData = data;
  state.data = data;
  renderPage();
});

function changePage(page) {
  state.page = page;
  renderPage();
}

function clearFilter() {
  state.currentData = state.data;
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
