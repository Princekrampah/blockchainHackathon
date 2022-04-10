import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from 'ethers';
import { Button, Card } from 'react-bootstrap';
import { useEffect, useState } from "react"

const injected = new InjectedConnector()

export default function Home() {

  // set services
  const [services, setServices] = useState([])
  const [servicesAvailable, setServicesAvailable] = useState(false)

  const { activate, active, library: provider } = useWeb3React();

  useEffect(() => {
    getServices()
  }, [])


  const getServices = async () => {
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
        const obtainedService = await contract.services(0)
        setServices(obtainedService)
        setServicesAvailable(true)
        console.log(services)
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("Not connected to wallet")
    }
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Task IT - Terms</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h2>Terms And Conditions</h2>
        <ul>
            <li>We charge a 5% fee on the total amount paid to any service provider.</li>
            <li>Conflict resolutions are done using a DAO(Decentralized Authonomous Organization).</li>
            <li>For there to be a transaction of funds to a service provider, there need to be a proof a work.</li>
            <li>Incase a service provider is unable or late to complete a job, 10% of his next job intake will be charged as a fine.</li>
        </ul>
      </main>


    </div>
  )
}