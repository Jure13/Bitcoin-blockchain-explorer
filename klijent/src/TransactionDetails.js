import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './index.css';
import { Link } from "react-router-dom";


const TransactionDetails = () => {
    const params = useParams()
    const [transaction, setTransaction] = useState([]);
    const [fee, setFee] = useState([])

    useEffect(() => {
        Promise.all([
            fetch("http://localhost:8332/getTransaction/" + params.txId),
            fetch("http://localhost:8332/getFee/" + params.txId),
        ])
        .then(([reTransaction, reFee]) => Promise.all([reTransaction.json(), reFee.json()])
        )
        .then(([dataTransaction, dataFee]) => {
            setTransaction(dataTransaction);
            setFee(dataFee)
        });
    }, [params])

    return (transaction && transaction.vin && transaction ) && (
        <div className="tx">
            <h2>Transakcija: {transaction.txid} {}</h2>
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row">Naknada:</th>
                        <td>{fee} satoshija</td>
                    </tr>
                    <tr>
                        <th scope="row">Hash:</th>
                        <td>{transaction.hash}</td>
                    </tr>
                    <tr>
                        <th scope="row">Veličina:</th>
                        <td>{transaction.size} bajtova</td>
                    </tr>
                    <tr>
                        <th scope="row">Težina:</th>
                        <td>{transaction.weight}</td>
                    </tr>
                    <tr>
                        <th scope="row">Vrijeme zaključavanja:</th>
                        <td>{transaction.locktime}</td>
                    </tr>
                    <tr>
                        <th scope="row">Broj ulaza:</th>
                        <td>{transaction.vin.length}</td>
                    </tr>
                    <tr>
                        <th scope="row">Broj izlaza:</th>
                        <td>{transaction.vout.length}</td>
                    </tr>
                    <tr>
                        <th scope="row">Ulazne transakcije:</th>
                        <td>{transaction.vin.map(tx => <Link to={"/transaction/details/" + tx.txid}> <p>{tx.txid}</p> </Link>)}</td>
                    </tr>
                </tbody>
            </table>

            <br/>
            <button className="tipka" type="submit" >
                <Link to="/">Početna</Link>
           </button>
        </div>
    )
}

export default TransactionDetails;