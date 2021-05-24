export const fetchAndSetState = (url) => {

  fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: "include"
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    // Read the response as json.
    return response.json();
  })
  .then((responseAsJson) => {
    // Do stuff with the JSON
    console.log(responseAsJson);
  })
  .catch((error) => {
    console.log('Looks like there was a problem: \n', error);
  });
};