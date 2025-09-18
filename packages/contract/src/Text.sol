// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Text {
    //メンバ
    string public message;
    uint256 public update_counter;

    //コンストラクタ
//    constructor(){
//        message = "default message";
//    }

    //メソッド
    function setMessage(string calldata newMessage) public {
        message = newMessage;
        increment();
    }

    function increment() public {
        update_counter++;
    }
}
