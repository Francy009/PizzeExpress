import axios from 'axios';

const SERVICE_PIZZA_EXPRESS = "http://localhost:8080/"
export const getMenu = () => {
    return axios.get(SERVICE_PIZZA_EXPRESS + "menu")
}