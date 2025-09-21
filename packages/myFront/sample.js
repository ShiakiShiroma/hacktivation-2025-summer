const express = require('express');
const app = express();
const port = 8080;
const data = require("../contract/out/MyNFT.sol/MyNFT.json")
import Web3 from 'web3';

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
  //console.log(data.abi);
  const handleIncrement = async () => {
    if (typeof window.ethereum === "undefined") {
      //alert("MetaMaskが見つかりません");
      console.log("MetaMaskが見つかりません");
      return;
    }
    console.log(counterABI.abi);
  };

  handleIncrement();
  res.send('Hello World from Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});