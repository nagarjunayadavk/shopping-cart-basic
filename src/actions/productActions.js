import axios from 'axios';
import { apiBaseUrl } from '../constants';
import { FETCH_PRODUCTS, FETCH_BRANDS, FETCH_CATEGORIES } from './types';

export function fetchProducts(key = null, value = null) {
    return async function (dispatch) {
        let url = apiBaseUrl + 'products';
        if (key) {
            url += '?' + key + '=' + value;
        }

        let { data } = await axios.get(url);
        dispatch({ type: FETCH_PRODUCTS, products: data })
    }
}

export const fetchCategories = () => async (dispatch) => {
    console.log('>>>> from thunk action fetchCategories..')
    let { data } = await axios.get(apiBaseUrl + 'categories');
    dispatch({ type: FETCH_CATEGORIES, categories: data });
}

export const fetchBrands = () => async (dispatch) => {
    console.log('>>>> from thunk action fetchBrands..')
    let { data } = await axios.get(apiBaseUrl + 'brands');
    dispatch({ type: FETCH_BRANDS, brands: data });
}
