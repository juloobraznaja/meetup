<template>
    <div class="registration-page">
        <div class="registration">
            <div class="registration__title">Регистрация</div>
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
    </div>
</template>

<script>
import MeetupInput from '../../../components/Input/index'
import MeetupButton from '../../../components/Button/index'
export default {
    name: 'Registration',
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
        }
    }
}
</script>

<style lang="scss" src="./style.scss" scoped/>