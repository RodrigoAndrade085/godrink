import { Modal } from "../../Components/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAppDispatch, useAppSelector } from "../../redux";
import { updateDrink } from "../../redux/drinks/actions";

interface Drinks {
  id: number;
  title: string;
  brewed: string;
  description: string;
  image_url: string;
}

export function EditDrink()  {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [title, setTitle] = useState('')
  const [brewed, setBreawed] = useState('')
  const [description, setDescription] = useState('')
  const [image_url, setImageUrl] = useState('')

  
  const handleSetDrinkImg = (img: string) => {
    setImageUrl(img)
  }

  const handleSetDrinkTitle = (title: string) => {
    setTitle(title)
  }
  const handleSetDrinkDescription = (description: string) => {
    setDescription(description)
  }
  const handleSetDrinkBrewed = (brewed: string) => {
    setBreawed(brewed)
  }

  async function hendleEditDrink() {
    
    
    if (title.trim() === '' || description.trim() === '' || image_url.trim() === '') {
      return;
    }
    dispatch(updateDrink({
      id: Number(id),
      title,
      brewed: Number(brewed),
      description,
      image_url} ))
      // console.log({title, brewed,description, image_url})
      
      navigate('/')
    }
    
    const {id} = useParams()
    const {drinks} = useAppSelector((state) => state.drinks)

    
    useEffect(() => {
      const drink = drinks.find(item => item.id === Number(id))
      if(drink) {
        setTitle(drink.title)
        setBreawed(drink.brewed)
        setDescription(drink.description)
        setImageUrl(drink.image_url)
      }
    }, [drinks, id])

  return (
    <>
      <Modal
       titleModal="Editar Produto"
       handleSetDrinkImg={handleSetDrinkImg}
       handleSetDrinkTitle={handleSetDrinkTitle}
       handleSetDrinkDescription={handleSetDrinkDescription}
       handleSetDrinkBrewed={handleSetDrinkBrewed}
       drink={{title, brewed,description, image_url}}
       handleOnSubmit={hendleEditDrink}
       isEditable={true}
      />
    </>
  );

};

