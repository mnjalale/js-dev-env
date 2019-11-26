import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

const getUsers = () => {
  return get('users');
}

const deleteUser = (id) => {
  return del(`users/${id}`);
}

const get = url => {
  url = baseUrl + url;
  return fetch(url).then(onSuccess,onError);
}

const del = url => {
  url = baseUrl + url;
  return fetch(url, { method: 'DELETE' }).then(onSuccess,onError);
}

const onSuccess = response => {
  return response.json();
}

const onError = error => {
  console.log(error); // eslint-disable-line no-console
}

export {
  getUsers,
  deleteUser
};
