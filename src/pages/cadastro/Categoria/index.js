import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';


function CadastrarCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };

  // quando se coloca a variável entre chaves, é para desestruturar
  // o que é recebido
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      // key [nome dos campos do form]
      [key]: value,
    });
  }

  // método para pegar dinamicamente o 'name' do form e seu respectivo valor
  // para então fazer o set na função
  function handleChange(evento) {
    const { name, value } = evento.target;
    setValue(
      name,
      value,
    );
  }

  useEffect(() => {
    console.log('alooo');
    const URL = 'http://localhost:8080/categorias';

    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(()=>{
    //   setCategorias([
    //     ...categorias,
    //     {
    //       "id": 1,
    //       "nome": "Front End",
    //       "descricao": "uma categoria massa",
    //       "cor": "#cbd1ff"
    //     },
    //     {
    //       "id": 2,
    //       "nome": "Back End",
    //       "descricao": "uma outra categoria massa",
    //       "cor": "#cbd1ff"
    //     }
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(evento) {
        evento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues({ valoresIniciais });
      }}
      >

        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (

          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastrarCategoria;
