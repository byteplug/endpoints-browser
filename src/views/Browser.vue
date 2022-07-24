<template>
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
  <i-container
    style="min-height: 70%;"
  >
    <i-card style="transform: translateY(-50px);">
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
      <router-view></router-view>
    </i-card>
  </i-container>
</template>

<script>
import Searchbar from '@/components/Searchbar.vue'
import MetadataCard from '@/components/MetadataCard.vue'

export default {
  name: 'Browser',
  components: {
    Searchbar,
    MetadataCard
  }
}
</script>
