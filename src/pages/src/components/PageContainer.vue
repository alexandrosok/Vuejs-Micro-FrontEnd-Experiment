<template>
  <div class="page-container">
    <h1>{{ msg }}</h1>
    <div v-if="redirection === 'Page 1'">
      <form-component/>
    </div>

    <div v-if="redirection === 'Page 2'">
      <address-form/>
    </div>

    <div v-if="redirection === 'Page 3'">
      <list-view/>
    </div>

  </div>
</template>

<script>

  import form from 'vue-form-component-v1-test'
  import addressForm from 'vue-address-form-v1-mf-structure'
  import ListView from 'vue-list-component-mf-structure'

  export default {
    name: 'Pages',
    components: {FormComponent: form, AddressForm: addressForm, ListView},
    props: {
      redirection: null,
    },
    data () {
      return {
        msg: 'Page Container'
      }
    },
    watch: {},
    beforeMount () {
      // window.addEventListener('redirect', function (e) {
      //   this.redirection = e.detail
      //   console.log(this.redirection)
      // })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
