import React from 'react';
import Card from "./components/Card/Card";
import {Route, Routes} from "react-router-dom";
import CardList from "./components/CardList/CardList";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/card/:id" element={<Card/>}/>
                <Route path="/" element={<CardList/>}/>
            </Routes>
        </div>
    );
}

export default App;
