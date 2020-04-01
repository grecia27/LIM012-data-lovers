import {
  searchtext,
} from './data.js';
import data from './data/pokemon/pokemon.js';



//visualizar a los pokemones
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



  const findByName = document.getElementById('findByName');
  findByName.addEventListener('keyup',() => {
    const inputTextPkm = findByName.value.tolowercase();
    showAllPokemon(searchtext(data.pokemon,'name',inputTextPkm));
    if(pokedata.innerHTML === '') {
      pokedata.innerHTML = `
      <section class ='errortext'>
      <p class='text1'> Ningun pokemon coincide</p>
      </section>
      `;
    }
    });
 

