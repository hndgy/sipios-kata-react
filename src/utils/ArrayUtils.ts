export const ArrayUtils = {
  distinct(array: any[]) {
    return array.filter((el, index, arr) => arr.indexOf(el) === index);
  },
};
