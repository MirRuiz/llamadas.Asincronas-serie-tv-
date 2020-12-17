function getCharacters() {
  return fetch("https://breakingbadapi.com/api/characters").then((response) => {
    return response.json();
  });
}

function getQuotebyAuthor(name) {
  return fetch("https://breakingbadapi.com/api/quote?author=" + name).then(
    (response) => {
      return response.json();
    }
  );
}

export { getCharacters, getQuotebyAuthor };
