<script setup>
  import { ref } from "vue";
  import { useContext } from 'vite-ssr/vue'

  const { initialState } = useContext()
  const homeLocalState = ref(initialState.homeLocalState || null)
  const counter = ref(0)
  const increase = () => counter.value++
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <button @click="increase">{{ counter }}</button>
      {{initialState.myData.title}}
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
