<template>
    <div class="login-page">
        <div class="login">
            <div class="login__title">Для входа в систему введите логин(email) и пароль</div>
            <meetup-input
                    type="email"
                    placeholder="demo@email"
                    v-model="login"
                    label="Email"
            />
            <meetup-input type="password"
                          placeholder="password"
                          v-model="password"
                          label="Пароль"
            />
            <meetup-button :disabled="disabledLogin" @on-click="handleLogin">Войти</meetup-button>
        </div>
        <div style="color: red" v-if="loginError">Ошибка авторизациии</div>
    </div>
</template>

<script>
import MeetupInput from '../../../components/Input/index'
import MeetupButton from '../../../components/Button/index'
export default {
    name: 'Login',
    components: {
        MeetupInput,
        MeetupButton
    },
    data() {
        return {
            hidePassword: true,
            login: null,
            password: null,
            loginError: false
        }
    },
    computed: {
        disabledLogin() {
            return !this.login || !this.password;
        }
    },
    methods: {
        toggleHidePassword() {
            this.hidePassword = !this.hidePassword;
        },
        handleLogin() {
            this.$store.dispatch('auth/login' , {
                login: this.login,
                password: this.password
            }).catch(() => {
                this.loginError = true;
            })
        }
    },
    watch: {
        login() {
            this.loginError = false;
        },
        password() {
            this.loginError = false;
        }
    }
}
</script>

<style lang="scss" src="./style.scss" scoped/>