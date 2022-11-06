import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

// inputEl.addEventListener('input', onInput);

// function onInput(evt) {
//   // console.dir(evt.currentTarget.elements);

//   // const input = evt.currentTarget..value;
//   // console.log(input);

// }

fetchCountries();
