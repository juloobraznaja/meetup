<template>
  <div class="app">
    <header class="app__header">
      <div class="app__logo">
        <a href="/" class="app__logo-title">Meetup</a>
        <meetup-clock/>
      </div>
      <nav>
        <a v-if="!$user" href="/login">Вход</a>
        <a v-if="!$user"  href="/registration">Регистрация</a>
        <a v-if="!$user"  href="#">Создать митап</a>
        <a v-if="$user"  href="#">Мои митапы</a>
        <a v-if="$user"  href="#">Организуемые митапы</a>
        <a v-if="$user"  href="#">Создать митап</a>
        <a v-if="$user"  href="#">{{ `${$user.fullname} '(выйти)'`  }}</a>
      </nav>
    </header>
    <main class="app__main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import MeetupClock from './components/Clock'

export default {
  name: 'App',
  components: {
    MeetupClock
  }
}
</script>

<style lang="scss" src="./App.scss"></style>
