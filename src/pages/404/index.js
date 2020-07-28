import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function Pagina404() {
    return (
        <PageDefault>
            <h1>Poxa champs, página não encontrada!</h1>

            <Link to="/" >
                Vai na home e tenta de novo. Vai dar certo!
            </Link>
        </PageDefault>
    )
}

export default Pagina404;