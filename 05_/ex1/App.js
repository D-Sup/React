// 7.2 Coin Tracker
import { useEffect, useState } from "react";
function App () {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  // const [coins, setCoins] = useState();
  // 비어있는 array로 두어서 undefined 되지 않도록 함 
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then((json) => { 
      setCoins(json);
      setLoading(false);
    });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong> Loading...</strong>
        ) : (
            <select>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}

    </div>
  )
}

export default App;
