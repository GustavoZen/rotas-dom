import {Link} from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Contato:</h1>
            <h2>Número: {'(88)'} 9.9755-3385</h2>
            <br/>
            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link>
        </div>
    );
}

export default Contato;