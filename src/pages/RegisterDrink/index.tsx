import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../Components/Modal";
import { useAppDispatch } from "../../redux";
import { createDrinks } from "../../redux/drinks/actions";

export function RegisterDrink()  {
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

  async function hendleCreateNewDrink() {
    if (title.trim() === '' || brewed.trim() === '' || description.trim() === '' || image_url.trim() === '') {
      return;
    }


    dispatch(createDrinks(
      {title,
      brewed: Number(brewed),
      description,
      image_url
    }))
    navigate('/')
  }
  
  return (
    <>
      <Modal
       titleModal="Adicionar Novo Produto"
       handleSetDrinkImg={handleSetDrinkImg}
       handleSetDrinkTitle={handleSetDrinkTitle}
       handleSetDrinkDescription={handleSetDrinkDescription}
       handleSetDrinkBrewed={handleSetDrinkBrewed}
       drink={{title, brewed,description, image_url}}
       handleOnSubmit={hendleCreateNewDrink}
       isEditable={false}
      />
    </>
  );

};

