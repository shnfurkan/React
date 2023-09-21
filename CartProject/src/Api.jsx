import axios from "axios"
import { addedCarts, getCart, getMenus, changeCartQuantity, changePizzasQuantity, deletedCarts } from "./slices/MenuSlice";

export const gettedPizzasActions = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3000/menu');
    dispatch(getMenus(response.data));
}

export const changePizzasActions = (newPizzaDatas,id) => async (dispatch) => {
    const response = await axios.put(`http://localhost:3000/menu/${id}`, newPizzaDatas);
    dispatch(changePizzasQuantity(response.data));
}

export const gettedCartActions = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3000/cart');
    dispatch(getCart(response.data));
}

export const changeCartActions = (newPizzaDatas,id) => async (dispatch) => {
    const response = await axios.put(`http://localhost:3000/cart/${id}`,newPizzaDatas);
    dispatch(changeCartQuantity(response.data));
}

export const addedCartActions = (newPizzaDatas) => async (dispatch) => {
    const response = await axios.post('http://localhost:3000/cart',newPizzaDatas);
    dispatch(addedCarts(response.data));
}

export const deleteCartActions = (id) => async (dispatch) => {
    const response = await axios.delete(`http://localhost:3000/cart/${id}`);
    dispatch(deletedCarts(id));
    
}

