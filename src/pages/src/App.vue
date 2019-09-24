<template>
  <div id="pageContainer">
    <PageContainer :redirection="redirection"/>
  </div>
</template>

<script>

  import PageContainer from './components/PageContainer.vue'

  export default {
    name: 'App',
    components: {PageContainer},
    data () {
      return {
        redirection: null
      }
    },

    beforeMount () {
      window.addEventListener('redirect', (e) => {
        this.redirection = e.detail
      })
    },

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
