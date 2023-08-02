import './index.css';
import Input from "./components/Input";
import {useEffect} from "react";
import Register from "./components/Register";
import Roulette from "./components/Roulette";
import {Route, Routes} from "react-router-dom";

function App() {

    useEffect(() => {
        document.body.classList.add("h-full");
        document.body.classList.add("bg-gray-50");
        return () => {
            document.body.classList.remove("h-full");
        };
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Input />} />
                <Route path="/register" element={<Register />} />
                <Route path="/play" element={<Roulette />} />
            </Routes>
        </>
    );
}

export default App;
