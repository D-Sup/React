import { useEffect, useState } from "react";
function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [myMoney, setMyMoney] = useState(null);
	const [selectedCoin, setSelectedCoin] = useState("");
	const [selectedCoinPrice, setSelectedCoinPrice] = useState(0);
	const [canBuyTheNum, setCanBuyTheNum] = useState(0);
	useEffect(()=>{
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response)=>response.json())
			.then((json)=>{
				console.log(json);
				setCoins(json);
				setLoading(false);	  
			});
	},[]);
	const onSubmit = (e)=>{
		e.preventDefault();
		setCanBuyTheNum(parseFloat(myMoney)/selectedCoin.quotes.USD.price);
		setMyMoney("");
	}
	const onChangeOption = (e)=>{
		setCanBuyTheNum(0);
		console.log(coins[e.target.selectedIndex].quotes.USD.price);
		setSelectedCoinPrice(coins[e.target.selectedIndex].quotes.USD.price);
		setSelectedCoin(coins[e.target.selectedIndex]);
	}
	const onChange = (e)=>{
		setMyMoney(e.target.value);
	}
	return (
		<div>
			<h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
			{selectedCoinPrice !== 0 ? <span>{selectedCoin.name} ({selectedCoin.symbol}) : ${selectedCoin.quotes.USD.price} USD<br/><br/><br/></span> : <span>-<br/></span> }
			{loading ? <strong>Loading...</strong> :
			<select onChange={onChangeOption}>
				{coins.map((coin,index)=><option key={index}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)}
			</select>
			}
			{loading ? null :
			<form onSubmit={onSubmit}>
				 <input type="text" value={myMoney} onChange={onChange} placeholder="dollar로 취급합니다. 숫자만 입력하세요!"/>
				 <button>계산</button>
			</form>
			}
			{canBuyTheNum === 0 ? null : <h2>사용자님의 자산으로 {`${selectedCoin.name} ${canBuyTheNum}`}개를 구매하실 수 있습니다.</h2>}
		</div>
	);
}

export default App;