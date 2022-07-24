<template>
  <div>
    <span class="_font-size:lg _font-weight:bold _margin-right:1">My Company</span>
    <span class="_text:muted">api.my-company.com/v3</span>
    <p class="_font-style:italic">This is a description of my company</p>
    <div class="_display:flex _font-size:sm">
      <div class="_margin-right:1">
        <img src="@/assets/icons/address-card-regular.svg" height="16" alt="">
        contact@my-company.com
      </div>
      <div class="_margin-right:1">
        <img src="@/assets/icons/handshake-regular.svg" height="16" alt="">
        MIT license
      </div>
      <div class="_margin-right:1">
        <img src="@/assets/icons/file-pdf-regular.svg" height="16" alt="">
        Download PDF
      </div>
      <div>
        <img src="@/assets/icons/file-code-regular.svg" height="16" alt="">
        Specs Document
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
