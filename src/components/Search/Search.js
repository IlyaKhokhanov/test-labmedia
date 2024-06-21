import { addElement } from '../../utils/utilits';
import searchIcon from '../../assets/images/search-icon.svg';
import cleanIcon from '../../assets/images/clean-icon.svg';
import './Search.css';

export default function Search(search, sort, clearFilter, searchFilter) {
  const searchElem = addElement('div', 'search');
  const searchInputWrapper = addElement('div', 'search-input__wrapper');

  const searchInputImg = addElement('img', 'search-input__img');
  searchInputImg.src = searchIcon;
  searchInputImg.alt = 'Search';

  const searchInput = addElement('input', 'search__input');
  searchInput.placeholder = 'Поиск по имени или e-mail';
  if (search) {
    searchInput.value = search;
  }
  searchInput.addEventListener('input', (e) => {
    searchFilter(searchInput.value, e.target.selectionStart);
  });

  searchInputWrapper.append(searchInputImg, searchInput);
  searchElem.append(searchInputWrapper);

  if (search || sort) {
    const cleanBtn = addElement('button', 'clean__btn');
    cleanBtn.addEventListener('click', clearFilter);

    const cleanBtnImg = addElement('img', 'clean-btn__img');
    cleanBtnImg.src = cleanIcon;
    cleanBtnImg.alt = 'Clean';

    const cleanBtnText = addElement(
      'span',
      'clean-btn__text',
      'Очистить фильтр',
    );

    cleanBtn.append(cleanBtnImg, cleanBtnText);
    searchElem.append(cleanBtn);
  }

  return searchElem;
}
