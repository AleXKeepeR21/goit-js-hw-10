import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

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

  if (coutriesSearch.trim() === '') {
    Notiflix.Notify.failure(
      'Oops, the country name must not start with a space 😺'
    );
    return;
  }

  fetchCountries(coutriesSearch).then(onMarkup).catch(onFetchError);
}

function onMarkup(data) {
  resetData();

  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }

  if (data.length >= 2 && data.length <= 10) {
    const markupCountryList = data
      .map(({ flags, name }) => {
        return `<li class="country-list__item">
              <img src= "${flags.svg}" alt=${name.official}  width="30" height="20">
              <h2 class="name">${name.official}</h2>

          </li>`;
      })
      .join('');
    countryList.insertAdjacentHTML('beforeend', markupCountryList);
  }

  if (data.length === 1) {
    const markupCountryInfo = data
      .map(({ flags, name, capital, population, languages }) => {
        return `<div class="country-info__item">
              <li class="country-list__item">
              <img src= "${flags.svg}" alt=${
          name.official
        }  width="30" height="20">
              <h2 class="name">${name.official}</h2>
          </li>
              <p class="capital"><b>Capital:</b> ${capital}</p>
              <p class="population"><b>Population:</b> ${population}</p>
              <p class="languages"><b>Languages:</b> ${Object.values(
                languages
              ).join(', ')}</p>
          </div>`;
      })
      .join('');
    countryInfo.insertAdjacentHTML('beforeend', markupCountryInfo);
  }
}

function resetData() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

function onFetchError(data) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
