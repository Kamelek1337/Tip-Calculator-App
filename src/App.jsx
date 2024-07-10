import Input from "./components/Input.jsx";
import Output from "./components/Output.jsx";
import LogoSVG from "./assets/logo.svg";

function App() {
  return (
    <div className="container">
      <img src={LogoSVG} alt="Logo SVG" />
      <div className="main">
        <Input />
        <Output />
      </div>
    </div>
  );
}

export default App;
