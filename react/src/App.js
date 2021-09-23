import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

function App() {
    const [count, setCount] = useState(0);

    console.log(count);
    console.log("Hello world");
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello World!</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Button />
            </header>
        </div>
    );
}

export default App;
