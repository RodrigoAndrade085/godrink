import { useEffect, useState } from 'react';
import { Drink } from '../../Components/Drink';
import { api } from '../../services/api';

import {InputContainer,FoodsContainer} from './styles'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux';
import { deleteDrinks, fetchDrinks } from '../../redux/drinks/actions';

interface Drinks {
  id: number;
  title: string;
  brewed: string;
  description: string;
  image_url: string;
}


export function Dashboard()  {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [searchDrink, setSearchDrink] = useState('')

  async function handleDeleteDrink (id: number) {
    dispatch(deleteDrinks(id))
    
    dispatch(fetchDrinks())
  }

  async function handleEditDrink (id: number) {
    navigate(`/edit/${id}`)
  }

  const {drinks} = useAppSelector((state) => state.drinks)

  
  useEffect(() => {
    
    dispatch(fetchDrinks())
    
  }, [dispatch])


useEffect(() => {
    dispatch(fetchDrinks(searchDrink))
}, [dispatch, searchDrink])


    return (
      <>
      <InputContainer>
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchDrink}
          onChange={(event)=> setSearchDrink(event.target.value)} />
  
      </InputContainer>

      <FoodsContainer>
        {drinks && drinks.map(drink => (
          <Drink 
            key={drink.id}
            drinks={drink}
            handleDelete={handleDeleteDrink}
            handleEdit={handleEditDrink}
          />
        
        ))}
        
      </FoodsContainer>
      </>
    );

};

