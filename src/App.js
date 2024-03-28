import './App.css';
import {NavBar} from "./components/NavBar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import ChiSiamo from "./components/ ChiSiamo";
import Menu from "./components/Menu";
import Contattaci from "./components/Contattaci";


function App() {
    return (
        <div>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/chi-siamo' element={<ChiSiamo></ChiSiamo>}></Route>
                    <Route path='/menu' element={<Menu></Menu>}></Route>
                    <Route path='/contattaci' element={<Contattaci></Contattaci>}></Route>
                </Routes>
                <Footer/>
            </Router>

        </div>
    );
}

export default App;
