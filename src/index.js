import List from './components/List/List';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';
import './style.css';

const root = document.querySelector('.main');

root.append(Search(), Sort(), List(), Pagination());
