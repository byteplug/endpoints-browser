import { defineStore } from 'pinia'

import YAML from 'yaml'
import specsExample from '@/assets/example.yml?raw'

export const specsStore = defineStore({
  id: 'specs',
  state: () => ({
    value: YAML.parse(specsExample)
  }),
  getters: {
    records: (state) => {
      var obj = {}
      Object.keys(state.value.records).forEach(key => {
        obj[key] = {
          name: "Undefined",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          specs: state.value.records[key],
          rawSpecs: YAML.stringify(state.value.records[key])
        }
      })
      return obj
    },
    collections: (state) => {
      // var obj = {}

      // obj['foo'] = {
      //   name: "Undefined",
      //   description: "To be written.",

      //   endpoints: []
      // }
      // return obj
      return [1, 2, 3]
    },
    endpoints: (state) => {
      return [42]
    }
  },
  actions: {
    // increment() {
    //   this.counter++
    // }
  }
})
