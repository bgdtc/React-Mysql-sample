import './App.css';
// import { useState } from "react"
import ListCard from './components/ListCard'
import { HashRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" index exact element={<ListCard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
