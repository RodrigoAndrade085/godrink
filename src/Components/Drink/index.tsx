import {FaTrash, FaPen} from 'react-icons/fa'

import {Container} from './styles'

interface Drinks {
  id: number;
  title: string;
  brewed: string;
  description: string;
  image_url: string;
}

interface DrinksProps {
  drinks: Drinks
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
}


export function Drink({drinks, handleDelete, handleEdit}: DrinksProps): JSX.Element  {
  return (
    <>
      <Container>
        <main>
          <header>
            <img src={drinks.image_url} alt={drinks.title} />
          </header>
            <section className="body">
                <h2>{drinks.title}</h2>
                <p>{drinks.description}</p>
                <p className="price">
                  Fabricado em: <b>{drinks.brewed}</b>
                </p>
            </section>
        </main>
          <section className="footer">
            <div className="icon-container">
            <button
                type="button"
                className="edit"
                onClick={() => handleEdit(drinks.id)}
              >
              <FaPen style={{marginRight: 5}}/>
                Editar
              </button>
              <button
                type="button"
                className="delete"
                onClick={() => handleDelete(drinks.id)}>
              <FaTrash style={{marginRight: 5}}/>
                Deletar
              </button>
            </div>
          </section>
      </Container>
    </>
  )
}