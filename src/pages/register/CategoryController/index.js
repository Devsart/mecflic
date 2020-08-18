/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CategoryController() {
  //  useEffect tutorial:
  //  What will happen? We put into the { }.
  //  When will it happen? we put it into the [ ].

  const [cat, setCat] = useState(['Filmes']);

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (response) => {
        const jsonres = await response.json();
        setCat([
          ...jsonres,
        ]);
      });
  }, []);

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
        {' '}
        {values.name}
      </h1>
      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
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
        {cat.map((category, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${category}${i}`}>
            {category.titulo}
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
