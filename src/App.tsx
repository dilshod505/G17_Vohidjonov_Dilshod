import React from 'react';
import './App.css';
import Main, {MyCards} from "./components/Main";
import {Route, Routes} from "react-router-dom";

function App() {
    const [open, setOpen] = React.useState<boolean>(true);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main open={open} setOpen={setOpen}/>}/>
                <Route path="/my-cards" element={<MyCards open={open} setOpen={setOpen}/>}/>
            </Routes>
        </div>
    );
}

export default App;
