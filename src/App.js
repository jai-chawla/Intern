import Home from "./components/Home";
import NavbarOne from "./components/NavbarOne";
import NavbarTwo from "./components/NavbarTwo";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="App bg-dark-blue-navbarOne">
      <NavbarOne/>
      <NavbarTwo/>
      <Home/>
      <Sidebar/>
    </div>
  );
}

export default App;
