<template>
  <i-container
    fluid
    class="_height:30% _background:primary"
    style="min-height: 250px;"
  >
    <i-container class="_display:flex">
      <div class="_padding-top:1 _padding-x:1 ">
        <img src="@/assets/logo.svg" height="80" alt="">
      </div>
      <div class="_flex-grow:1">
        <div class="_border-bottom _display:flex _justify-content:space-between _align-items:end">
          <div>
            <h4>Byteplug HTTP API Browser</h4>
          </div>
          <div class="_padding-bottom:1">
            <i-input size="sm" placeholder="api.my-company.com/v3">
              <template #append>
                <i-button color="dark">Browse</i-button>
              </template>
            </i-input>
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
  <i-container>
    <i-card style="transform: translateY(-50px);">
      <div class="_display:flex _justify-content:space-between">
        <i-breadcrumb>
          <i-breadcrumb-item>Index</i-breadcrumb-item>
          <i-breadcrumb-item active>Collections</i-breadcrumb-item>
        </i-breadcrumb>
        <div class="_display:flex">
          <div class="_margin-x:1" style="text-align: center;">{{ enums.length }}<br>Enums</div>
          <div class="_margin-x:1" style="text-align: center;">7<br>Schemas</div>
          <div class="_margin-x:1" style="text-align: center;">12<br>Collections</div>
          <div class="_margin-x:1" style="text-align: center;">11<br>Endpoints</div>
        </div>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </i-card>
  </i-container>
</template>

<script>
export default {
  name: 'Api',
  data() {
    return {
      specs: {
        "enums": {
          "status": {
            "values": [
              "foo",
              "bar",
              "quz"
            ],
            "default": "foo",
            "documentation": "This is the doc of the status enumeration."
          },
          "validity": {
            "values": [
              "valid",
              "invalid",
              "unknown"
            ],
            "default": "invalid"
          }
        }
      }
    }
  },
  computed: {
    enums: function() {
      if ("enums" in this.specs) {
        return Object.entries(this.specs["enums"]).map(element => {
          var obj = {
            'name': element[0],
            'values': element[1]['values'],
            'default': element[1]['default'],
          }

          if ("documentation" in element[1]) {
            obj['documentation'] = element[1]['documentation']
          }

          return obj
        })
      }

      return []
    }
  }
}
</script>
