// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/MyNFT.sol";

contract DeployMyNFT is Script {
    function run() external {
        vm.startBroadcast();

        MyNFT nft = new MyNFT();
        console2.log("MyNFT deployed at:", address(nft));

        vm.stopBroadcast();
    }
}
