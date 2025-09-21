const CONTRACT_ADDRESS = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

async function loadABI() {
  // ABI JSON を fetch で取得
  const response = await fetch("./Text.json");
  const textABI = await response.json();

  document.getElementById("incrementBtn").addEventListener("click", async () => {
    if (typeof window.ethereum === "undefined") {
      alert("MetaMask が見つかりません");
      return;
    }

    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const contract = new web3.eth.Contract(textABI.abi, CONTRACT_ADDRESS);
      await contract.methods.increment().send({ from: accounts[0] });
      alert("increment 実行しました！");
    } catch (err) {
      console.error(err);
      alert("エラー: " + err.message);
    }
  });
}

// ページ読み込み時に ABI を取得して初期化
loadABI();
