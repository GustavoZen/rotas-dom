import { Link } from 'react-router-dom';
import './style.css';

function Header(){
    return(
        <div className="menu">
            <h2>Güs Org</h2>
            <div className='links'>
                <Link to="/">Home</Link> | 
                <Link to="/sobre">Sobre</Link> | 
                <Link to="/contato">Contato</Link>
            </div>
        </div>
    );
}

export default Header;