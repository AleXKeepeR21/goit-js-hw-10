export { fetchCountries };

function fetchCountries(name) {
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => response.json())
    .then(name => {
      const markup = name.results
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
    });

  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   return response.json();
  // })
  // .then(name =>{
  //   console.log(name);
  // })
  // .catch(error => console.log(error));
}
