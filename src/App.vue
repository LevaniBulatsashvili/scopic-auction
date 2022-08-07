<template>
  <Header/>
  <router-view :key="route.fullPath"/>
  <Footer/>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"

const route = useRoute()
const router = useRouter()

</script>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
