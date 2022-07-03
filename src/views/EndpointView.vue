<template>
  <p>Endpoint</p>
  <p v-if="$route.name == 'endpoint'">Show non-collection '{{ $route.params.path }}' endpoint.</p>
  <p v-else-if="$route.name == 'collection-endpoint'">Show '{{ $route.params.path}}' endpoint from '{{ $route.params.name}}' collection.</p>
</template>

<script>
export default {
  name: 'EndpointView'
}
</script>
