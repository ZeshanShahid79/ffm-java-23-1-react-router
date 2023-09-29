
import './App.css'
import Hello from "./Hello.tsx";
import World from "./World.tsx";
import {Link, Navigate, Route, Routes} from "react-router-dom";

function App() {


  return (
    <>
        <Routes>
            <Route path={"/"} element={<Hello />}/>
            <Route path={"/world"} element={<World/>}/>
            <Route path={"/world/:planet"} element={<World/>}/>
            <Route path={"/*"} element={<Navigate to={"/"}/>}/>
        </Routes>

        <ul>
            <li><Link to={"/"}>Zurück zur Homepage</Link></li>
            <li><Link to={"/world"}>Zur World Seite</Link></li>

        </ul>
    </>
  )
}

export default App
