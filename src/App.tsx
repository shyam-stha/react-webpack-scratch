import "./styles.css";
import reactLogo from "./react.png";
import logo from "./logo.svg";

const App = () => {
    return (
        <div className="container">
            <h1>This is my first Webpack react scratch app</h1>
            <img src={reactLogo} alt="react logo" /> <br />
            <img src={logo} alt="react logo" width={"300"} />
        </div>
    );
};

export default App;
