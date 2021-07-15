<template>
  <div class="page-body">
    <Nuxt />
    <ModalComponent
      v-if="$store.state.isModalOpen"
      :content="$store.state.modalContent"
    />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  mounted() {
    console.log('url', window.location.search)
  },
}
</script>

<style>
#app {
  overflow: hidden;
}
</style>
