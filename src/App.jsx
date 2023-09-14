import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(true);
 


  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      

      
    </div>
  );
}

export default App;
