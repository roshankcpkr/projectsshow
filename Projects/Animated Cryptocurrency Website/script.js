const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";
const btc = document.getElementById("btc-price");
const eth = document.getElementById("eth-price");
const doge = document.getElementById("doge-price");
const explore = document.getElementById("explore");
const btcDiv = document.getElementById("btc");
const ethDiv = document.getElementById("eth");
const dogeDiv = document.getElementById("doge");

async function getPrice(){
    const response = await fetch(apiUrl);
    let data = await response.json();
    btc.innerHTML = "$" + data.bitcoin.usd;
    eth.innerHTML = "$" + Math.round(data.ethereum.usd);
    doge.innerHTML = "$" + data.dogecoin.usd.toFixed(2);
}       

getPrice();

explore.addEventListener("click", () => {
    window.open("https://www.github.com/manisanghsharma");
});

btcDiv.addEventListener("click", () => {
    window.open("https://coinmarketcap.com/currencies/bitcoin/");
})

ethDiv.addEventListener("click", () => {
    window.open("https://coinmarketcap.com/currencies/ethereum/");
})

dogeDiv.addEventListener("click", () => {
    window.open("https://coinmarketcap.com/currencies/dogecoin/");
})
//data from coingecko