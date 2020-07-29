import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CategoryController(){
    return(
      <PageDefault>
        <h1>Cadastro de Categoria</h1>
        <form>

          <label>
            Nome da Categoria:
              <input
                type="text"
                name = "name"
                id = "name"
              />
          </label>

          <button>
            Cadastrar
          </button>
        </form>

        <Link to="/">
            Ir para Página Principal
        </Link>
      </PageDefault>
    )
  }
  
  export default CategoryController;