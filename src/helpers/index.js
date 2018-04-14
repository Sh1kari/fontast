export const getImg = url => {
  let newUrl;

  try {
    newUrl = require(`../assets/images/${url}.jpg`);
  } catch (err) {
    newUrl = '';
  }

  return newUrl;
};
