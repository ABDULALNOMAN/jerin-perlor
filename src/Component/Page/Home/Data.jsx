import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Data = () => {
    const pizza = useSelector(state => state.pizza)
    const dispatch = useDispatch();
    return (
        <div>
            {
                pizza.toppings.map(topping => (
                    <div key={topping}>
                        {topping}
                    </div>))
            }
            <button  onClick={()=>dispatch(addTopping('pepperoni'))}>add pepperoni</button>
        </div>
    );
};

export default Data;