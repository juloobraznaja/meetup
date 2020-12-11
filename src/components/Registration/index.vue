<template>
    <div class="meetup-registration">
        <div class="meetup-registration__title">Регистрация</div>
        <meetup-input
            type="email"
            v-model="email"
            label="Email"
        />
        <meetup-input
                type="text"
                placeholder="Иван"
                v-model="name"
                label="Имя"
        />
        <meetup-input type="password"
                      placeholder="password"
                      v-model="password"
                      label="Пароль"
        />
        <meetup-input type="password"
                      placeholder="password"
                      v-model="repeatPassword"
                      label="Повтор пароля"
        />
        <meetup-button :disabled="disabled">Зарегистрироваться</meetup-button>
    </div>
</template>

<script>
import MeetupInput from '../Input'
import MeetupButton from '../Button'
export default {
    name: 'MeetupRegistration',
    components: {
        MeetupInput,
        MeetupButton
    },
    data() {
        return {
            hidePassword: true,
            email: null,
            name: null,
            password: null,
            repeatPassword: null
        }
    },
    computed: {
      disabled() {
        // TODO: добавить проверку
        return false;
      }
    },
    methods: {
        toggleHidePassword() {
            this.hidePassword = !this.hidePassword;
        },
        handleLogin() {
            alert(1);
            this.$emit('on-login', this.login, this.password)
        }
    }
}
</script>

<style lang="scss" src="./style.scss"/>