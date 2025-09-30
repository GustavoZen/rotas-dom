import {Link} from 'react-router-dom';

function Erro(){
    return(
        <div className="erro">
            <h1>Página não Encontrada</h1> <br/>
            <Link to="/">Tela Inicial</Link>
        </div>
    );
}

export default Erro;