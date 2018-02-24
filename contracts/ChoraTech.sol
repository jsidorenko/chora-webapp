pragma solidity ^0.4.19;

contract ChoraTech {

  address private owner;

  function ChoraTech() public {
    owner = msg.sender;
  }
  
}
