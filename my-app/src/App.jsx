import Card from "./components/Card.jsx";
import React from "react";

class App extends React.Component {
    render() {
        return (
            <div className="MyApp d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
                <Card/>
            </div>
        )
    }
}

export default App
