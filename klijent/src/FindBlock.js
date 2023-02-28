import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import BlockDetails from "./BlockDetails";


const FindBlock = () => {
    const [blockTag, setBlockTag] = useState("");
    const [blockInfo, setBlockInfo] = useState(null);
    const [testInfo, setTestInfo] = useState(null);
    // const [transaction, setTransaction] = useState([]);    
    
    useEffect(() => {
        fetch("http://localhost:8332/start").then((response) => response.json())
            .then((result) => {
                setTestInfo(result)
            })
    }, [])

    const navigate = useNavigate();

    const handleSearch = (e, data) => {
        e.preventDefault();

        if(data.substring(0, 10) === "0000000000") {
            fetch("http://localhost:8332/getBlock/" + data).then((response) => response.json())
            .then((result) => {
                console.log(result)
                setBlockInfo(result)
                // setTransaction([])
            })

            return;
        }

        if(data.length <= 6) {
            fetch("http://localhost:8332/blockInfo/" + data).then((response) => response.json())
            .then((result) => {
                console.log(result)
                setBlockInfo(result)
                // setTransaction([])
            })

            return;
        }
        if(data.length > 7) {
            // console.log(result)
            // setTransaction(result)
            // setBlockInfo([])
            // setBlockTag([])

            navigate("/transaction/details/" + data);

            return;
        }
    }

    return(
        <div className="mainContainer">
            <h2>Bitcoin Explorer</h2>
            <br/>
            <form className="card" onSubmit={(e) => handleSearch(e, blockTag)}>
                <input className="trazilica"
                type="text" placeholder="Pretraži" onChange={e => setBlockTag(e.target.value) } />
                <br/>
                <button className="tipka" 
                type="submit" onClick={(e) => handleSearch(e, blockTag)}>
                    Pretraži
                </button>
            </form>
            
            <br/>
            {blockInfo &&(
                <BlockDetails props={blockInfo} />
            )}

            
            {testInfo != null && blockInfo == null ? (
                <div className="server">
                    <h1>Podatci o serveru</h1>
                    <p>{testInfo.chain}</p>
                    <p>Broj blokova: { testInfo.blocks }</p>
                </div>
            ): blockInfo != null ? (<></>) : <h4>Neuspješno spjanje na server! {console.log(testInfo)}</h4>    
            }

        </div>
    );
}

export default FindBlock;