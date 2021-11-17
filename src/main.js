/**
 * Build footer content
 * This function gets footer element and set the current year as text
 */
const buildPageFooter = () => {
  document.querySelector("footer span").innerHTML = new Date().getFullYear();
};

/**
 * Pokemon types dictionary
 * For each type mapped we have a color that represent it
 * We'll be using these colors for type badges in pokemon cards
 */
const pokemonTypesDict = () => {
  return {
    all: "#BF011E",
    grass: "#77C750",
    poison: "#4f3a56",
    fire: "#f75231",
    flying: "#9cadf7",
    water: "#4fa7ff",
    bug: "#adbd21",
    normal: "#ada594",
    electric: "#fec634",
    ground: "#b49343",
    fighting: "#a55239",
    psychic: "#ee6f9c",
    rock: "#bda55a",
    ice: "#67d2e9",
    ghost: "#6363b5",
    dragon: "#9987eb",
  };
};

/**
 * Build pokemon cards
 * @param {Array.<{ id: Number, num: String, name: String, img: String, types: Array }>} pokemonList - List of all pokemons
 * @param {Object} typeDict - Pokemon types dictionary
 */
const buildCards = (pokemonList, typeDict) => {
  // Clear any previous data
  document.querySelector(".pokemon-list").innerHTML = "";

  pokemonList.forEach((pokemon) => {
    const pokemonTypes = pokemon.type.map((type) => {
      return `<span class="badge rounded-pill" style="background: ${
        typeDict[type.toLowerCase()]
      }">${type}</span>`;
    });

    const pokemonCard = `
      <div class="col-2">
        <div class="card" id="num${pokemon.num}">
          <div class="card-img">
            <img src="${pokemon.img}" class="card-img-top" alt="${
              pokemon.name
            }">
          </div>
          <div class="card-body">
            <h5 class="card-title">${pokemon.num} - ${pokemon.name}</h5>
            <div class="card-badges">
              ${pokemonTypes.map((type) => type).join("")}
            </div>
          </div>
        </div>
      </div>
    `;

    document
      .querySelector(".pokemon-list")
      .insertAdjacentHTML("beforeend", pokemonCard);
  });
};

/**
 * Load and build pokemon type filters
 * @param {Object} typeDict - Pokemon types dictionary
 */
const loadFilters = (typeDict) => {
  const sortedTypeDict = Object.keys(typeDict).sort();

  sortedTypeDict.forEach((type) => {
    document.querySelector(".filter-type").insertAdjacentHTML(
      "beforeend",
      `<button 
          type="button" 
          class="btn rounded-pill text-capitalize" 
          data-filter-type="${type}"
          style="background: ${typeDict[type]}"
        >
          ${type}
        </button>`
    );
  });
};

/**
 * Handle filter by pokemon type
 * @param {String} type - Pokemon type to be filtered
 * @param {String|null} lastFilter - Last filter status
 * @param {Array.<{ id: Number, num: String, name: String, img: String, types: Array }>} pokemonList - List of all pokemons
 */
const handleFilterByType = (type, lastFilter, pokemonList) => {
  const filterBy = type || lastFilter || 'all';
  let pokeData = pokemonList;

  if (filterBy.toLowerCase() === 'all') {
    pokeData = pokemonList;
  } else {
    pokeData = pokemonList.filter(pokemon => {
      return pokemon.type
        .map((pokeType) => pokeType.toLowerCase())
        .includes(filterBy.toLowerCase());
    })
  }

  buildCards(pokeData, pokemonTypesDict());
};

/**
 * Load page content
 * It will build footer content and load pokemon data from the local json file
 * With the data loaded, we can build pokemon cards and all available filters
 */
const loadPage = () => {
  buildPageFooter();

  fetch('./src/data/pokemon.json')
    .then(response => response.json())
    .then(data => {
      buildCards(data.pokemon, pokemonTypesDict());
      loadFilters(pokemonTypesDict());

      document.querySelectorAll(".filter-type .btn").forEach(typeBtn => {
        typeBtn.addEventListener("click", (event) => {
          handleFilterByType(
            event.target.dataset.filterType,
            null,
            data.pokemon
          );
        });
      });
    })
    .catch(error => console.error('Unabled to load data'))
};

/**
 * On page load we're calling our functions
 */
window.onload = () => {
  loadPage();
};

