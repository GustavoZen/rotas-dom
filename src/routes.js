import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Header from './components/Header';
import Produto from './pages/Produto';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" className="headerLink" element = {<Home/>}/>
                <Route path="/sobre" className="headerLink" element = {<Sobre/>}/>
                <Route path="/contato" className="headerLink" element = {<Contato/>}/>
                <Route path="/produto/:id" className="headerLink" element = {<Produto/>}/>
                
                <Route path = "*" className="headerLink" element = {<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;