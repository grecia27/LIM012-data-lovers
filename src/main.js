import data from './data/pokemon/pokemon.js';


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
// templates, backticks comillas invertidas para concatenar en JS
<<<<<<< HEAD

=======
>>>>>>> 7966a2f58614a1ccc89e1fb0bd6cc2fe916488dc
