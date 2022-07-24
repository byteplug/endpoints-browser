<template>
  <i-card>
    <div class="_display:flex _justify-content:space-between _margin-bottom:2">
      <div class="_display:flex _justify-content:space-between _align-items:start">
        <metadata-card/>
      </div>
      <div class="_display:flex">
        <div class="_margin-x:1 _text-align:center">
          <router-link to="/records">
            {{ Object.keys(specs.value.records).length }}
            <br>Records
          </router-link>
        </div>
        <div class="_margin-x:1 _text-align:center">
          <router-link to="/collections">
            {{ Object.keys(specs.value.collections).length }}
            <br>Collections
          </router-link>
        </div>
        <div class="_margin-x:1 _text-align:center">
          <router-link to="/endpoints">
            {{ Object.keys(specs.value.endpoints).length }}
            <br>Endpoints
          </router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </i-card>
</template>

<script>
import MetadataCard from '@/components/MetadataCard.vue'

export default {
  name: 'Browser',
  components: {
    MetadataCard
  }
}
</script>
