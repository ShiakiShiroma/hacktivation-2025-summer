import express from 'express';
import Web3 from 'web3';
import data from "../contract/out/MyNFT.sol/MyNFT.json" assert { type: "json" };

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    const handleIncrement = async () => {
    if (typeof window.ethereum === "undefined") {
      alert("MetaMaskが見つかりません");
      return;
    }
    setLoading(true);
    try {
        console.log(window.ethereum);
      const web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const contract = new web3.eth.Contract(counterABI.abi, CONTRACT_ADDRESS);
      await contract.methods.increment().send({ from: accounts[0] });
      alert("increment実行しました！");
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  handleIncrement();
  res.send('Hello World from Express!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
