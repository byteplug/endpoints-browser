<script>
import YAML from 'yaml'
import specsExample from '@/assets/example.yml?raw'

import Searchbar from '@/components/Searchbar.vue'

export default {
  name: 'App',
  components: {
    Searchbar
  },
  expose: ['loadFromFile', 'loadFromUrl'],
  methods: {
    loadFromFile(file) {
      const reader = new FileReader()
      reader.onload = e => {
        this.specs.value = YAML.parse(e.target.result)
        this.$router.push('/')
      }
      reader.readAsText(file)
    },
    loadFromUrl(url) {
      this.specs.value = YAML.parse(specsExample)
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div v-if="$route.name == 'search'" class="_height:100%">
    <router-view/>
  </div>
  <div v-else>
    <i-container
      fluid
      class="_background:primary"
      style="height: 30%; min-height: 250px;"
    >
      <i-container class="_display:flex">
        <div class="_padding-top:1 _padding-x:1 ">
          <router-link to="/">
            <img src="@/assets/logo.svg" height="60" alt="">
          </router-link>
        </div>
        <div class="_flex-grow:1">
          <div class="_border-bottom _display:flex _justify-content:space-between _align-items:end">
            <div>
              <h4>Endpoints Browser</h4>
            </div>
            <div class="_padding-bottom:1">
              <searchbar :fromFile="false"/>
            </div>
          </div>
          <div>
            <i-nav color="dark" class="_justify-content:end">
              <i-nav-item to="/standard/1.0/document">Standard Document</i-nav-item>
              <i-nav-item to="/toolkit">Development Toolkits</i-nav-item>
            </i-nav>
          </div>
        </div>
      </i-container>
    </i-container>
    <i-container style="min-height: 70%;">
      <router-view style="transform: translateY(-50px);" />
    </i-container>
  </div>
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>