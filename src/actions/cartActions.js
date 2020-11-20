import { ADD_TO_CART, CHECK_IN_CART, PLACE_ORDER } from "./types";
import axios from "axios";
import { apiBaseUrl } from "../constants";

export const addToCart = (product) => (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        lineItem: {
            product,
            quantity: 1
        }
    });
}

export const placeOrder = (lineItems, token) => async (dispatch) => {
    const { data } = await axios.post(apiBaseUrl + 'orders', { lineItems }, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    dispatch({ type: PLACE_ORDER, order: data });
}