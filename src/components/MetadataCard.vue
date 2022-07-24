<template>
  <div>
    <span class="_font-size:lg _font-weight:bold _margin-right:1">
      {{ specs.value.title }}
    </span>
    <span class="_text:muted">tasks.byteplug.io</span>
    <i-button size="sm" class="_margin-left:1">
      <img src="@/assets/icons/file-pdf-regular.svg" height="16" alt=""/>
      <span class="_margin-left:1/2">Download PDF</span>
    </i-button>
    <i-button size="sm" class="_margin-left:1/2">
      <img src="@/assets/icons/file-code-regular.svg" height="16" alt="">
      <span class="_margin-left:1/2">Read Specs</span>
    </i-button>
    <p class="_font-style:italic _width:75%">{{ specs.value.summary }}</p>
    <div class="_display:flex _font-size:sm">
      <div class="_margin-right:1">
        <img src="@/assets/icons/address-card-regular.svg" height="16" alt="">
        {{ specs.value.contact.email }}
      </div>
      <div class="_margin-right:1">
        <img src="@/assets/icons/handshake-regular.svg" height="16" alt="">
        {{ specs.value.license.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetadataCard"
}
</script>

<style>

</style>
