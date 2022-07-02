<template>
  <div
    class="_height:100% _background:primary _display:flex _flex-direction:column"
  >
    <i-nav color="dark" class="_justify-content:end">
        <i-nav-item to="/standard/1.0/document">Standard Document</i-nav-item>
        <i-nav-item to="/toolkit">Development Toolkits</i-nav-item>
    </i-nav>

    <div class="_flex-grow:1 _display:flex _flex-direction:column _justify-content:center _align-items:center">
      <h1 class="h2 _margin-bottom:4">Byteplug Endpoint Browser</h1>
      <div>
        <i-input placeholder="api.my-company.com/v3">
          <template #append>
            <i-button color="dark">Browse</i-button>
          </template>
        </i-input>
        <span>Or import from YAML file</span>
      </div>
    </div>
    <div class="_display:flex _justify-content:center">
      <div class="_flex-grow:1">
        <svg height="60" width="100%">
          <line x1="6%" y1="48px" x2="94%" y2="48px" style="stroke:rgba(255,255,255,0.5);stroke-width:2" />
        </svg>
      </div>
      <div class="_margin-bottom:2">
        <img src="@/assets/logo.svg" height="60" alt="">
      </div>
      <div class="_flex-grow:1">
        <svg height="60" width="100%">
          <line x1="6%" y1="48px" x2="94%" y2="48px" style="stroke:rgba(255,255,255,0.5);stroke-width:2" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Browser'
}
</script>
