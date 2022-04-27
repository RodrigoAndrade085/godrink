
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../Components/Header";
import {Dashboard} from '../pages/Dashboard';
import {RegisterDrink} from '../pages/RegisterDrink'
import {EditDrink} from '../pages/EditDrink'


const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/register" element={<RegisterDrink/>} />
      <Route path="/edit/:id" element={<EditDrink/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default Router;
