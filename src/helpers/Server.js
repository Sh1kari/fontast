const url = 'https://fontast.herokuapp.com';

export const getUrl = () => url;

export const fetchUrl = url => {
  return fetch(`${getUrl()}/${url}`);
};
