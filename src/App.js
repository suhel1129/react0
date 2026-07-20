import React, { useState } from "react";
import "./App.css";
import PA from "./sourcecode/pa";
import PB from "./sourcecode/pb";
import PC from "./sourcecode/pc";
import PD from "./sourcecode/pd";
import PE from "./sourcecode/pe";
function App() {
const [program, setProgram] = useState("A");
return (
<div className="container">
<h1>React Lab Programs</h1>
<div className="button-container">
<button onClick={() => setProgram("A")}>Program A</button>
<button onClick={() => setProgram("B")}>Program B</button>
<button onClick={() => setProgram("C")}>Program C</button>
<button onClick={() => setProgram("D")}>Program D</button>
<button onClick={() => setProgram("E")}>Program E</button>
</div>
<hr />
<div className="output">
{program === "A" && <PA />}
{program === "B" && <PB />}
{program === "C" && <PC />}
{program === "D" && <PD />}
{program === "E" && <PE />}
</div>
</div>
);
}
export default App;