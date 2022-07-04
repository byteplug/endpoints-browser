<script>
import YAML from 'yaml'
import specsExample from '@/assets/example.yml?raw'

export default {
  name: 'App',
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
  <router-view />
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>