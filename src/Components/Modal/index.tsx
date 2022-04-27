import { useRef } from 'react';
import {FaCheckCircle} from 'react-icons/fa'

import {Container, ContainerModal, Form } from './styles'

interface Drink {
  title: string;
  brewed: string;
  description: string;
  image_url: string;
}

interface ModalProps {
  titleModal: string
  handleSetDrinkImg: (img: string) => void
  handleSetDrinkTitle: (title: string) => void
  handleSetDrinkDescription: (description: string) => void
  handleSetDrinkBrewed: (brewed: string) => void
  handleOnSubmit: () => void
  drink?: Drink
  isEditable?: boolean

}

export function Modal({titleModal, handleSetDrinkImg,handleSetDrinkDescription, handleSetDrinkBrewed, handleSetDrinkTitle,handleOnSubmit, drink, isEditable}: ModalProps) {


  const formRef = useRef(null);

 

  return(
    <Container>
      <ContainerModal >
        <Form ref={formRef} onSubmit={handleOnSubmit}>
          <h2>{titleModal}</h2>
      
          <label>URL da Imagem</label>
          <input required type="text" placeholder="Ex: https://images.punkapi.com/v2/2.png" disabled={isEditable} name="img" value={drink?.image_url} onChange={(event) => handleSetDrinkImg(event.target.value)}/>

          <label>Titulo</label>
          <input required type="text" placeholder="Ex: Cerveja" name="title" value={drink?.title} onChange={(event) => handleSetDrinkTitle(event.target.value)}/>

          <label>Ano de Fabricação</label>
          <input required type="number" placeholder="Ex: 2002" name="brewers" value={drink?.brewed} onChange={(event) => handleSetDrinkBrewed(event.target.value)}/>
          
          <label>Descrição</label>
          <textarea required style={{resize: "vertical"}} placeholder="Ex:  uma bebida alcoólica carbonatada..." rows={7} cols={33} name="Description" value={drink?.description} onChange={(event) => handleSetDrinkDescription(event.target.value)}> </textarea>


          <button type="submit">
            Salvar
            <FaCheckCircle style={{marginLeft: 5}} size={18}/>
          </button>
        </Form>
        </ContainerModal>
    </Container>
  )
}