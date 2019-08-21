<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <SideBar />
    <List />
    <router-view/>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import List from '@/components/List'
export default {
  name: 'App',
  components: {
    SideBar,
    List
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
  margin-top: 60px;
}
</style>
