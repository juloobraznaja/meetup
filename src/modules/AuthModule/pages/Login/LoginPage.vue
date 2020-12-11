<template>
    <div class="login">
        <meetup-login @on-login="handleLogin"/>
    </div>
</template>

<script>
import MeetupLogin from "../../../../components/Login";

export default {
    name: 'Login',
    components: {
        MeetupLogin
    },
    methods: {
        handleLogin(login, password) {
            this.$store.dispatch('auth/login', {
                login,
                password
            })
        }
    }
}
</script>

<style lang="scss" src="./style.scss"/>