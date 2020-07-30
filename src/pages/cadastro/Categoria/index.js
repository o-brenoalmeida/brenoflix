import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastrarCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#ffffff'
    }

    // quando se coloca a variável entre chaves, é para desestruturar
    // o que é recebido
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(key, value) {
        setValues({
            ...values,
            // key [nome dos campos do form]
            [key]: value,
        })
    }

    // método para pegar dinamicamente o 'name' do form e seu respectivo valor
    // para então fazer o set na função
    function handleChange(evento) {
        const { name, value } = evento.target;
        setValue(
            name,
            value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(evento) {
                evento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues({ valoresIniciais })
            }}>

                <FormField
                    label="Nome:"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição:"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor:"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />



                <button>
                    Cadastrar
                    </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (

                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>


            <Link to="/" >
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastrarCategoria;