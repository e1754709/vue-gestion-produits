<template>
  <div class="container">
    <div class="row">
      <h1>{{ title }}</h1>
      <HomeView v-if="!isAboutRoute" />
      <AboutView v-if="isAboutRoute" />
      <footer>
        <p>&copy; 2023</p>
        <RouterLink v-if="!isAboutRoute" to="/about">About</RouterLink>
        <RouterLink v-if="isAboutRoute" to="/">Products</RouterLink>
      </footer>
    </div>
  </div>
</template>

<script>
import '@/assets/css/styles.css'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

export default {
  name: 'App',
  components: {
    HomeView,
    AboutView
  },
  data () {
    return {
      title: 'Gestion de produits'
    }
  },
  computed: {
    isAboutRoute () {
      return this.$route.path === '/about'
    }
  }
}
</script>
