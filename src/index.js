import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputEl.addEventListener('input', onInput);

// function onInput(evt) {
//   const name = evt.currentTarget.value;
//   console.log(name);

//   fetchCountries(name) ;
// }

function onInput(evt) {
  const name = evt.currentTarget.value;
  // console.log(name);

  fetchCountries(name).then(data => onMarkup);

  function onMarkup() {
    const markup = data.results
      .map(
        item =>
          `<li class="item">
              <img src= ${item.flags} alt="">
              <p class="name">${item.name}</p>
              <p class="capital">${item.capital}</p>
              <p class="population">${item.population}</p>
              <p class="languages">${item.languages}</p>
          </li>`
      )
      .join('');
    document
      .querySelector('.country-list')
      .insertAdjacentHTML('beforeend', markup);
  }
}
