<template>
  <i-row>
    <i-column>
      <div class="_font-weight:bold _margin-bottom:1/2">Endpoints</div>
      <div class="_font-style:italic _margin-bottom:1">To be written.</div>
      <i-list-group :border="false">
        <i-list-group-item
          v-for="(endpoint, index) in specs.value.endpoints"
          :key="index"
        >
          <router-link :to="'/endpoints/' + index">
            {{ index }}
          </router-link>
        </i-list-group-item>
      </i-list-group>
    </i-column>
    <i-column>
      <div class="_font-weight:bold _margin-bottom:1/2">Collections</div>
      <div class="_font-style:italic _margin-bottom:1">To be written.</div>
      <i-list-group :border="false">
        <i-list-group-item
          v-for="(collection, index) in specs.value.collections"
          :key="index"
        >
          <router-link :to="'/collection/' + index">
            {{ index }}
          </router-link>
        </i-list-group-item>
      </i-list-group>
    </i-column>
    <i-column>
      <div class="_font-weight:bold _margin-bottom:1/2">Records</div>
      <div class="_font-style:italic _margin-bottom:1">To be written.</div>
      <i-list-group :border="false">
        <i-list-group-item
          v-for="(record, index) in specs.value.records"
          :key="index"
        >
          <router-link to="/records">
            {{ index }}
          </router-link>
        </i-list-group-item>
      </i-list-group>
    </i-column>
  </i-row>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
