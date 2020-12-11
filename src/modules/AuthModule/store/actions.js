import axios from 'axios';
const URL = 'https://course-vue.javascript.ru';
export default {
    async login({ commit }, { login, password }) {
        try {
            const data = await axios.post(`${URL}/api/auth/login`, {
                "email": login,
                "password": password
            });
            commit('SET_USER', data.data)
            alert(1)
            // location.href = '/'
        } catch (e) {
            alert(2)
        }
    }
}