import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Form, Button} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import { useWeb3React } from "@web3-react/core";
import { ethers } from 'ethers';
import swal from 'sweetalert';
import { useRouter } from 'next/router';


export default function JobUploads() {
    
    const { activate, active, library: provider } = useWeb3React();
    const router = useRouter()

  const [formData, setFormDate] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  })
  const [formErrors, setFormErrors] = useState({})


  // deconstruct data
  const { username, email, password, password2 } = formData


  const onChange = (e) => {
    setFormDate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

//   useEffect(() => {
//     if (isError) {
//       swal({
//         title: "Registration Failed",
//         text: message,
//         icon: "error",
//         button: "Try again",
//       });
//     }

    // if (isLoading) {
    //   swal({
    //       title: 'Registration In Process',
    //       text: 'Please wait...',
    //       closeOnEsc: false,
    //       allowOutsideClick: false,
    //       buttons: false,
    //     });
    // }

    // redirect already logged in user or is success is true.
//     if (user || isSuccess) {
//       swal.close()
//     //   navigate("/")
//     }

//   }, [user, isError, isSuccess, message, navigate, dispatch, isLoading])

  // execute
  const onSubmit = async (e) => {
    e.preventDefault()
    // address
    // ABI
    // Node connection >>> metamask
    if (active) {
      const signer = provider.getSigner();
      const contractAddress = "0x6f99e2922cbba08e24fb6084218a8638bd230194"
      const contractABI = [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_payment",
              "type": "uint256"
            }
          ],
          "name": "createService",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "service",
          "outputs": [
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "payment",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user_address",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "services",
          "outputs": [
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "payment",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user_address",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_job_address",
              "type": "address"
            }
          ],
          "name": "signingContract",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "signings",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
      const contract = new ethers.Contract(contractAddress, contractABI, signer)

      try {
        await contract.createService(username, email, password)
        swal({
          title: "Service Created",
          text: "Service successfully created",
          icon: "success",
          button: "Okay",
        }).then(
          router.push('/')
        );
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("Not connected to wallet")
    }
}


//   const onSubmit = (e) => {
//     e.preventDefault()
//     // console.log("Yes")
//     setFormErrors(validate(formData))

//     console.log(formErrors.length)

//     if (!formErrors.length) {
//       // console.log("Form submitted")
//       const name = username

//       const userData = {
//         name,
//         email,
//         password
//       }
//       console.log(userData)
//     }
//   }

  const validate = (formData) => {
    const errors = {}
    const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!formData.username) {
      errors.username_error = "Username is required"
    } else if (formData.username.length <= 3) {
      errors.username_error = "Username must be more than 3 characters long"
    }

    if (!formData.email) {
      errors.email_error = "Service description is required"
    }

    if (!formData.password) {
      errors.password_error = "Password is required"
    } else if (formData.password.length <= 8) {
      errors.password_error = "Password has to be more than 6 characters"
    }

    return errors
  }

  return (
    <main className={styles.main}>
        <h1 className={styles.title}>
            Job Registration
        </h1>
        <form className='form-group' onSubmit={onSubmit}>
            <fieldset className='form-fieldsets'>
            <div className='mb-4 mr-auto ml-auto'>
            </div>
            <div className="mb-3">
                <label for="username" className="form-label">Title</label>
                <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Job Title"
                value={username}
                onChange={onChange}
                />
                <div className="invalid-data" style={{"color": "red"}}>
                    { formErrors.username_error }
                </div>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Service Description</label>
                <textarea
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Service Description"
                value={email}
                onChange={onChange}
                />
                <div className="invalid-data" style={{"color": "red"}}>
                    { formErrors.email_error }
                </div>
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Price For Service</label>
                <input
                type="number"
                className="form-control"
                id="password"
                name="password"
                placeholder="Price For Service"
                value={password}
                onChange={onChange}
                />
                <div className="invalid-data" style={{"color": "red"}}>
                    { formErrors.password_error }
                </div>
            </div>
            <div>
                <button type="submit" className="btn btn-dark">Register</button>
            </div>
            <div>
              <p className='mt-4'>By clicking register, you agree to all the terms and services of Task It.</p> {" "}
              <a href="/Terms">Terms and services</a>
            </div>
            </fieldset>
        </form>
    </main>
  )
}
