pragma solidity ^0.4.19;

contract ChoraTech {

  address private owner;

  struct Account {
    string firstName;
    string lastName;
  }

  mapping (address => Account) accounts;

  event AccountNameSet(bool success);

  function ChoraTech() public {
    owner = msg.sender;
  }

  function getAccount() public constant returns (string, string) {
    return (
      accounts[msg.sender].firstName,
      accounts[msg.sender].lastName
    );
  }

  function setAccountName(string firstName, string lastName) public returns (bool) {
    accounts[msg.sender].firstName = firstName;
    accounts[msg.sender].lastName = lastName;
    return true;
  }

}
