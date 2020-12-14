import axios from 'axios';
const URL = 'https://course-vue.javascript.ru';
export default {
    async login({ commit }, { login, password }) {
        const data = await axios.post(`${URL}/api/auth/login`, {
            "email": login,
            "password": password
        });
        commit('SET_USER', data.data)
    }
}