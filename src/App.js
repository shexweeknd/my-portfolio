import './App.css';

import NotificationBox from "./components/NotificationBox/NotificationBox.js"
import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home.js";
import Bio from "./components/Bio/Bio.js";
import Exp from "./components/Exp/Exp.js";
import Work from "./components/Work/Work.js";
import Contact from "./components/Contact/Contact.js";

function App() {
  return (
    <div className="App">
      <NotificationBox/>
      <Nav/>
      <Home/>
      <Bio/>
      <Exp/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
