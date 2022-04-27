import {createSlice} from '@reduxjs/toolkit'
import { fetchDrinks, deleteDrinks,createDrinks, updateDrink} from './actions';
import { toast } from 'react-toastify';

interface Drinks {
  id: number;
  title: string;
  brewed: string;
  description: string;
  image_url: string;
}

interface state {
  isLoading: boolean;
  errors: string;
  drinks: Drinks[]
}


const initialState:state = {
  isLoading: false,
  drinks: [],
  errors: '',
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    //ACTION GET ALL
    builder.addCase(fetchDrinks.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchDrinks.fulfilled, (state, action) => {
      state.drinks = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchDrinks.rejected, (state, action) => {
      state.drinks = []
      state.isLoading = false
      state.errors= action.error.message || ''
      toast.error(action.error.message, {
        theme: "colored"
      })
    })

    //ACTION DELETE
    builder.addCase(deleteDrinks.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(deleteDrinks.fulfilled, (state, action) => {
      state.drinks = [...state.drinks].filter(food => food.id !== action.payload.id);
      state.isLoading = false
      toast.success("Drink Deletado com Sucesso", {
        theme: "colored"
      })
    })
    builder.addCase(deleteDrinks.rejected, (state, action) => {
      state.drinks = []
      state.isLoading = false
      state.errors= action.error.message || ''
      toast.error(action.error.message, {
        theme: "colored"
      })
    })

    //ACTION UPDATE
    builder.addCase(updateDrink.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(updateDrink.fulfilled, (state, action) => {
      state.drinks =  [...state.drinks, action.payload]
      state.isLoading = false
      toast.success("Drink Atualizado com Sucesso", {
        theme: "colored"
      })
    })
    builder.addCase(updateDrink.rejected, (state, action) => {
      state.drinks = []
      state.isLoading = false
      state.errors= action.error.message || ''
      toast.error(action.error.message, {
        theme: "colored"
      })
    })

    //ACTION CREATE
    builder.addCase(createDrinks.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(createDrinks.fulfilled, (state, action) => {
      state.drinks = action.payload.drink
      state.isLoading = false
      toast.success("Drink Cadastrado com Sucesso", {
        theme: "colored"
      })
    })
    builder.addCase(createDrinks.rejected, (state, action) => {
      state.drinks = []
      state.isLoading = false
      state.errors= action.error.message || ''
      toast.error(action.error.message, {
        theme: "colored"
      })
    })
  }
})

export const actions = drinksSlice.actions;

export default drinksSlice.reducer

