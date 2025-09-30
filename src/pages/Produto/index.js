import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

function Produto(){

    const {id} = useParams(); 
    const [produtos, setProdutos] = useState([]);
    const [produto, setProduto] = useState(null);

    useEffect(() => {setProdutos([{id: 1, nome: 'Shampoo', valor: 10.50}, {id: 2, nome: 'Condicionador', valor: 8.50}, {id: 3, nome: 'Sabonete', valor: 5.50}])}, []);
    useEffect(() => {setProduto(produtos.find((item) => item.id === parseInt(id)));console.log(produto)}, [produtos,id]);

    return(
        produto ? (
        <div>
            <h1>Produto {id}</h1>
            <h2>Detalhes do Produto:</h2>
            <h3>Nome: {produto.nome}</h3>
            <h3>Valor: R$ {produto.valor}</h3>
        </div>):(
        <div>
            <h1>Produto Não Encontrado</h1>
        </div>)
    );
}

export default Produto;