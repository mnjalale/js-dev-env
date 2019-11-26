/* eslint-disable no-useless-escape */

const getBaseUrl = () => {
  const baseUrl = getQueryStringParameterName('useMockApi') ? 'http://localhost:3001/' : '/';
  return baseUrl;
}

const getQueryStringParameterName = (name,url) => {
  if(!url) {
    url = window.location.href;
  }

  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);

  if(!results){
    return null;
  }

  if(!results[2]){
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


export default getBaseUrl;
