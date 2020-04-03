import data from './data/pokemon/pokemon.js';
import {
  searchText,
} from './data.js';
// traemos del Dom
const stack = document.getElementById('stack');
// visualizar a los pokemones
const stackOfPokemons = document.getElementById('stack');
const showAllPokemon = (arr) => {
  arr.forEach((obj) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('cards');
    pokemonCard.innerHTML = `
                <p>${obj.num}</p>
                <div>
                    <img src="${obj.img}" alt="">
                </div>
                <p><strong>${obj.name}</strong></p>
                <p>${obj.type}</p>
                `;
    stackOfPokemons.appendChild(pokemonCard);
  });
};
showAllPokemon(data.pokemon);
const findByName = document.getElementById('findByName'); // traemos al documento finbyname del dom,
console.log(findByName);
// registramos un evento al objeto que hemos llamado del dom
findByName.addEventListener('keydown', () => {
// creo una nueva variable y lo igualo a dom que hemos traido
// y lo defino con value para el valor enviado
  const findByNamePkm = findByName.value;
  stack(showAllPokemon(searchText(data.pokemon, 'name', findByNamePkm)));
  if (stack.innerHTML === '') {
    stack.innerHTML = `
    <section class="errorText"> // colocamos las opciones de respuesta
      <p class="text1"> Ningún POKÉMON coincide con tu búsqueda</p>
      <p class="text"> Intenta lo siguiente para encontrar resusltados: </p>
      <p class="text"> - Reduce los parámetros de búsqueda</p>
      <p class="text"> - Ingresa sílabas por nombre de Pokémon</p>
      <p class="text"> - No ingreses números</p>
    </section>
    `;
    console.log(findByNamePkm);
  }
});