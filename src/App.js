import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [count, setCount] = useState(0);

  const insertMoney = (event) => {
    setMoney(event.target.value);
    getCount();
  }

  const getCount = () => {
    setCount(Math.round(money / document.querySelector('#coin').value));
  }

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(responce => responce.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  },[]);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {
        loading ? (
          <strong>Loading...</strong>
          ) : (
          <select id="coin" onChange={getCount}>
          {coins.map((coin) => 
            <option value={coin.quotes.USD.price} key={coin.id}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>
          )}
          </select>
        )
      }
      <div>
      <span>$</span><input type="number" placeholder="write the money (USD)" onChange={insertMoney} value={money} /><span>USD</span>
      </div>
      <span>you can buy {count}</span>
    </div>
  );
}

export default App;
