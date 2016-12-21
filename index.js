let serverUrl = '';
let authHeader = '';
let token = '';
let globalHeaders;

function init(options) {
    serverUrl = options.serverUrl;
    authHeader = options.authHeader;
    globalHeaders = options.globalHeaders;
}

function setToken(value) {
  token = value;
}

function clearToken() {
  token = '';
}

function getHeaders(headers = {}) {
  if (!authHeader) {
    return headers;
  }
  return {
    ...globalHeaders,
    ...headers,
    [authHeader]: token
  };
}

function ekFetch(url, options = {}) {
  return fetch(`${serverUrl}${url}`, {
    ...options,
    headers: getHeaders(options.headers)
  });
}

export default {
  init,
  setToken,
  clearToken,
  fetch: ekFetch
};
