export const searchtext = (data, property, condition) => {
  const searchPkm = data.filter(element => (element[property]).indexOf(condition) !== -1);
  return searchPkm;
};

// creamos una variable y lo igualamos a dos propiedades del dom, donde el resultado se guarda
export const searchText = (data, findByName) => {
  const result = [];
  // forEach ejecuta una funcion proporcionada una vez para cada elemento
  data.forEach((eachPokemon) => {
    const namePokemon = eachPokemon.name;
    const lengthtext = findByName.length;
    if (namePokemon.slice(0, lengthtext) === findByName) {
      result.push(eachPokemon);
    }
  });
  return result;
};
console.log(searchText);