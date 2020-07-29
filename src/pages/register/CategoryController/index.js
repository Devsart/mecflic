import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CategoryController(){
    const [cat, setCat] = useState(['Filmes'])
    const [catName, setCatname] = useState('Filmes');
    const [color, setColor] = useState('')
    const [description, setDescription] = useState("");
  /*  const InitialValues = {
      name: '',
      description: '',
      color: '#000'
    }
  */

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {catName}</h1>
        <form onSubmit={function handleSubmit(e){
          e.preventDefault();
          console.log('Enviado!');
          setCat([
            ...cat,
            catName
          ]);
        }}>
            <div>
              <label>
                Nome da Categoria:
                  <input
                    type="text"
                    value = {catName}
                    onChange = {function handleInputChange(event){
                      console.log(catName);
                      setCatname(event.target.value);
                    }}
                  />
              </label>
            </div>
            <div>
              <label>
                Descrição:
                  <textarea
                    type="text"
                    value = {description}
                    onChange = {function handleTextChange(event){
                      console.log(description);
                      setDescription(event.target.value);
                    }}
                  />
              </label>
            </div>
            <div>
              <label>
                Cor:
                  <input
                    type="color"
                    value = {color}
                    onChange = {function handleColorChange(event){
                      console.log(color);
                      setColor(event.target.value);
                    }}
                  />
              </label>
            </div>
          <button>
            Cadastrar
          </button>
        </form>
        <ul>
            {cat.map((cat)=>{
              return(
                <li key={cat}>
                  {cat}
                </li>
              )
            })}
          </ul>

        <Link to="/">
            Ir para Página Principal
        </Link>
      </PageDefault>
    )
  }
  
  export default CategoryController;