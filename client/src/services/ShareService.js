const ShareService = {
  getStocks() {
    return fetch("https://dumbstockapi.com/stock").then((res) => res.json());
  },

  getTopStocks() {
    return fetch("http://localhost:9000/api/share").then((res) => res.json());
  },
};


export default ShareService;

