// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract SalaryRegistry{
    address public owner;

    struct JobDescription{
        string title;
        string description;
        uint256 payment;
    }

    mapping(address => JobDescription) public service;



    function createService(string memory _title, string memory _description, uint256 _payment) public {
        JobDescription memory job_desc = JobDescription(_title, _description, _payment);
        service[msg.sender] = (job_desc);
    }

    


}