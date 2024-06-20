import { addElement } from '../../utils/utilits';
import searchIcon from '../../assets/images/search-icon.svg';
import cleanIcon from '../../assets/images/clean-icon.svg';
import './Search.css';

export default function Search(search, sort, clearFilter) {
  const searchElem = addElement('div', 'search');
  const searchInputWrapper = addElement('div', 'search-input-wrapper');

  const searchInputImg = addElement('img', 'search-input-img');
  searchInputImg.src = searchIcon;
  searchInputImg.alt = 'Search';

  const searchInput = addElement('input', 'search-input');
  searchInput.placeholder = 'Поиск по имени или e-mail';

  searchInputWrapper.append(searchInputImg, searchInput);
  searchElem.append(searchInputWrapper);

  if (search || sort) {
    const cleanBtn = addElement('button', 'clean-btn');
    cleanBtn.addEventListener('click', clearFilter);

    const cleanBtnImg = addElement('img', 'clean-btn-img');
    cleanBtnImg.src = cleanIcon;
    cleanBtnImg.alt = 'Clean';

    const cleanBtnText = addElement(
      'span',
      'clean-btn-text',
      'Очистить фильтр',
    );

    cleanBtn.append(cleanBtnImg, cleanBtnText);
    searchElem.append(cleanBtn);
  }

  return searchElem;
}
