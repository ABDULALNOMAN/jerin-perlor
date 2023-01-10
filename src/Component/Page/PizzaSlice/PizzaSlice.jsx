import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toppings: ['pepperoni'],
    gluten:true
}
export const PizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: ({
        toggleGluten: (state) => {
            state.gluten=!state.gluten
        },
        addTopping: (state, action) => {
            state.toppings=[...state.toppings,action.payload]
        },
    }),
})
export const { toggleGluten, addTopping } = PizzaSlice.actions
export default PizzaSlice.reducer