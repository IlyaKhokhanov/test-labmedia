import List from './components/List/List';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';
import './style.css';
import { fetchData } from './utils/utilits';

const root = document.querySelector('.main');

fetchData().then((data) => {
  root.append(Search(), Sort(), List(data), Pagination());
  console.log(data);
});
