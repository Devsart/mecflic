/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CategoryController() {
  const [cat, setCat] = useState(['Filmes']);

  const InitialValues = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [values, setValues] = useState(InitialValues);

  function setValue(field, newvalue) {
    setValues({
      ...values,
      [field]: newvalue,
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'),
      event.target.value);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>
      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        console.log('Enviado!');
        setCat([
          ...cat,
          values.name,
        ]);
      }}
      >
        <FormField
          label="Nome da Categoria"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          className="input"
        />

        <FormField
          label="Descrição: "
          name="description"
          type="textarea"
          value={values.description}
          onChange={handleChange}
        />
        {/* <div>
              <label>
                Descrição:
                  <textarea
                    name="description"
                    type="text"
                    value = {values.description}
                    onChange = {handleChange}
                  />
              </label>
            </div> */}
        <FormField
          label="Cor: "
          name="color"
          type="color"
          value={values.color}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>
      <ul>
        {cat.map((cat, i) => (
          <li key={`${cat}${i}`}>
            {cat}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Página Principal
      </Link>
    </PageDefault>
  );
}

export default CategoryController;
