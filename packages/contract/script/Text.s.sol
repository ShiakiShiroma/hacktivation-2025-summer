// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {Text} from "../src/Text.sol";

contract TextScript is Script {
    //メンバ
    Text public text;

    //初期化　メソッド
    function run() public {
        vm.startBroadcast();

        text = new Text();

        vm.stopBroadcast();
    }

}
