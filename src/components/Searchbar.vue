<template>
  <div>
    <i-input :size="size" v-model="value" placeholder="api.my-company.com/v3">
      <template #append>
        <i-button color="dark" @click="$root.loadFromUrl(url)">Browse</i-button>
      </template>
    </i-input>
    <div v-if="fromFile">
      <span>Or import from <a href="#" @click="openSpecsDialog">YAML specs</a></span>
      <input
        @change="loadSpecsFromFile"
        type="file"
        ref="yamlSpecsInput"
        hidden
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  props: {
    size: {
      type: String,
      default: 'md'
    },
    fromFile: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      value: ""
    }
  },
  methods: {
    openSpecsDialog() {
      this.$refs.yamlSpecsInput.click()
    },
    loadSpecsFromFile(e) {
      this.$root.loadFromFile(e.target.files[0])
    }
  }
}
</script>
