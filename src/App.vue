<template>
  <div id="app">
    <home-header></home-header>
    <router-view></router-view>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader'
import HomeFooter from '@/components/HomeFooter'

export default {
  name: 'app',
  components: {
    'home-header': HomeHeader,
    'home-footer': HomeFooter
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
