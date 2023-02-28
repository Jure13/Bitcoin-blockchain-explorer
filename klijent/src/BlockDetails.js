import React from "react";
import { Link } from "react-router-dom";


const BlockDetails = ({props}) => {
    console.log(props)

    return(
        <div className="blok">
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Blok</th>
                <th scope="col">{props.height}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Visina</th>
                    <td>{props.height}</td>
                </tr>
                <tr>
                    <th scope="row">Hash</th>
                    <td>{props.hash}</td>
                </tr>
                <tr>
                    <th scope="row">Težina (diff)</th>
                    <td>{props.difficulty}</td>
                </tr>
                <tr>
                    <th scope="row">Inačica</th>
                    <td>{props.version}</td>
                </tr>
                <tr>
                    <th scope="row">Veličina</th>
                    <td>{props.size}</td>
                </tr>
                <tr>
                    <th scope="row">Stripped veličina</th>
                    <td>{props.strippedsize}</td>
                </tr>
                <tr>
                    <th scope="row">Težina (wight)</th>
                    <td>{props.weight}</td>
                </tr>
                <tr>
                    <th scope="row">Nonce</th>
                    <td>{props.nonce}</td>
                </tr>
                <tr>
                    <th scope="row">Merkle čvor</th>
                    <td>{props.merkleroot}</td>
                </tr>
                <tr>
                    <th scope="row">Broj transakcija</th>
                    <td>{props.nTx}</td>
                </tr>
                <tr>
                    <th scope="row">Potvrda</th>
                    <td>{props.confirmations}</td>
                </tr>
                <tr>
                    <th scope="row">Transakcije</th>
                    <td>{props.tx.map(tx => <Link to={"/transaction/details/" + tx}> <p>{tx}</p> </Link>)}</td>
                </tr>
            </tbody>
            </table>

        </div>
    );
}

export default BlockDetails;