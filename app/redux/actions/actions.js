const ADD_CART = "ADD_CART";
const UPDATE_CART = "UPDATE_CART";
const RESET_CART = "RESET_CART";

export const addCart = (data) => {
  return {
    type: ADD_CART,
    payload: data,
  };
};

export const updateCart = (data) => {
  return {
    type: UPDATE_CART,
    payload: data,
  };
};

export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};
