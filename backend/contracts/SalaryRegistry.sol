// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract SalaryRegistry{

    // struct to define each job
    struct JobDescription{
        string title;
        string description;
        uint256 payment;
        address user_address;
    }

    // mappings we need to store different info
    mapping(address => JobDescription) public service;
    mapping(address => address) public signings;

    
    function createService(string memory _title, string memory _description, uint256 _payment, address _user_address) public {
        JobDescription memory job_desc = JobDescription(_title, _description, _payment, _user_address);

        // save the job in the mapping with the address of the sender(caller)
        service[msg.sender] = job_desc;
    }


    function signingContract(address _job_address) external payable{
        // get the job struct
        JobDescription memory job = service[_job_address];

        // make sure the paid amount is equivalent to the amount required by the job
        require(msg.value == job.payment);
        
        // user signs the contract for the job
        signings[msg.sender] = _job_address;

        // store the about in the contract account
    }

}