export const orderAZ = (arr, condition) => {
  let result;
  if (condition === 'a-z') {
    result = arr.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
  } else {
    result = arr.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      return -1;
    });
  }
  return result;
};
