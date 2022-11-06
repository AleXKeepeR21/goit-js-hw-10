import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onInput, 3000));

function onInput(evt) {
  const name = evt.target.value;
  // console.log(name);

  fetchCountries(name).then(onMarkup);

  function onMarkup(data) {
    // console.log(data)
    const markup = data
      .map(
        item =>
          `<li class="item">
              <img src= ${item.flags.svg} alt="">
              <p class="name">${item.name.official}</p>
              <p class="capital">${item.capital}</p>
              <p class="population">${item.population}</p>
              <p class="languages">${Object.values(item.languages).join(
                ', '
              )}</p>
          </li>`
      )
      .join('');
    countryList.insertAdjacentHTML('beforeend', markup);
    console.log(data);
  }
}

// function onInput(evt) {
//   const name = evt.currentTarget.value;
//   console.log(name);

//   fetchCountries(name) ;
// }

// function onInput(evt) {
//   const inputValue = evt.currentTarget.value;
//   // console.log(name);

//   fetchCountries(inputValue).then(onMarkup);
// }

// function onMarkup() {
//   countryList.innerHTML = data
//     .map(item => {
//       return `<li class="item">
//               <img src= ${item.flags} alt="">
//               <p class="name">${item.name}</p>
//               <p class="capital">${item.capital}</p>
//               <p class="population">${item.population}</p>
//               <p class="languages">${item.languages}</p>
//           </li>`;
//     })
//     .join('');
//   // countryList.insertAdjacentHTML('beforeend', markup);
// }
