<template>
  <v-app class="ma-0">
    <nav-menu></nav-menu>
    <main>
      <jumbotron></jumbotron>
      <over-may-britt></over-may-britt>
      <two-block></two-block>
      <betekenen></betekenen>
      <verwachtingen></verwachtingen>
      <tarieven></tarieven>
    </main>
    <footer-comp></footer-comp>
  </v-app>
</template>

<script>
import navMenu from './components/menu.vue'
import jumbotron from './components/jumbotron.vue'
import overMayBritt from './components/over-may-britt.vue'
import twoBlock from './components/two-block.vue'
import betekenen from './components/betekenen.vue'
import verwachtingen from './components/verwachtingen.vue'
import tarieven from './components/tarieven.vue'
import footerComp from './components/footer.vue'

export default {
  name: 'App',
  components: {
    navMenu,
    jumbotron,
    overMayBritt,
    twoBlock,
    betekenen,
    verwachtingen,
    tarieven,
    footerComp,
  },
  data() {
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/home', icon: 'home' },
        { title: 'Sign Up', path: '/signup', icon: 'face' },
        { title: 'Sign In', path: '/signin', icon: 'lock_open' },
      ],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
