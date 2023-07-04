import React, { createContext, useContext, useReducer } from "react";
const cartstateContext = createContext();
const cartdispatchedContext = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case "Add":
      return[...state,{id:action.id,name:action.name}]
      default:
        console.log("error in reducer")
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <cartdispatchedContext.Provider value={dispatch}>
      <cartstateContext.Provider value={state}>
        {children}
      </cartstateContext.Provider>
    </cartdispatchedContext.Provider>
  );
};
export default CartProvider;
export const useCart = () => useContext(cartstateContext);
export const useDispatchCart = () => useContext(cartdispatchedContext);
