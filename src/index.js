import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  resetData();
  const coutriesSearch = evt.target.value;
  if (coutriesSearch === '') {
    resetData();
    return;
  }

  fetchCountries(coutriesSearch).then(onMarkup);

  function onMarkup(data) {
    const markupCountryList = data
      .map(
        item =>
          `<li class="item">
              <img src= ${item.flags.svg} alt="">
              <p class="name">${item.name.official}</p>
             
          </li>`
      )
      .join('');
    countryList.insertAdjacentHTML('beforeend', markupCountryList);

    const markupCountryInfo = data
      .map(
        item =>
          `<li class="iteml">
              
              <p class="capital">Capital: ${item.capital}</p>
              <p class="population">Population: ${item.population}</p>
              <p class="languages">Languages: ${Object.values(
                item.languages
              ).join(', ')}</p>
          </li>`
      )
      .join('');
    countryInfo.insertAdjacentHTML('beforeend', markupCountryInfo);
    console.log(data);
  }
}

function resetData() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}
