import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header/Header.jsx";
import { Contacts } from "./pages/Contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
