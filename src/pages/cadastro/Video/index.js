import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
    const history = useHistory();
    const { handleChange, values } = useForm({
        titulo: 'Vídeo padrão',
        url: 'https://www.youtube.com/watch?v=Q2N1dpxsMXs',
        categoria: 'Categoria padrão',
    });



    return (
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                // alert('Vídeo cadastrado com sucesso.');

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: 1,
                })
                .then(()=> {
                    console.log('Cadastrado com sucesso!');
                    history.push('/');
                });

            }}>
                <FormField
                    label="Título do vídeo"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="URL do vídeo"
                    type="text"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Categoria"
                    type="text"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
        </Button>
            </form>


            <Link to="/cadastro/categoria" >
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;