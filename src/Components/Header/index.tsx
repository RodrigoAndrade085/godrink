import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
import { Container } from './styles';

export function Header() {
  return (
    <Container >
      <div >
        <button className="header">
          <FaUser size={20}/>
        </button>
        <nav>
          <Link to="/"><button>Listagem</button></Link>
          <Link to="/register"><button >Cadastrar Produto</button></Link>
        </nav>
      </div>
    </Container>
  )
};