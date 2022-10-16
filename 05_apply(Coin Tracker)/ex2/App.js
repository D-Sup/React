import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [input, setInput] = useState(); // 내 코인 
    const [selectCoin, setSelectCoin] = useState(); // 선택한 코인
    const [option, setOption] = useState("");
    const [index, setIndex] = useState(0);
    const [inverter, setInverter] = useState(false); // 입력 창에 따라 다르게 동작하도록 
    

    const Mul = input * selectCoin;
    const Div = input / selectCoin;

    const onChange = (e) => {
        setInput(e.target.value);
    };

    const selectedCoin = (e) => {
        setSelectCoin(e.target.value.split(" ").at(-2)); // Bitcoin(BTC) : 21612.71 $ 공백으로 나누면 [Bitcoin(BTC) ,  : ,  21612.71 ,  $] 중에 -2 번째 선택 
        // setOption(coins[e.target.selectedIndex-1].quotes.USD.price.toFixed(2)); // 위와 같은 코드 
        setOption(e.target.value);
        setIndex(coins[e.target.selectedIndex]);
    };

   
    const inverted = (e) => {
        setInverter((current) => !current);
        setInput(inverter ? Mul : Div ); // 전환 버튼을 눌러도 그대로 값을 유지하기위해 
        // reset();
        console.log(input);
        console.log(selectCoin);
    };
    
    const reset = () => {
        setInput("");
        setIndex(0);
        
    };
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers") //
            .then((res) => res.json())
            .then((datas) => {
                setCoins(datas);
                setLoading(false);
            });
    }, []);

    // console.log(
    //     coins.map((coin) => (
    //         <option>
    //             {coin.name}({coin.symbol}) : {coin.quotes.USD.price.toFixed(2)} $ 
    //         </option>
    //     ))
    // )

    // toFixed - 자릿수 고정 
    return (
        <div>
            <h1>The Coins!</h1>
            {loading ? (
                <div>loading...</div>
            ) : (
                <div>
                    <select onChange={selectedCoin}>
                        <option>Select Coins to exchange!</option>
                        {coins.map((coin) => (
                            <option>
                                {coin.name}({coin.symbol}) : {coin.quotes.USD.price.toFixed(2)} $ 
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div >
                {index.rank-1 === 0 || index === 0 ? <span>-</span> : <span>You chose the {option} item</span>}
            </div>

            <div>
                <form>
                    <div>
                        <label for="money">Your Money</label>
                        <input
                            onChange={onChange}
                            id="money"
                            type="number"
                            value={inverter ? Mul : input}
                            placeholder="money(dollar)"
                            disabled={inverter}
                        />
                    </div>
                    <div>
                        <label for="bitcoin">Coin</label>
                        <input
                            onChange={onChange}
                            id="bitcoin"
                            type="number"
                            value={inverter ? input : Div}
                            placeholder="bitcoin"
                            disabled={!inverter}
                        />
                    </div>
                </form>
                <button onClick={inverted}>
                    {!inverter ? "money->bitcoin"  : "bitcoin->money"}
                </button>
                <button onClick={reset}>reset</button>
            </div>

            <div>
                {index === 0 ? <span>-</span> : 
                    <span>{inverter ? <span>You need {inverter ? Mul : Div } dollars to buy {input} coins</span> : <span>You can buy {inverter ? Mul : Div } Coins for {input} dollar</span> }</span>
                }
            </div>
           
        </div>
    );
}

export default App;