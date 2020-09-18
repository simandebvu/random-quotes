export function fetchQuote() {
  const getRandomQuote = quotesData => quotesData.quotes[Math.floor(Math.random()
    * quotesData.quotes.length)];
  return dispatch => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json()).then(JSONRes => {
        dispatch({ type: 'GET_QUOTE', payload: getRandomQuote(JSONRes) });
      }).catch(err => {
        throw new Error(err);
      });
  };
}

export default fetchQuote;
