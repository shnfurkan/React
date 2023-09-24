import axios from "axios"
import { addedCarts, getCart, getMenus, changeCartQuantity, changePizzasQuantity, deletedCarts, clearCarts, clearDatas } from "./slices/MenuSlice";

// Her proje açıldığında apiden pizza değerlerimizi alır ve toolkiti besler.
export const gettedPizzasActions = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3000/menu');
    dispatch(getMenus(response.data));
}

// Button tetiklendiğinde quantity değeri hem apide hem toolkitte değişir.
export const changePizzasActions = (newPizzaDatas,id) => async (dispatch) => {
    const response = await axios.put(`http://localhost:3000/menu/${id}`, newPizzaDatas);
    dispatch(changePizzasQuantity(response.data));
}

// Her proje açıldığında apiden cart değerlerimizi alır ve toolkiti besler.
export const gettedCartActions = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3000/cart');
    dispatch(getCart(response.data));
}

// Cartta var ise quantity değerini hem apide hem toolkitte güncelleriz.
export const changeCartActions = (newPizzaDatas,id) => async (dispatch) => {
    const response = await axios.put(`http://localhost:3000/cart/${id}`,newPizzaDatas);
    dispatch(changeCartQuantity(response.data));
}

// Cartta yok ise hem apiye hem toolkite ekleriz.
export const addedCartActions = (newPizzaDatas) => async (dispatch) => {
    const response = await axios.post('http://localhost:3000/cart',newPizzaDatas);
    dispatch(addedCarts(response.data));
}

// Eğer Carttaki quantity = 0 ise carttan veriyi hem apiden hem toolkitten sileriz.
export const deleteCartActions = (id) => async (dispatch) => {
    const response = await axios.delete(`http://localhost:3000/cart/${id}`);
    dispatch(deletedCarts(id));
}

// Button tetiklendiğinde hem apide hem toolkitte cart yapısını tamamen siler ve menünün quantity değerini 0 yapar.
export const clearCartActions = (carts,datas) => async (dispatch) => {
    for(const items of carts) {
        await axios.delete(`http://localhost:3000/cart/${items.id}`);
    }

    {
        datas.map( async (items)=> {
            if(items.quantity>0) {
                const newItemsQuantity = {...items, quantity:0}
                const response = await axios.put(`http://localhost:3000/menu/${items.id}`, newItemsQuantity);
                dispatch(clearDatas(response.data));
                debugger;
            }
        })
    }
    dispatch(clearCarts());
}
