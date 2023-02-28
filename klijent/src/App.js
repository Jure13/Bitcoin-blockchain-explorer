import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BlockDetails from './BlockDetails';
import TransactionDetails from "./TransactionDetails";
import FindBlock from './FindBlock';


const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FindBlock />} />
          <Route path="/block/:blockTag" element={<BlockDetails />} />
          <Route path="/transaction/details/:txId" element={<TransactionDetails />} />
        </Routes>
      </Router>
    </div>
  );
  //000000000000003083d840d879ddfa18324ded724cab984c57721ca2a30ffd9c
}

export default App
