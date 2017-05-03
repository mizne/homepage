<template>
  <div id="app">
    <home-header></home-header>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader'

export default {
  name: 'app',
  components: {
    'home-header': HomeHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
