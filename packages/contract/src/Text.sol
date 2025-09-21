// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Text {
    //メンバ
    string public message;
    uint256 public update_counter;

    //コンストラクタ
    constructor(){
        update_counter = 0;
        message = "default message";
    }

    //メソッド
    function setMessage(string calldata newMessage) public {
        message = newMessage;
        increment();
    }

    function increment() public {
        update_counter++;
    }
}
