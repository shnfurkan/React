import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  datas: [],
  carts: [],
}

export const MenuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    getMenus: (state,actions) => {
      state.datas = actions.payload
    },
    changePizzasQuantity: (state,actions) => {
      
      const updatedQuantity = actions.payload.quantity;

      const updatedMenus = state.datas.map((menu) => {
        if (menu.id === actions.payload.id) {
          return {
            ...menu,
            quantity: updatedQuantity,
          };
        }
        return menu;
      });

      state.datas = updatedMenus;
    },
    getCart: (state,actions) => {
      state.carts = actions.payload;
    },
    changeCartQuantity: (state,actions) => {
      const updatedQuantity = actions.payload.quantity;

      const updatedMenus = state.carts.map((menu) => {
        if (menu.id === actions.payload.id) {
          return {
            ...menu,
            quantity: updatedQuantity,
          };
        }
        return menu;
      });

      state.carts = updatedMenus;
    },
    addedCarts: (state,actions) => {
      state.carts.push(actions.payload);
    },
    deletedCarts: (state,actions) => {
      const deletedMovies = state.carts.filter((value)=> {
        return value.id !== actions.payload
      })
      state.carts = deletedMovies;
    }
  },
})

export const { getMenus,changePizzasQuantity,getCart,changeCartQuantity,addedCarts,deletedCarts } = MenuSlice.actions

export default MenuSlice.reducer

