import React, { useState } from "react";
import api_auth from "./components/api_auth";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ShareList from "./components/ShareList";
import PortfolioList from "./components/PortfolioList";

const AppContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 10px;
  margin-left: 160px;
`;

const Title = styled.h1`
  color: #000;
`;

function App() {
  const [symbols, setSymbols] = useState([]);

  console.log(api_auth);

  return (
    <Router>
      <Navbar />
      <AppContainer>
        <ContentContainer>
          <Routes>
            <Route path="/" element={<ShareList />} />
            <Route path="/portfolio" element={<PortfolioList />} />
          </Routes>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
