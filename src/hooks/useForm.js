import { useState } from 'react';

function useForm(valoresIniciais) {
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

    function clearForm() {
        setValues(valoresIniciais);
    }

    return {
        values,
        handleChange,
        clearForm,
    };
}

export default useForm;