<template>
    <div class="meetup-login">
        <div class="meetup-login__title">Для входа в систему введите логин(email) и пароль</div>
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
</template>

<script>
import MeetupInput from '../Input'
import MeetupButton from '../Button'
export default {
    name: 'MeetupLogin',
    components: {
        MeetupInput,
        MeetupButton
    },
    data() {
        return {
            hidePassword: true,
            login: null,
            password: null
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
            this.$emit('on-login', this.login, this.password)
        }
    }
}
</script>

<style lang="scss" src="./style.scss"/>