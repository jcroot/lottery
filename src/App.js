import './index.css';
import Input from "./components/Input";
import {useEffect} from "react";
import Register from "./components/Register";
import Roulette from "./components/Roulette";

function App() {

    useEffect(() => {
        document.body.classList.add("h-full");
        document.body.classList.add("bg-gray-50");
        return () => {
            document.body.classList.remove("h-full");
        };
    }, []);

    return (
        <div className="App">
            <Input />
            <Register />
            <Roulette />
        </div>
    );
}

export default App;
