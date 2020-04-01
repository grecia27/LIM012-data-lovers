export const searchtext = (data, property, condition) =>{
  const searchPkm = data.filter(element => (element[ property ]) . indexOf(condition) !==-1);
  return searchPkm
} ;