import { Button, Table } from 'react-bootstrap';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function WorkHistory(){
    return(
        <main className={styles.main}>
            <h1 className={styles.title}>
                Work History
            </h1>

            <Table striped bordered hover className='m-4'>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Contract Details</th>
                    <th>Employee Address</th>
                    <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <a href='ContractDetails'>0x05B1a1Bf48D40676e65b7E3C9a1Fe036099cF7C1</a>
                        </td>
                        <td>
                            <a href='EmployeeAddress'>0x051a1f4rftK89D40676e65b7E3C9a1Fe036099cr7e4</a>
                        </td>
                        <td>Aug 2020</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <a href='ContractDetails'>0x05B1a1Bf48D40676e65b7E3C9a1Fe036099cF7C1</a>
                        </td>
                        <td>
                            <a href='EmployeeAddress'>0x051a1f4rftK89D40676e65b7E3C9a1Fe036099cr7e4</a>
                        </td>
                        <td>Aug 2019</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <a href='ContractDetails'>0x05B1a1Bf48D40676e65b7E3C9a1Fe036099cF7C1</a>
                        </td>
                        <td>
                            <a href='EmployeeAddress'>0x051a1f4rftK89D40676e65b7E3C9a1Fe036099cr7e4</a>
                        </td>
                        <td>Aug 2017</td>
                    </tr>
                </tbody>
            </Table>

        </main>
    )
}