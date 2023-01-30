import { useState } from "react";
import ClassComponents from "./components/ClassComponents/ClassComponents";
import FunctionalComponents from "./components/FunctionalComponents/FunctionalComponents";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [flag, setFlag] = useState(true);
  const [shut, setShut] = useState(true);
  return (
    <div className="App">
      <Header />
      <hr />
      <button onClick={() => setFlag(!flag)}>
        mount / unMount Class Components{" "}
      </button>
      {flag && <ClassComponents location="India" />}
      <br />
      <hr />
      <button onClick={() => setShut(!shut)}>
        mount / unMount Functional Components
      </button>
      <br />
      {shut && <FunctionalComponents location="Tamil Nadu" />}
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
