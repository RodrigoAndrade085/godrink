import { api } from "../../services/api";

import { createAsyncThunk } from "@reduxjs/toolkit";

interface Drinks {
  id?: number;
  title: string;
  brewed: number;
  description: string;
  image_url: string;
}


const fetchDrinks = createAsyncThunk("drinks/all", async (search?: string) => {
  const response = await api.get("/drinks");
  const drinks = !search ? response.data : response.data.filter((val: Drinks) => 
  val.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
  val.description.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
)
  return drinks;
});

const deleteDrinks = createAsyncThunk("drinks/delete", async (id: number) => {
  const response = await api.delete(`/drinks/${id}`);
  return response.data;
});

const createDrinks = createAsyncThunk("drinks/create", async (drink: Drinks) => {
  const response = await api.post(`/drinks`, drink);
  return response.data;
});

const updateDrink = createAsyncThunk("drinks/update", async ( drink: Drinks) => {
  const response = await api.put(`/drinks/${drink.id}`, drink);
  return response.data;
});


export { fetchDrinks, deleteDrinks,createDrinks, updateDrink };
